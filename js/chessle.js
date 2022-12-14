const MAX_GUESSES = 50;

const LIGHT_BOX = 'bg-dark';
const BLACK_BOX = 'text-white bg-secondary';
const YELLOW_BOX = 'text-white bg-warning';
const GREEN_BOX = 'text-white bg-success';

const RESULT_TO_BOX_MAP = {
    'g': GREEN_BOX,
    'y': YELLOW_BOX,
    'b': BLACK_BOX
};

const ANS_LENGTH = 10;

const RESULT_TO_EMOJI_MAP = {
    'g': '🟩',
    'y': '🟨',
    'b': '⬛'
};

const GUESS_BOX_SIZE_TO_FONT_WEIGHT = {
    'large': 'bold',
    'medium': 'bold',
    'small': 'normal',
    'tiny': 'normal'
};

const GUESS_BOX_SIZE_WIDTH_HEIGHT = {
    'large': '5rem',
    'medium': '4rem',
    'small': '3rem',
    'tiny': '2rem'
};

const GUESS_BOX_SIZE_TO_FONT_SIZE = {
    'large': {
        3: '2rem',
        4: '1.8rem',
        5: '1.4rem',
        6: '1.2rem',
        7: '1rem'
    },
    'medium': {
        3: '1.5rem',
        4: '1.4rem',
        5: '1.15rem',
        6: '1rem',
        7: '0.85rem'
    },
    'small': {
        3: '1.4rem',
        4: '1.15rem',
        5: '0.95rem',
        6: '0.85rem',
        7: '0.7rem'
    },
    'tiny': {
        3: '1.05rem',
        4: '0.85rem',
        5: '0.7rem',
        6: '0.6rem',
        7: '0.5rem'
    }
};

let date;
let chessleNum;
let fullAns;
let ans;
let ansName;
let chessableLink;
let userId;

let prevGuesses = [];
let prevResults = [];
let curGuessStack = [];
let isGameOver = false;

let percentCorrect;
let avgTries;

function submitGuess() {
    let guess = game.history();
    // Error if not all the boxes are filled up
    if (guess.length < ANS_LENGTH()) {
        createAlert('errorBox', 'errorArea', 'Fill up all the moves first!', 'danger');
        return;
    }

    // Check guess
    let result = check(guess, ans);
    prevGuesses.push(guess);
    prevResults.push(result);

    // Add guess and result to new row
    addPrevGuessHtml(guess, result);

    // Is the guess correct?
    if (result.every(val => val === 'g')) {
        gameOver(true);
        return;
    }

    // Did they run out of guesses?
    if (prevGuesses.length >= MAX_GUESSES) {
        gameOver(false);
        return;
    }

    resetBoard();
}

function gameOver(isWin) {
    // Get rid of the now unnecessary buttons
    document.getElementById('currentGuess').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('undoButton').style.display = 'none';
    document.getElementById('flipButton').style.display = 'none';
    document.getElementById('fillButton').style.display = 'none';
    isGameOver = true;
    localStorage.setItem('isWin', isWin);

    // Show endgame modal
    if (isWin) {
        openShareModal('Congrats, you won!');
    } else {
        openShareModal('Nice try!');
    }
}

function check(guess, answer) {
    if (guess.length !== ANS_LENGTH() || answer.length !== ANS_LENGTH()) {
        let err = 'Something went seriously wrong, try refreshing the page';
        createAlert('errorBox', 'errorArea', err, 'danger');
        return;
    }
    ans_map = {};
    for (let i = 0; i < answer.length; i++) {
        ans_map[answer[i]] = (ans_map[answer[i]] || 0) + 1;
    }

    result = [];
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) {
            result[i] = 'g';
            ans_map[guess[i]]--;
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (!result[i]) {
            if (ans_map[guess[i]]) {
                result[i] = 'y';
                ans_map[guess[i]]--;
            } else {
                result[i] = 'b';
            }
        }
    }
    return result;
}

let guessableMoves = {
    "Sicillian Defense: Four Knights Variation": [
        'e4', 'c5', 'Nf3', 'e6', 'd4', 'cxd4', 'Nxd4', 'Nf6', 'Nc3', 'Nc6'
    ],
    "Common Guesses (Submits 4)": [
        ['e4', 'e5', 'c3', 'c6', 'd3', 'd6', 'a3', 'a6', 'f3', 'f6'],
        ['d4', 'd5', 'c4', 'c5', 'e3', 'e6', 'f4', 'f5', 'a4', 'a5'],
        ['Nf3', 'Nf6', 'g3', 'g6', 'Bg2', 'Bg6', 'g4', 'g5', 'h4', 'h5'],
        ['Nc3', 'Nc6', 'b3', 'b6', 'Bb2', 'Bb6', 'b4', 'b4', 'h3', 'h6']
    ],
    "King's Indian Defense: Four Pawns Attack": [
        'd4', 'Nf6', 'c4', 'g3', 'Nc3', 'Bg2', 'e4', 'd6', 'f4', 'O-O'
    ],
    "Caro-Kann Defense: Classical Variation": [
        'e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6'
    ],
    "King's Pawn Opening: The Bongcloud": [
        'e4', 'e5', 'Ke2', 'Ke7', 'Ke1', 'Ke8', 'Ke2', 'Ke7', 'Ke1', 'Ke8'
    ],
    "Center Pawns + f Knights": [
        'd4', 'Nf6', 'c4', 'd5', 'Nf3', 'c5', 'e4', 'e5', 'f4', 'f5'
    ],
    "French Defense: Advance, Paulsen Attack": [
        'e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Qb6'
    ]
}

function fillPrevCorrect() {
    if (prevResults.length > 0) {
        let mostRecentResult = prevResults[prevResults.length - 1];
        let numCorrect = 0;
        for (let i = 0; i < mostRecentResult.length; i++) {
            if (mostRecentResult[i] === 'g') {
                numCorrect++;
            } else {
                break;
            }
        }
        if (numCorrect > 0) {
            let prevCorrectGuesses = prevGuesses[prevGuesses.length - 1].slice(0, numCorrect);
            game.load_pgn(prevCorrectGuesses.join(' '), {sloppy: true});
            board.position(game.fen());
            populateGuessBoxes();
        }
    } else {
        let prevCorrectGuesses = guessableMoves["Sicillian Defense: Four Knights Variation"] // TODO add button and simplify
        game.load_pgn(prevCorrectGuesses.join(' '), {sloppy: true});
        board.position(game.fen());
        populateGuessBoxes();
    }
}

function createEmojiPattern(separator) { // TODO remove?
    let pattern = ''
    for (let i = 0; i < prevResults.length; i++) {
        pattern += prevResults[i].map(res => RESULT_TO_EMOJI_MAP[res]).join('') + separator;
    }
    return pattern;
}

function createSharePasta() {
    let lastGuess = prevResults[prevResults.length - 1];
    let tries = lastGuess.every(val => val === 'g') ? prevResults.length : 'X';

    let pasta = `Chessle Infinite - ${tries} Guesses\n\n${createEmojiPattern('\n')}\n`;

    let shareData = {
        text: pasta
    };
    // From detectmobilebrowsers.com
    let isMobile = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
    if (isMobile && (navigator.userAgent.toLowerCase().indexOf('firefox') === -1)
            && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData);
    } else {
        navigator.clipboard.writeText(pasta);
        createAlert('alertBox', 'alertArea', 'Copied 👍', 'primary');
    }
}

// HTML

function createAlert(id, parent, text, style) {
    if (!document.getElementById(id)) {
        let newAlert = document.createElement('div');
        newAlert.id = id;
        newAlert.className = 'alert alert-' + style;
        newAlert.appendChild(document.createTextNode(text));
        let alertArea = document.getElementById(parent);
        alertArea.insertBefore(newAlert, alertArea.childNodes[0]);
        setTimeout(function() {
            newAlert.remove();
        }, 2500);
    }
}

function getGuessBoxSize() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    if (windowWidth > 1200 && windowHeight > 1000) {
        return 'large';
    } else if (windowWidth > 1000 && windowHeight > 800) {
        return 'medium';
    } else if (windowWidth > 770) {
        return 'small';
    }
    return 'tiny';
}

function createLabelCss(guessBoxSize) {
    return `
        font-size: ${GUESS_BOX_SIZE_TO_FONT_SIZE[guessBoxSize][3]};
        font-weight: ${GUESS_BOX_SIZE_TO_FONT_WEIGHT[guessBoxSize]};
    `;
}

function createLabelHtml(idx, guessBoxSize) {
    return `
        <span class="move-label align-self-center" style="${createLabelCss(guessBoxSize)}">
        ${idx / 2 + 1}.
        </span>
    `;
}

function createGuessBoxFontCss(text, guessBoxSize) {
    let textLength = Math.max(Math.min(text.length, 7), 3);
    return `
        font-size: ${GUESS_BOX_SIZE_TO_FONT_SIZE[guessBoxSize][textLength]};
        font-weight: ${GUESS_BOX_SIZE_TO_FONT_WEIGHT[guessBoxSize]};
    `;
}

function createBox(guessBoxSize, str, style, fontCss, id) {
    let widthHeight = GUESS_BOX_SIZE_WIDTH_HEIGHT[guessBoxSize];
    id = id !== undefined ? 'id="' + id + '"' : '';
    return `
        <div>
          <div class="card ${style} guess-card" style="width: ${widthHeight}; height: ${widthHeight};">
            <div class="card-body row align-self-center">
              <p class="card-text align-middle align-self-center text-center"
                  style="${fontCss};"${id}>${str}</p>
            </div>
          </div>
        </div>
    `;
}

function addPrevGuessHtml(guess, result) {
    let prevGuessHtml = `
        <div class="row justify-content-center align-self-center">
        ${createPrevGuessHtml(guess, result)}
        </div>`;
    document.getElementById('prevGuesses').innerHTML += prevGuessHtml;
}

function createPrevGuessHtml(guess, result) {
    let guessBoxSize = getGuessBoxSize();
    let html = '';
    for (let i = 0; i < guess.length; i++) {
        if (i % 2 === 0) {
            html += '<div class="move-group">' + createLabelHtml(i, guessBoxSize);
        }
        let css = createGuessBoxFontCss(guess[i], guessBoxSize);
        html += createBox(guessBoxSize, guess[i], RESULT_TO_BOX_MAP[result[i]], css);
        if (i % 2 !== 0) {
            html += '</div>';
        }
    }
    return html;
}

function populateGuessBoxes() {
    let moves = game.history();
    let guessBoxSize = getGuessBoxSize();
    let guessHtml = '';
    for (let i = 0; i < ANS_LENGTH(); i++) {
        if (i % 2 === 0) {
            guessHtml += '<div class="move-group">' + createLabelHtml(i, guessBoxSize);
        }
        let css = createGuessBoxFontCss(moves[i] || '', guessBoxSize);
        guessHtml += createBox(guessBoxSize, moves[i] || '', LIGHT_BOX, css, 'guess-' + i);
        if (i % 2 !== 0) {
            guessHtml += '</div>';
        }
    }
    guessHtml += '';
    $('#currentGuess').html(guessHtml);
}

function setUpAnswer() {
    ans = fullAns.slice(0, ANS_LENGTH());
    console.log(ans)
    populateGuessBoxes();
    $('#instructionsModal').modal('hide');
}

function openInstructionsModal() {
    $('#instructionsModalTitle').text('Welcome to Chessle');
    $('#instructionsModalBody').html(getInstructionsText());
    $('#instructionsModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#instructionsModal').modal('show');
}

function openHelpModal() {
    $('#helpModalTitle').text('Chessle Instructions');
    $('#helpModalBody').html(getInstructionsText());
    $('#helpModal').modal('show');
}

function getInstructionsText() {
    return `
        Guess the entire opening sequence, for both white and black!<br />
        <div class="instructions-example">
            <p class="instructions-example-title">Example</p>
            <img class="instructions-example-img" src="img/example.png">
            <br /><br />
            <img class="instructions-colour" src="img/Nf3.png">
            Green on Nf3 means that Nf3 was played on that specific move (White on move 2).
            <br /><br />
            <img class="instructions-colour" src="img/d4.png">
            Yellow on d4 means that d4 was indeed played by <b>either white or black</b>,
            but not at that specific spot (White on move 1).
            <br /><br />
            <img class="instructions-colour" src="img/d5.png">
            Grey on d5 means that d5 was not played by either white or black.
            <br /><br />
            Treat the moves as exactly how the text shows. <b>Nxe5 is not the same as Ne5!</b>
            <br /><br />
            You have ${MAX_GUESSES} guesses. Good luck!
        </div>
    `;
}

function openMaintenanceModal() {
    $('#maintenanceModal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#maintenanceModal').modal('show');
}

function createPgnFromMoveList(moves) {
    let pgn = '';
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            pgn += (i / 2 + 1) + '. ';
        }
        pgn += moves[i];
        if (i !== moves.length - 1) {
            pgn += ' ';
        }
    }
    return pgn;
}

function openShareModal(text) {
    $('#shareModalTitle').text(text);
    let modalBody = `
        <p class="share-modal-pattern">
        ${createEmojiPattern('<br />')}
        </p>
        <p class="share-modal-answer">
        The answer was
        <br />
        ${createPgnFromMoveList(ans)}
        <br />
        ${ansName}
        <!--br />
        <br />
        Learn more about this opening on <a href="${chessableLink}" target="_blank" onclick="location.reload();"><b>Chessable</b></a>
        </p>
        <p id="share-modal-stats" class="share-modal-answer"></p>
        <p class="share-modal-answer">
        <br />
        Chessle resets at 12am PST every day!
        </p-->
    `;
    $('#shareModalBody').html(modalBody);
    $('#chessableLearnMoreButton').attr('href', chessableLink);
    $('#chessableLearnMoreButton').click(function() {
        location.reload();
    });
    $('#shareModal').modal('show');
}

function getAnswer() {
   let res = allChessOpenings[Math.floor(Math.random() * allChessOpenings.length)]
    date = res.date;
    chessleNum = res.num;
    ansName = res.name;
    fullAns = res.moves;
    chessableLink = res.chessable_link;
}

// Chessboard

let board = null;
let game = new Chess();

function onDragStart(source, piece, position, orientation) {
    if (game.history().length >= ANS_LENGTH()) return false;
    if (game.game_over() || isGameOver) return false;

    if ((game.turn() === 'w' && piece.search(/^b/) !== -1)
            || (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false
    }
}

function onDrop(source, target) {
    let move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) return 'snapback';

    if (move.san !== curGuessStack.pop()) {
        curGuessStack = [];
    }

    populateGuessBoxes();
}

function onSnapEnd() {
    board.position(game.fen())
}

function resetBoard() {
    game.reset();
    syncGameBoard();
}

function undo() {
    let undoedMove = game.undo();
    if (undoedMove !== null) {
        curGuessStack.push(undoedMove.san);
    }
    syncGameBoard();
}

function flip() {
    board.flip();
}

function syncGameBoard() {
    board.position(game.fen());
    populateGuessBoxes();
}

function initializeBoard() {
    let config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd
    };
    board = Chessboard('myBoard', config);
}

function setUp() {
    if (localStorage.getItem('userId') == undefined) {
        let newUserId = Math.floor(Math.random() * (10**12 - 10**11) + 10**11);
        userId = newUserId.toString();
        localStorage.setItem('userId', userId);
    } else {
        userId = localStorage.getItem('userId');
    }
    try {
        getAnswer();
    } catch (e) {
        openMaintenanceModal();
        return;
    }

    setUpAnswer();
}

$(document).on("keydown", function (e) {
    switch (e.keyCode) {
        case 8:
        case 37:
            if (!isGameOver) {
                undo();
            }
            break;
        case 32:
            if (!isGameOver) {
                fillPrevCorrect();
            }
            e.preventDefault();
            e.stopPropagation();
            break;
        case 39:
            if (!isGameOver) {
                if (curGuessStack.length > 0) {
                    game.move(curGuessStack.pop());
                    syncGameBoard();
                } else if (document.getElementById('guess-0').innerHTML === '') {
                    fillPrevCorrect();
                }
            }
            break;
        case 88:
            if (!isGameOver) {
                flip();
            }
            break;
        case 13:
            e.preventDefault();
            if (!isGameOver) {
                submitGuess();
            }
            break;
        default:
            break;
    }
});


initializeBoard();
setUp();
