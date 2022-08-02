let allChessOpenings = [
    {
        "moves": [
            "b3",
            "e5",
            "Bb2",
            "Nc6",
            "c4",
            "Nf6",
            "e3",
            "d5",
            "cxd5",
            "Nxd5"
        ],
        "moveSet": "b3 e5 Bb2 Nc6 c4 Nf6 e3 d5 cxd5 Nxd5",
        "name": "Nimzovich-Larsen Attack"
    },
    {
        "moves": [
            "f4",
            "e5",
            "fxe5",
            "d6",
            "exd6",
            "Bxd6",
            "Nf3",
            "g5",
            "g3",
            "g4"
        ],
        "moveSet": "f4 e5 fxe5 d6 exd6 Bxd6 Nf3 g5 g3 g4",
        "name": "Bird's Opening"
    },
    {
        "moves": [
            "f4",
            "d5",
            "Nf3",
            "Nf6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "O-O",
            "O-O"
        ],
        "moveSet": "f4 d5 Nf3 Nf6 g3 g6 Bg2 Bg7 O-O O-O",
        "name": "Bird's Opening"
    },
    {
        "moves": [
            "Nf3",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "d4",
            "O-O"
        ],
        "moveSet": "Nf3 Nf6 c4 g6 Nc3 Bg7 e4 d6 d4 O-O",
        "name": "Reti Opening"
    },
    {
        "moves": [
            "Nf3",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "Bg7",
            "Bg2",
            "O-O",
            "O-O",
            "d6"
        ],
        "moveSet": "Nf3 Nf6 c4 g6 g3 Bg7 Bg2 O-O O-O d6",
        "name": "Reti Opening"
    },
    {
        "moves": [
            "Nf3",
            "d5",
            "c4",
            "e6",
            "g3",
            "Nf6",
            "Bg2",
            "Be7",
            "O-O",
            "O-O"
        ],
        "moveSet": "Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O",
        "name": "Reti Opening"
    },
    {
        "moves": [
            "Nf3",
            "d5",
            "g3",
            "Nf6",
            "Bg2",
            "c6",
            "O-O",
            "Bg4",
            "d3",
            "Nbd7"
        ],
        "moveSet": "Nf3 d5 g3 Nf6 Bg2 c6 O-O Bg4 d3 Nbd7",
        "name": "King's Indian Attack"
    },
    {
        "moves": [
            "Nf3",
            "d5",
            "g3",
            "c5",
            "Bg2",
            "Nc6",
            "d4",
            "e6",
            "O-O",
            "Nf6"
        ],
        "moveSet": "Nf3 d5 g3 c5 Bg2 Nc6 d4 e6 O-O Nf6",
        "name": "King's Indian Attack"
    },
    {
        "moves": [
            "Nf3",
            "d5",
            "c4",
            "d4",
            "e3",
            "Nc6",
            "exd4",
            "Nxd4",
            "Nxd4",
            "Qxd4"
        ],
        "moveSet": "Nf3 d5 c4 d4 e3 Nc6 exd4 Nxd4 Nxd4 Qxd4",
        "name": "Reti Opening"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nf6",
            "g3",
            "d5",
            "cxd5",
            "Nxd5",
            "Bg2",
            "Nb6"
        ],
        "moveSet": "c4 e5 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nb6",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "c6",
            "e4",
            "d5",
            "exd5",
            "cxd5",
            "d4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "c4 c6 e4 d5 exd5 cxd5 d4 Nf6 Nc3 e6",
        "name": "English, Caro-Kann Defensive System"
    },
    {
        "moves": [
            "c4",
            "c6",
            "Nf3",
            "d5",
            "b3",
            "Nf6",
            "Bb2",
            "Bf5",
            "g3",
            "e6"
        ],
        "moveSet": "c4 c6 Nf3 d5 b3 Nf6 Bb2 Bf5 g3 e6",
        "name": "English with b3"
    },
    {
        "moves": [
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "Nf6",
            "Nf3",
            "Be7",
            "O-O",
            "O-O"
        ],
        "moveSet": "c4 e6 g3 d5 Bg2 Nf6 Nf3 Be7 O-O O-O",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "e6",
            "Nf3",
            "d5",
            "g3",
            "Nf6",
            "Bg2",
            "Be7",
            "O-O",
            "O-O"
        ],
        "moveSet": "c4 e6 Nf3 d5 g3 Nf6 Bg2 Be7 O-O O-O",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "Nf6",
            "Nc3",
            "e6",
            "e4",
            "d5",
            "e5",
            "d4",
            "exf6",
            "dxc3"
        ],
        "moveSet": "c4 Nf6 Nc3 e6 e4 d5 e5 d4 exf6 dxc3",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "Nf6",
            "Nc3",
            "g6",
            "g3",
            "Bg7",
            "Bg2",
            "O-O",
            "Nf3",
            "d6"
        ],
        "moveSet": "c4 Nf6 Nc3 g6 g3 Bg7 Bg2 O-O Nf3 d6",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "Nf6",
            "Nc3",
            "e6",
            "e4",
            "c5",
            "e5",
            "Ng8",
            "Nf3",
            "Nc6"
        ],
        "moveSet": "c4 Nf6 Nc3 e6 e4 c5 e5 Ng8 Nf3 Nc6",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "Nf6",
            "Nc3",
            "e6",
            "e4",
            "c5",
            "e5",
            "Ng8",
            "d4",
            "cxd4"
        ],
        "moveSet": "c4 Nf6 Nc3 e6 e4 c5 e5 Ng8 d4 cxd4",
        "name": "English, Mikenas-Carls"
    },
    {
        "moves": [
            "c4",
            "Nf6",
            "Nc3",
            "e6",
            "e4",
            "c5",
            "e5",
            "Ng8",
            "Nf3",
            "d6"
        ],
        "moveSet": "c4 Nf6 Nc3 e6 e4 c5 e5 Ng8 Nf3 d6",
        "name": "English, Mikenas-Carls, Sicilian Variation"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nf6",
            "Nf3",
            "Nc6",
            "g3",
            "d5",
            "cxd5",
            "Nxd5"
        ],
        "moveSet": "c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "e3",
            "d6"
        ],
        "moveSet": "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 e3 d6",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nf6",
            "Nf3",
            "Nc6",
            "g3",
            "Bb4",
            "Bg2",
            "O-O"
        ],
        "moveSet": "c4 e5 Nc3 Nf6 Nf3 Nc6 g3 Bb4 Bg2 O-O",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nf6",
            "g3",
            "c6",
            "Nf3",
            "e4",
            "Nd4",
            "d5"
        ],
        "moveSet": "c4 e5 Nc3 Nf6 g3 c6 Nf3 e4 Nd4 d5",
        "name": "English, Bremen System, Keres Variation"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nf6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "d6"
        ],
        "moveSet": "c4 e5 Nc3 Nf6 g3 g6 Bg2 Bg7 Nf3 d6",
        "name": "English, Bremen System with ...g6"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nc6",
            "Nf3",
            "g6",
            "d4",
            "exd4",
            "Nxd4",
            "Bg7"
        ],
        "moveSet": "c4 e5 Nc3 Nc6 Nf3 g6 d4 exd4 Nxd4 Bg7",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "d3",
            "d6"
        ],
        "moveSet": "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nc6",
            "Nf3",
            "Nf6",
            "g3",
            "d5",
            "cxd5",
            "Nxd5"
        ],
        "moveSet": "c4 e5 Nc3 Nc6 Nf3 Nf6 g3 d5 cxd5 Nxd5",
        "name": "English, Three Knights System"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nc6",
            "Nf3",
            "Nf6",
            "g3",
            "Bb4",
            "Bg2",
            "O-O"
        ],
        "moveSet": "c4 e5 Nc3 Nc6 Nf3 Nf6 g3 Bb4 Bg2 O-O",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "e5",
            "Nc3",
            "Nc6",
            "Nf3",
            "Nf6",
            "g3",
            "Bc5",
            "Bg2",
            "d6"
        ],
        "moveSet": "c4 e5 Nc3 Nc6 Nf3 Nf6 g3 Bc5 Bg2 d6",
        "name": "English, Four Knights, Kingside Fianchetto"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nc3",
            "Nf6",
            "g3",
            "d5",
            "cxd5",
            "Nxd5",
            "Bg2",
            "Nc7"
        ],
        "moveSet": "c4 c5 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nc7",
        "name": "English, Symmetrical"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nf3",
            "Nf6",
            "d4",
            "cxd4",
            "Nxd4",
            "e5",
            "Nb5",
            "d5"
        ],
        "moveSet": "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e5 Nb5 d5",
        "name": "English, Symmetrical, Benoni Formation"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nf3",
            "Nf6",
            "d4",
            "cxd4",
            "Nxd4",
            "e6",
            "Nc3",
            "Bb4"
        ],
        "moveSet": "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e6 Nc3 Bb4",
        "name": "English, Symmetrical Variation"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nf3",
            "Nf6",
            "d4",
            "cxd4",
            "Nxd4",
            "e6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e6 Nc3 Nc6",
        "name": "English, Symmetrical"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "e5"
        ],
        "moveSet": "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 e5",
        "name": "English, Symmetrical"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "e6"
        ],
        "moveSet": "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 e6",
        "name": "English, Symmetrical"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "e3",
            "e6"
        ],
        "moveSet": "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 e3 e6",
        "name": "English"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "d6"
        ],
        "moveSet": "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 d6",
        "name": "English, Symmetrical"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "Nf6"
        ],
        "moveSet": "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6",
        "name": "English, Symmetrical"
    },
    {
        "moves": [
            "c4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "Nf6"
        ],
        "moveSet": "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6",
        "name": "English, Symmetrical, Main line with d4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "O-O",
            "a3",
            "Bxc3+"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "d6",
            "Nf3",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "O-O"
        ],
        "moveSet": "d4 d6 Nf3 Nf6 c4 g6 Nc3 Bg7 e4 O-O",
        "name": "Queen's Pawn Game (with ...d6)"
    },
    {
        "moves": [
            "d4",
            "d6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "Nc6",
            "Be3",
            "e5"
        ],
        "moveSet": "d4 d6 c4 g6 Nc3 Bg7 e4 Nc6 Be3 e5",
        "name": "Modern Defense, Averbakh System"
    },
    {
        "moves": [
            "d4",
            "c5",
            "d5",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 c5 d5 Nf6 c4 e6 Nc3 exd5 cxd5 d6",
        "name": "Old Benoni"
    },
    {
        "moves": [
            "d4",
            "c5",
            "d5",
            "e5",
            "e4",
            "d6",
            "Nc3",
            "a6",
            "a4",
            "Be7"
        ],
        "moveSet": "d4 c5 d5 e5 e4 d6 Nc3 a6 a4 Be7",
        "name": "Old Benoni Defense"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "Nf3",
            "g6",
            "c4",
            "Bg7",
            "Nc3",
            "O-O",
            "e4",
            "d6"
        ],
        "moveSet": "d4 Nf6 Nf3 g6 c4 Bg7 Nc3 O-O e4 d6",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "Nf3",
            "g6",
            "g3",
            "Bg7",
            "Bg2",
            "O-O",
            "O-O",
            "d6"
        ],
        "moveSet": "d4 Nf6 Nf3 g6 g3 Bg7 Bg2 O-O O-O d6",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "Nf3",
            "b6",
            "g3",
            "Bb7",
            "Bg2",
            "e6",
            "O-O",
            "Be7"
        ],
        "moveSet": "d4 Nf6 Nf3 b6 g3 Bb7 Bg2 e6 O-O Be7",
        "name": "Queen's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "Nf3",
            "g6",
            "c4",
            "Bg7",
            "g3",
            "O-O",
            "Bg2",
            "d6"
        ],
        "moveSet": "d4 Nf6 Nf3 g6 c4 Bg7 g3 O-O Bg2 d6",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "Nf3",
            "g6",
            "g3",
            "Bg7",
            "Bg2",
            "O-O",
            "O-O",
            "d5"
        ],
        "moveSet": "d4 Nf6 Nf3 g6 g3 Bg7 Bg2 O-O O-O d5",
        "name": "King's Indian, Fianchetto without c4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nf3",
            "Bg7",
            "g3",
            "O-O",
            "Bg2",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e5",
            "dxe5",
            "Ng4",
            "Nf3",
            "Bc5",
            "e3",
            "Nc6"
        ],
        "moveSet": "d4 Nf6 c4 e5 dxe5 Ng4 Nf3 Bc5 e3 Nc6",
        "name": "Budapest Gambit"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e5",
            "dxe5",
            "Ng4",
            "Bf4",
            "Nc6",
            "Nf3",
            "Bb4+"
        ],
        "moveSet": "d4 Nf6 c4 e5 dxe5 Ng4 Bf4 Nc6 Nf3 Bb4+",
        "name": "Budapest Gambit"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "d6",
            "Nf3",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 d6 Nf3 g6 Nc3 Bg7 e4 O-O",
        "name": "Old Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "d6",
            "Nc3",
            "e5",
            "Nf3",
            "Nbd7",
            "e4",
            "Be7"
        ],
        "moveSet": "d4 Nf6 c4 d6 Nc3 e5 Nf3 Nbd7 e4 Be7",
        "name": "Old Indian, Ukrainian Variation, 4.Nf3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "d6",
            "Nc3",
            "e5",
            "Nf3",
            "Nbd7",
            "e4",
            "g6"
        ],
        "moveSet": "d4 Nf6 c4 d6 Nc3 e5 Nf3 Nbd7 e4 g6",
        "name": "Old Indian, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "b5",
            "cxb5",
            "a6",
            "bxa6",
            "g6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 g6",
        "name": "Benoni Defense"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "b5",
            "cxb5",
            "a6",
            "b6",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 b5 cxb5 a6 b6 d6",
        "name": "Benko Gambit"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "b5",
            "cxb5",
            "a6",
            "bxa6",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 d6",
        "name": "Benko Gambit"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "b5",
            "cxb5",
            "a6",
            "bxa6",
            "Bxa6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6",
        "name": "Benko Gambit"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "Bd6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 Bd6",
        "name": "Benoni Defense"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Fianchetto Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Fianchetto, 9...Nbd7"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Fianchetto, 11...Re8"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, 6.e4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Taimanov Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Four Pawns Attack"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Four Pawns Attack, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical with 7.Nf3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical, 8.Bg5"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical without 9.O-O"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical, 9.O-O"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical, 9...a6, 10.a4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical with ...a6 and 10...Bg4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical, 9...Re8"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical, 9...Re8, 10.Nd2"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical with ...Re8 and ...Na6"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "c5",
            "d5",
            "e6",
            "Nc3",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6",
        "name": "Benoni, Classical, 11.f3"
    },
    {
        "moves": [
            "d4",
            "f5",
            "g3",
            "Nf6",
            "Bg2",
            "g6",
            "Nf3",
            "Bg7",
            "O-O",
            "O-O"
        ],
        "moveSet": "d4 f5 g3 Nf6 Bg2 g6 Nf3 Bg7 O-O O-O",
        "name": "Dutch"
    },
    {
        "moves": [
            "d4",
            "f5",
            "g3",
            "Nf6",
            "Bg2",
            "g6",
            "c4",
            "Bg7",
            "Nc3",
            "O-O"
        ],
        "moveSet": "d4 f5 g3 Nf6 Bg2 g6 c4 Bg7 Nc3 O-O",
        "name": "Dutch"
    },
    {
        "moves": [
            "d4",
            "f5",
            "e4",
            "fxe4",
            "Nc3",
            "Nf6",
            "Bg5",
            "Nc6",
            "d5",
            "Ne5"
        ],
        "moveSet": "d4 f5 e4 fxe4 Nc3 Nf6 Bg5 Nc6 d5 Ne5",
        "name": "Dutch, Staunton Gambit"
    },
    {
        "moves": [
            "d4",
            "f5",
            "e4",
            "fxe4",
            "Nc3",
            "Nf6",
            "Bg5",
            "c6",
            "Bxf6",
            "exf6"
        ],
        "moveSet": "d4 f5 e4 fxe4 Nc3 Nf6 Bg5 c6 Bxf6 exf6",
        "name": "Dutch, Staunton Gambit"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "Nc3",
            "g6",
            "g3",
            "Bg7",
            "Bg2",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 Nc3 g6 g3 Bg7 Bg2 O-O",
        "name": "Dutch"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "Nc3",
            "d6",
            "Nf3",
            "g6",
            "g3",
            "Bg7"
        ],
        "moveSet": "d4 f5 c4 Nf6 Nc3 d6 Nf3 g6 g3 Bg7",
        "name": "Dutch, with c4 & Nc3"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nc3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nc3 O-O",
        "name": "Dutch"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "d6"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3 d6",
        "name": "Dutch, Leningrad, Main Variation"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3 O-O",
        "name": "Dutch, Leningrad, Main Variation with c6"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3 O-O",
        "name": "Dutch, Leningrad, Main Variation with Nc6"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "d5",
            "Nf3",
            "c6"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 d5 Nf3 c6",
        "name": "Dutch"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nc3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nc3 O-O",
        "name": "Dutch Defense"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch, Stonewall, Botvinnik Variation"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch, Stonewall with Ba3"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch, Stonewall"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch, Classical Variation"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch, Ilyin-Genevsky"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch, Ilyin-Genevsky Variation with Qc2"
    },
    {
        "moves": [
            "d4",
            "f5",
            "c4",
            "Nf6",
            "g3",
            "e6",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O",
        "name": "Dutch, Ilyin-Genevsky Variation with b3"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e5"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5",
        "name": "Uncommon King's Pawn Opening"
    },
    {
        "moves": [
            "e4",
            "d5",
            "exd5",
            "Qxd5",
            "Nc3",
            "Qd6",
            "d4",
            "Nf6",
            "Nf3",
            "a6"
        ],
        "moveSet": "e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3 a6",
        "name": "Scandinavian"
    },
    {
        "moves": [
            "e4",
            "Nf6",
            "e5",
            "Nd5",
            "d4",
            "d6",
            "Nf3",
            "Bg4",
            "Be2",
            "e6"
        ],
        "moveSet": "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6",
        "name": "Alekhine's Defense"
    },
    {
        "moves": [
            "e4",
            "Nf6",
            "e5",
            "Nd5",
            "d4",
            "d6",
            "c4",
            "Nb6",
            "exd6",
            "cxd6"
        ],
        "moveSet": "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 exd6 cxd6",
        "name": "Alekhine's Defense"
    },
    {
        "moves": [
            "e4",
            "Nf6",
            "e5",
            "Nd5",
            "d4",
            "d6",
            "Nf3",
            "Bg4",
            "Be2",
            "c6"
        ],
        "moveSet": "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 c6",
        "name": "Alekhine's Defense, Modern"
    },
    {
        "moves": [
            "e4",
            "Nf6",
            "e5",
            "Nd5",
            "d4",
            "d6",
            "Nf3",
            "Bg4",
            "Be2",
            "Nc6"
        ],
        "moveSet": "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 Nc6",
        "name": "Alekhine's Defense, Modern"
    },
    {
        "moves": [
            "e4",
            "g6",
            "d4",
            "Bg7",
            "Nc3",
            "d6",
            "f4",
            "Nf6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "e4 g6 d4 Bg7 Nc3 d6 f4 Nf6 Nf3 O-O",
        "name": "Robatsch"
    },
    {
        "moves": [
            "e4",
            "d6",
            "d4",
            "Nf6",
            "Nc3",
            "g6",
            "f4",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O",
        "name": "Pirc"
    },
    {
        "moves": [
            "e4",
            "d6",
            "d4",
            "Nf6",
            "Nc3",
            "g6",
            "Nf3",
            "Bg7",
            "Be2",
            "O-O"
        ],
        "moveSet": "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O",
        "name": "Pirc, Classical"
    },
    {
        "moves": [
            "e4",
            "d6",
            "d4",
            "Nf6",
            "Nc3",
            "g6",
            "f4",
            "Bg7",
            "Nf3",
            "c5"
        ],
        "moveSet": "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 c5",
        "name": "Pirc, Austrian Attack"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "Nd2",
            "dxe4",
            "Nxe4",
            "Bf5",
            "Ng3",
            "Bg6"
        ],
        "moveSet": "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6",
        "name": "Caro-Kann"
    },
    {
        "moves": [
            "e4",
            "c6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg4",
            "h3",
            "Bxf3",
            "Qxf3",
            "e6"
        ],
        "moveSet": "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6",
        "name": "Caro-Kann, Two Knights, 3...Bg4"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "exd5",
            "cxd5",
            "c4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6",
        "name": "Caro-Kann Defense"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "exd5",
            "cxd5",
            "Bd3",
            "Nc6",
            "c3",
            "Nf6"
        ],
        "moveSet": "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6",
        "name": "Caro-Kann, Exchange"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "exd5",
            "cxd5",
            "c4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6",
        "name": "Caro-Kann, Panov-Botvinnik Attack"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "Nc3",
            "dxe4",
            "Nxe4",
            "Nd7",
            "Nf3",
            "Ngf6"
        ],
        "moveSet": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6",
        "name": "Caro-Kann"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "Nc3",
            "dxe4",
            "Nxe4",
            "Nf6",
            "Nxf6+",
            "gxf6"
        ],
        "moveSet": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ gxf6",
        "name": "Caro-Kann, Bronstein-Larsen Variation"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "Nc3",
            "dxe4",
            "Nxe4",
            "Nd7",
            "Bc4",
            "Ngf6"
        ],
        "moveSet": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Bc4 Ngf6",
        "name": "Caro-Kann, Steinitz Variation"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "Nc3",
            "dxe4",
            "Nxe4",
            "Bf5",
            "Nc5",
            "b6"
        ],
        "moveSet": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Nc5 b6",
        "name": "Caro-Kann, Classical"
    },
    {
        "moves": [
            "e4",
            "c6",
            "d4",
            "d5",
            "Nc3",
            "dxe4",
            "Nxe4",
            "Bf5",
            "Ng3",
            "Bg6"
        ],
        "moveSet": "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6",
        "name": "Caro-Kann, Classical"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "d6"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 d6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "f4",
            "d5",
            "exd5",
            "Nf6",
            "Bb5+",
            "Bd7",
            "Bxd7+",
            "Qxd7"
        ],
        "moveSet": "e4 c5 f4 d5 exd5 Nf6 Bb5+ Bd7 Bxd7+ Qxd7",
        "name": "Sicilian, 2.f4 and 2.d4"
    },
    {
        "moves": [
            "e4",
            "c5",
            "c3",
            "Nf6",
            "e5",
            "Nd5",
            "d4",
            "cxd4",
            "Nf3",
            "Nc6"
        ],
        "moveSet": "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6",
        "name": "Sicilian, Alapin"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "d3",
            "e6"
        ],
        "moveSet": "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 e6",
        "name": "Sicilian, Closed"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "d3",
            "Rb8"
        ],
        "moveSet": "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 Rb8",
        "name": "Sicilian, Closed"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "d3",
            "d6"
        ],
        "moveSet": "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6",
        "name": "Sicilian, Closed"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nc3",
            "Nc6",
            "g3",
            "g6",
            "Bg2",
            "Bg7",
            "d3",
            "d6"
        ],
        "moveSet": "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6",
        "name": "Sicilian, Closed, 6.Be3"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "a6",
            "Nc3",
            "Qc7"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 Qc7",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "a6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e5"
        ],
        "moveSet": "e4 c5 Nf3 a6 d4 cxd4 Nxd4 Nf6 Nc3 e5",
        "name": "Sicilian, O'Kelly Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nf6",
            "e5",
            "Nd5",
            "Nc3",
            "e6",
            "Nxd5",
            "exd5"
        ],
        "moveSet": "e4 c5 Nf3 Nf6 e5 Nd5 Nc3 e6 Nxd5 exd5",
        "name": "Sicilian, Nimzovich-Rubinstein"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "e5",
            "Nb5",
            "d6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 d6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "Bb5",
            "g6",
            "O-O",
            "Bg7",
            "c3",
            "Nf6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 Bb5 g6 O-O Bg7 c3 Nf6",
        "name": "Sicilian, Rossolimo Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "e5",
            "Nb5",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 a6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "Qb6",
            "Nb3",
            "Nf6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Qb6 Nb3 Nf6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "g6",
            "Nxc6",
            "bxc6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nxc6 bxc6",
        "name": "Sicilian, Accelerated Fianchetto"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "g6",
            "Nc3",
            "Bg7"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7",
        "name": "Sicilian, Accelerated Fianchetto, Modern Variation with Bc4"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "g6",
            "c4",
            "Nf6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Nf6",
        "name": "Sicilian, Accelerated Fianchetto"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "g6",
            "c4",
            "Bg7"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7",
        "name": "Sicilian, Accelerated Fianchetto"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "g6",
            "c4",
            "Bg7"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7",
        "name": "Sicilian, Accelerated Fianchetto, Maroczy Bind, 6.Be3"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "g6",
            "c4",
            "Bg7"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7",
        "name": "Sicilian, Accelerated Fianchetto, Breyer Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "a6",
            "Bd3",
            "Nf6"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Nf6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "a6",
            "Bd3",
            "Bc5"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Bc5",
        "name": "Sicilian, Kan"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "a6",
            "Bd3",
            "Qc7"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Qc7",
        "name": "Sicilian, Kan"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "a6",
            "Nc3",
            "b5"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 b5",
        "name": "Sicilian, Kan, 5.Nc3"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nc6",
            "Nb5",
            "d6"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nb5 d6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nc6",
            "Nc3",
            "d6"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 d6",
        "name": "Sicilian, Taimanov"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nc6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 a6",
        "name": "Sicilian, Taimanov Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nc6",
            "Nc3",
            "Qc7"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7",
        "name": "Sicilian, Taimanov (Bastrikov) Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nc6",
            "Nc3",
            "Qc7"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7",
        "name": "Sicilian, Taimanov Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "e6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nc6",
            "Nc3",
            "Qc7"
        ],
        "moveSet": "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7",
        "name": "Sicilian, Taimanov Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Qxd4",
            "Nc6",
            "Bb5",
            "Bd7"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5 Bd7",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "Bb5+",
            "Bd7",
            "Bxd7+",
            "Qxd7",
            "O-O",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7 O-O Nc6",
        "name": "Sicilian, Canal-Sokolsky (Rossolimo) Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "Bb5+",
            "Bd7",
            "Bxd7+",
            "Qxd7",
            "c4",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7 c4 Nc6",
        "name": "Sicilian, Canal-Sokolsky (Rossolimo) Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Qxd4",
            "a6",
            "c4",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Qxd4 a6 c4 Nc6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Bd7"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Bd7",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "f3",
            "e5"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3 e5",
        "name": "Sicilian, Prins Variation, Venice Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e5"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e5",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "d6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "Nc6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "d6"
        ],
        "moveSet": "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6",
        "name": "Sicilian, Boleslavsky Variation, 7.Nb3"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer, Larsen Variation, 7.Qd2"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer Attack, 7...Be7 Defense, 9...Nxd4"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer Attack, 7...a6"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 8...Bd7"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 9...Be7"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
        "name": "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 11.Bxf6"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Levenfish Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Classical"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Classical"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Yugoslav Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Yugoslav Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Yugoslav Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Yugoslav Attack, 10.castle long"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "g6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
        "name": "Sicilian, Dragon, Yugoslav Attack, 12.h4"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Scheveningen"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Scheveningen, Keres Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Scheveningen"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Scheveningen"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Scheveningen, Classical"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Fischer-Sozin Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Fischer-Sozin with ...a6 and ...b5"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian, Fischer-Sozin Attack"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "e6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
        "name": "Sicilian"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf, Zagreb (Fianchetto) Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf, Opocensky Variation"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf, 6.f4"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf, 6...e6"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf"
    },
    {
        "moves": [
            "e4",
            "c5",
            "Nf3",
            "d6",
            "d4",
            "cxd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "a6"
        ],
        "moveSet": "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
        "name": "Sicilian, Najdorf, 7...Be7 Main line"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Nf6",
            "e5",
            "Nfd7",
            "f4",
            "c5"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5",
        "name": "French Defense"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "exd5",
            "exd5",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7"
        ],
        "moveSet": "e4 e6 d4 d5 exd5 exd5 Nc3 Nf6 Bg5 Be7",
        "name": "French, Exchange"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "e5",
            "c5",
            "c3",
            "Nc6",
            "Nf3",
            "Qb6"
        ],
        "moveSet": "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6",
        "name": "French, Advance"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nd2",
            "Nf6",
            "e5",
            "Nfd7",
            "c3",
            "c5"
        ],
        "moveSet": "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 c3 c5",
        "name": "French, Tarrasch"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nd2",
            "Nc6",
            "Ngf3",
            "Nf6",
            "e5",
            "Nd7"
        ],
        "moveSet": "e4 e6 d4 d5 Nd2 Nc6 Ngf3 Nf6 e5 Nd7",
        "name": "French, Tarrasch, Guimard Main line"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nd2",
            "Nf6",
            "e5",
            "Nfd7",
            "f4",
            "c5"
        ],
        "moveSet": "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 f4 c5",
        "name": "French, Tarrasch"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nd2",
            "Nf6",
            "e5",
            "Nfd7",
            "Bd3",
            "c5"
        ],
        "moveSet": "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5",
        "name": "French, Tarrasch"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nd2",
            "c5",
            "exd5",
            "Qxd5",
            "Ngf3",
            "cxd4"
        ],
        "moveSet": "e4 e6 d4 d5 Nd2 c5 exd5 Qxd5 Ngf3 cxd4",
        "name": "French, Tarrasch"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nd2",
            "c5",
            "exd5",
            "exd5",
            "Ngf3",
            "Nf6"
        ],
        "moveSet": "e4 e6 d4 d5 Nd2 c5 exd5 exd5 Ngf3 Nf6",
        "name": "French, Tarrasch, Open, 4.ed ed"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nd2",
            "c5",
            "exd5",
            "exd5",
            "Ngf3",
            "Nc6"
        ],
        "moveSet": "e4 e6 d4 d5 Nd2 c5 exd5 exd5 Ngf3 Nc6",
        "name": "French, Tarrasch, Open Variation, Main line"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Bb4",
            "e5",
            "Ne7",
            "a3",
            "Bxc3+"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Bb4 e5 Ne7 a3 Bxc3+",
        "name": "French"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Nf6",
            "Bg5",
            "Bb4",
            "e5",
            "h6"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6",
        "name": "French"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Nf6",
            "Bg5",
            "Bb4",
            "exd5",
            "Qxd5"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 exd5 Qxd5",
        "name": "French, McCutcheon"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "Bxf6",
            "Bxf6"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 Bxf6 Bxf6",
        "name": "French"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e5",
            "Nfd7"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7",
        "name": "French, Classical"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Bb4",
            "e5",
            "c5",
            "a3",
            "Ba5"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Ba5",
        "name": "French, Winawer"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Bb4",
            "e5",
            "c5",
            "Bd2",
            "Ne7"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Bb4 e5 c5 Bd2 Ne7",
        "name": "French, Winawer"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Bb4",
            "e5",
            "c5",
            "Qg4",
            "Ne7"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Bb4 e5 c5 Qg4 Ne7",
        "name": "French, Winawer, Advance"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Bb4",
            "e5",
            "c5",
            "a3",
            "Bxc3+"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+",
        "name": "French, Winawer"
    },
    {
        "moves": [
            "e4",
            "e6",
            "d4",
            "d5",
            "Nc3",
            "Bb4",
            "e5",
            "c5",
            "a3",
            "Bxc3+"
        ],
        "moveSet": "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+",
        "name": "French, Winawer, Advance"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "b5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5",
        "name": "King's Pawn Game"
    },
    {
        "moves": [
            "e4",
            "e5",
            "d4",
            "exd4",
            "Qxd4",
            "Nc6",
            "Qe3",
            "Nf6",
            "Nc3",
            "Bb4"
        ],
        "moveSet": "e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3 Bb4",
        "name": "Center Game"
    },
    {
        "moves": [
            "e4",
            "e5",
            "d4",
            "exd4",
            "Qxd4",
            "Nc6",
            "Qe3",
            "g6",
            "Nc3",
            "Bg7"
        ],
        "moveSet": "e4 e5 d4 exd4 Qxd4 Nc6 Qe3 g6 Nc3 Bg7",
        "name": "Center Game"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Bc4",
            "Nf6",
            "d3",
            "c6",
            "Nf3",
            "d5",
            "Bb3",
            "Bd6"
        ],
        "moveSet": "e4 e5 Bc4 Nf6 d3 c6 Nf3 d5 Bb3 Bd6",
        "name": "Bishop's Opening"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Bc4",
            "Nf6",
            "d3",
            "Nc6",
            "Nf3",
            "Be7",
            "O-O",
            "O-O"
        ],
        "moveSet": "e4 e5 Bc4 Nf6 d3 Nc6 Nf3 Be7 O-O O-O",
        "name": "Bishop's Opening"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nc3",
            "Nf6",
            "g3",
            "d5",
            "exd5",
            "Nxd5",
            "Bg2",
            "Nxc3"
        ],
        "moveSet": "e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3",
        "name": "Vienna"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nc3",
            "Nf6",
            "f4",
            "d5",
            "fxe5",
            "Nxe4",
            "d3",
            "Nxc3"
        ],
        "moveSet": "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 d3 Nxc3",
        "name": "Vienna"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nc3",
            "Nf6",
            "Bc4",
            "Nxe4",
            "Qh5",
            "Nd6",
            "Bb3",
            "Nc6"
        ],
        "moveSet": "e4 e5 Nc3 Nf6 Bc4 Nxe4 Qh5 Nd6 Bb3 Nc6",
        "name": "Vienna Game"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nc3",
            "Nf6",
            "Bc4",
            "Nc6",
            "d3",
            "Bb4",
            "Ne2",
            "d5"
        ],
        "moveSet": "e4 e5 Nc3 Nf6 Bc4 Nc6 d3 Bb4 Ne2 d5",
        "name": "Vienna Game"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nc3",
            "Nf6",
            "f4",
            "d5",
            "fxe5",
            "Nxe4",
            "Nf3",
            "Be7"
        ],
        "moveSet": "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7",
        "name": "Vienna Gambit"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "g5",
            "h4",
            "g4",
            "Ne5",
            "Nf6"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6",
        "name": "King's Gambit Declined"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "d5",
            "exd5",
            "e4",
            "d3",
            "Nf6",
            "dxe4",
            "Nxe4"
        ],
        "moveSet": "e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4 Nxe4",
        "name": "King's Gambit Declined, Falkbeer Counter Gambit"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "d5",
            "exd5",
            "e4",
            "d3",
            "Nf6",
            "Nd2",
            "exd3"
        ],
        "moveSet": "e4 e5 f4 d5 exd5 e4 d3 Nf6 Nd2 exd3",
        "name": "King's Gambit Declined, Falkbeer Counter Gambit"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "d6",
            "d4",
            "g5",
            "h4",
            "g4"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 d6 d4 g5 h4 g4",
        "name": "King's Gambit Accepted"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "d5",
            "exd5",
            "Nf6",
            "Bb5+",
            "c6"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bb5+ c6",
        "name": "King's Gambit Accepted"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "Be7",
            "Bc4",
            "Nf6",
            "e5",
            "Ng4"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 Be7 Bc4 Nf6 e5 Ng4",
        "name": "King's Gambit Accepted, Cunningham"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "d5",
            "exd5",
            "Nf6",
            "Bc4",
            "Nxd5"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bc4 Nxd5",
        "name": "King's Gambit Accepted, Abbazia Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "g5",
            "Nc3",
            "g4",
            "Ne5",
            "Qh4+"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 g5 Nc3 g4 Ne5 Qh4+",
        "name": "King's Gambit Accepted"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "g5",
            "Bc4",
            "Bg7",
            "d4",
            "d6"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 d4 d6",
        "name": "King's Gambit Accepted"
    },
    {
        "moves": [
            "e4",
            "e5",
            "f4",
            "exf4",
            "Nf3",
            "g5",
            "h4",
            "g4",
            "Ne5",
            "d6"
        ],
        "moveSet": "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d6",
        "name": "King's Gambit Accepted"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nf6",
            "Nxe5",
            "d6",
            "Nf3",
            "Nxe4",
            "d4",
            "d5"
        ],
        "moveSet": "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5",
        "name": "King's Knight Opening"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "d6",
            "d4",
            "exd4",
            "Nxd4",
            "Nf6",
            "Nc3",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7",
        "name": "Philidor Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nf6",
            "Nxe5",
            "d6",
            "Nf3",
            "Nxe4",
            "Nc3",
            "Nxc3"
        ],
        "moveSet": "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 Nc3 Nxc3",
        "name": "Petrov Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nf6",
            "d4",
            "exd4",
            "e5",
            "Ne4",
            "Qxd4",
            "d5"
        ],
        "moveSet": "e4 e5 Nf3 Nf6 d4 exd4 e5 Ne4 Qxd4 d5",
        "name": "Petrov, Modern Attack"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "d4",
            "exd4",
            "Nxd4",
            "Nf6",
            "Nxc6",
            "bxc6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6",
        "name": "King's Pawn Game"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "d4",
            "exd4",
            "Nxd4",
            "Bc5",
            "Be3",
            "Qf6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6",
        "name": "Scotch Game"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Nc3",
            "Nf6",
            "d4",
            "exd4",
            "Nxd4",
            "Bb4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4",
        "name": "Three Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Nc3",
            "Nf6",
            "Bb5",
            "Bb4",
            "O-O",
            "O-O"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O",
        "name": "Four Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Nc3",
            "Nf6",
            "Bb5",
            "Nd4",
            "Nxd4",
            "exd4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4 exd4",
        "name": "Four Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Nc3",
            "Nf6",
            "Bb5",
            "Bb4",
            "d3",
            "d6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 d3 d6",
        "name": "Four Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Bc5",
            "c3",
            "Nf6",
            "d3",
            "d6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6",
        "name": "Giuoco Piano"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Bc5",
            "b4",
            "Bxb4",
            "c3",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Be7",
        "name": "Evans Gambit"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Bc5",
            "b4",
            "Bxb4",
            "c3",
            "Ba5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5",
        "name": "Evans Gambit"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Bc5",
            "c3",
            "Nf6",
            "d3",
            "a6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 a6",
        "name": "Giuoco Piano"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Bc5",
            "c3",
            "Nf6",
            "d4",
            "exd4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4",
        "name": "Giuoco Piano"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Nf6",
            "d3",
            "Be7",
            "O-O",
            "O-O"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O",
        "name": "Two Knights Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Nf6",
            "d4",
            "exd4",
            "O-O",
            "Nxe4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4",
        "name": "Two Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Nf6",
            "Ng5",
            "d5",
            "exd5",
            "b5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 b5",
        "name": "Two Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Nf6",
            "Ng5",
            "d5",
            "exd5",
            "Na5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5",
        "name": "Two Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bc4",
            "Nf6",
            "Ng5",
            "d5",
            "exd5",
            "Na5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5",
        "name": "Two Knights"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "Nf6",
            "O-O",
            "Nxe4",
            "d4",
            "Nd6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "Nd4",
            "Nxd4",
            "exd4",
            "O-O",
            "Bc5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4 O-O Bc5",
        "name": "Ruy Lopez, Bird's Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "d6",
            "d4",
            "exd4",
            "Nxd4",
            "Bd7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 d6 d4 exd4 Nxd4 Bd7",
        "name": "Ruy Lopez, Old Steinitz Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "f5",
            "d3",
            "fxe4",
            "dxe4",
            "Nf6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 f5 d3 fxe4 dxe4 Nf6",
        "name": "Ruy Lopez, Schliemann Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "Bc5",
            "O-O",
            "Nd4",
            "Nxd4",
            "Bxd4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nd4 Nxd4 Bxd4",
        "name": "Ruy Lopez, Classical"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "Nf6",
            "O-O",
            "Nxe4",
            "Re1",
            "Nd6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 Re1 Nd6",
        "name": "Ruy Lopez, Berlin Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "Nf6",
            "O-O",
            "d6",
            "d4",
            "Bd7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d4 Bd7",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "Nf6",
            "O-O",
            "Nxe4",
            "d4",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Bxc6",
            "dxc6",
            "O-O",
            "f6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6",
        "name": "Ruy Lopez, Exchange"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Bxc6",
            "dc",
            "O-O",
            "f6",
            ""
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dc O-O f6 ",
        "name": "Ruy Lopez, Exchange, Gligoric Variation"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "d3",
            "d6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 d3 d6",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "d6",
            "O-O",
            "Bd7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 O-O Bd7",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "d6",
            "O-O",
            "Bg4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 O-O Bg4",
        "name": "Ruy Lopez, Modern Steinitz Defense, 5.O-O"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "d6",
            "Bxc6+",
            "bxc6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 Bxc6+ bxc6",
        "name": "Ruy Lopez, Modern Steinitz Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "d6",
            "c3",
            "f5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 f5",
        "name": "Ruy Lopez, Modern Steinitz Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "d6",
            "c3",
            "Bd7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7",
        "name": "Ruy Lopez, Modern Steinitz Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "d6",
            "c3",
            "Bd7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7",
        "name": "Ruy Lopez, Modern Steinitz Defense, Fianchetto Variation"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "d4",
            "exd4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 d4 exd4",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Bc5"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Bc5",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "d6"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6",
        "name": "Ruy Lopez, Steinitz Defense Deferred"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Nxe4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4",
        "name": "Ruy Lopez, Open"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Nxe4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4",
        "name": "Ruy Lopez, Open, Howell Attack"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Nxe4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4",
        "name": "Ruy Lopez, Open"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Nxe4"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4",
        "name": "Ruy Lopez, Open"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Exchange Variation Doubly Deferred (DERLD)"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Worrall Attack"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Marshall"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed, Smyslov Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed, Breyer Defense"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed, Breyer"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed, Chigorin"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed, Chigorin"
    },
    {
        "moves": [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7"
        ],
        "moveSet": "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
        "name": "Ruy Lopez, Closed, Chigorin, 12...cd"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nc3",
            "Nf6",
            "e3",
            "e6",
            "Nf3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 c6 Nc3 Nf6 e3 e6 Nf3 Nbd7",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "d5",
            "Nc3",
            "Nf6",
            "Bg5",
            "e6",
            "e4",
            "dxe4",
            "Nxe4",
            "Be7"
        ],
        "moveSet": "d4 d5 Nc3 Nf6 Bg5 e6 e4 dxe4 Nxe4 Be7",
        "name": "Richter-Veresov Attack"
    },
    {
        "moves": [
            "d4",
            "d5",
            "Nf3",
            "Nf6",
            "c4",
            "c6",
            "Nc3",
            "dxc4",
            "a4",
            "Bf5"
        ],
        "moveSet": "d4 d5 Nf3 Nf6 c4 c6 Nc3 dxc4 a4 Bf5",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "d5",
            "Nf3",
            "Nf6",
            "Bg5",
            "Ne4",
            "Bf4",
            "c5",
            "e3",
            "Qb6"
        ],
        "moveSet": "d4 d5 Nf3 Nf6 Bg5 Ne4 Bf4 c5 e3 Qb6",
        "name": "Torre Attack (Tartakower Variation)"
    },
    {
        "moves": [
            "d4",
            "d5",
            "Nf3",
            "Nf6",
            "e3",
            "e6",
            "Bd3",
            "c5",
            "c3",
            "Nc6"
        ],
        "moveSet": "d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 c3 Nc6",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "d5",
            "Nf3",
            "Nf6",
            "e3",
            "e6",
            "Bd3",
            "c5",
            "b3",
            "Nc6"
        ],
        "moveSet": "d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 b3 Nc6",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "Nc3",
            "e6",
            "e3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 e3 Nbd7",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "Nc6",
            "cxd5",
            "Qxd5",
            "e3",
            "e5",
            "Nc3",
            "Bb4"
        ],
        "moveSet": "d4 d5 c4 Nc6 cxd5 Qxd5 e3 e5 Nc3 Bb4",
        "name": "Queen's Gambit Declined, Chigorin Defense"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e5",
            "dxe5",
            "d4",
            "Nf3",
            "Nc6",
            "g3",
            "Be6"
        ],
        "moveSet": "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3 Be6",
        "name": "Queen's Gambit Declined, Albin Counter Gambit"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e5",
            "dxe5",
            "d4",
            "Nf3",
            "Nc6",
            "g3",
            "Nge7"
        ],
        "moveSet": "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3 Nge7",
        "name": "Queen's Gambit Declined, Albin Counter Gambit, 5.g3"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "e3",
            "Bf5",
            "Nc3",
            "e6"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5 Nc3 e6",
        "name": "Queen's Gambit Declined Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "Nc3",
            "e6",
            "Bg5",
            "h6"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 Bg5 h6",
        "name": "Queen's Gambit Declined Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "e3",
            "Bf5",
            "cxd5",
            "cxd5"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5 cxd5 cxd5",
        "name": "Queen's Gambit Declined Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "cxd5",
            "cxd5",
            "Nc3",
            "e6"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 cxd5 cxd5 Nc3 e6",
        "name": "Queen's Gambit Declined Slav, Exchange Variation"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "cxd5",
            "cxd5",
            "Nc3",
            "Nc6"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 cxd5 cxd5 Nc3 Nc6",
        "name": "Queen's Gambit Declined Slav, Exchange Variation"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "Nc3",
            "e6",
            "Bg5",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 Nc3 e6 Bg5 Nbd7",
        "name": "Queen's Gambit Declined Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "Nc3",
            "dxc4",
            "a4",
            "e6"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 e6",
        "name": "Queen's Gambit Declined Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "Nc3",
            "dxc4",
            "a4",
            "Bf5"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5",
        "name": "Queen's Gambit Declined Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "Nc3",
            "dxc4",
            "a4",
            "Bf5"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5",
        "name": "Queen's Gambit Declined Slav, Dutch"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "c6",
            "Nf3",
            "Nf6",
            "Nc3",
            "dxc4",
            "a4",
            "Bf5"
        ],
        "moveSet": "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5",
        "name": "Queen's Gambit Declined Slav, Dutch"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "e3",
            "Nf6",
            "Bxc4",
            "e6",
            "Nf3",
            "c5"
        ],
        "moveSet": "d4 d5 c4 dxc4 e3 Nf6 Bxc4 e6 Nf3 c5",
        "name": "Queen's Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "e3",
            "Bg4",
            "Bxc4",
            "e6"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 e3 Bg4 Bxc4 e6",
        "name": "Queen's Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "a6",
            "e3",
            "Bg4",
            "Bxc4",
            "e6"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 a6 e3 Bg4 Bxc4 e6",
        "name": "Queen's Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "e3",
            "e6",
            "Bxc4",
            "a6"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 a6",
        "name": "Queen's Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "Nc3",
            "a6",
            "e4",
            "b5"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 Nc3 a6 e4 b5",
        "name": "Queen's Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "e3",
            "g6",
            "Bxc4",
            "Bg7"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 e3 g6 Bxc4 Bg7",
        "name": "Queen's Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "e3",
            "e6",
            "Bxc4",
            "Be7"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 Be7",
        "name": "Queen's Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "e3",
            "e6",
            "Bxc4",
            "c5"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5",
        "name": "Queen's Gambit Accepted, Classical"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "e3",
            "e6",
            "Bxc4",
            "c5"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5",
        "name": "Queen's Gambit Accepted, Classical"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "dxc4",
            "Nf3",
            "Nf6",
            "e3",
            "e6",
            "Bxc4",
            "c5"
        ],
        "moveSet": "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5",
        "name": "Queen's Gambit Accepted, Classical"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "cxd5",
            "exd5",
            "Bg5",
            "Be7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "c6",
            "e3",
            "Nf6",
            "Nf3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 c6 e3 Nf6 Nf3 Nbd7",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "c5",
            "e3",
            "Nf6",
            "Nf3",
            "Nc6"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 c5 e3 Nf6 Nf3 Nc6",
        "name": "Queen's Gambit Declined, Tarrasch"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "c5",
            "cxd5",
            "exd5",
            "Nf3",
            "Nc6"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6",
        "name": "Queen's Gambit Declined, Tarrasch"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "c5",
            "cxd5",
            "exd5",
            "Nf3",
            "Nc6"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6",
        "name": "Queen's Gambit Declined, Tarrasch"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "cxd5",
            "exd5",
            "Bg5",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Nbd7",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "cxd5",
            "exd5",
            "Bg5",
            "c6"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6",
        "name": "Queen's Gambit Declined, Exchange, Positional line, 6.Qc2"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "Be7",
            "Bf4",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "Bb4",
            "cxd5",
            "exd5"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4 cxd5 exd5",
        "name": "Queen's Gambit Declined, Ragozin Variation"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "Bb4",
            "Bg5",
            "dxc4"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4 Bg5 dxc4",
        "name": "Queen's Gambit Declined, Ragozin, Vienna Variation"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c5",
            "e3",
            "Nc6"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 e3 Nc6",
        "name": "Queen's Gambit Declined, Semi-Tarrasch"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c5",
            "cxd5",
            "exd5"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5 exd5",
        "name": "Queen's Gambit Declined, Semi-Tarrasch"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c5",
            "cxd5",
            "Nxd5"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5 Nxd5",
        "name": "Queen's Gambit Declined, Semi-Tarrasch, 7.Bd3"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c6",
            "Bg5",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 Nbd7",
        "name": "Queen's Gambit Declined Semi-Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c6",
            "Bg5",
            "dxc4"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4",
        "name": "Queen's Gambit Declined Semi-Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c6",
            "e3",
            "Bd6"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Bd6",
        "name": "Queen's Gambit Declined Semi-Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c6",
            "e3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7",
        "name": "Queen's Gambit Declined Semi-Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c6",
            "e3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7",
        "name": "Queen's Gambit Declined Semi-Slav"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c6",
            "e3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7",
        "name": "Queen's Gambit Declined Semi-Slav, Meran"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Nf3",
            "c6",
            "e3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7",
        "name": "Queen's Gambit Declined Semi-Slav, Meran"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "Nbd7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 Nbd7",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Nbd7",
            "e3",
            "Be7"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 Be7",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Nbd7",
            "e3",
            "c6"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 Nf3 O-O",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Anti-Neo-Orthodox Variation"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Lasker Defense"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Tartakower (Makagonov-Bondarevsky) System"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Tartakower"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox Defense"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox, Rubinstein Attack"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox, Rubinstein Attack"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox Defense"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox, Rubinstein Attack"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox, Rubinstein Attack, Main line"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox Defense, Bd3 line"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox Defense, Bd3 line"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox Defense, Classical"
    },
    {
        "moves": [
            "d4",
            "d5",
            "c4",
            "e6",
            "Nc3",
            "Nf6",
            "Bg5",
            "Be7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O",
        "name": "Queen's Gambit Declined, Orthodox Defense, Classical, 13.de"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "f3",
            "d5",
            "cxd5",
            "Nxd5",
            "e4",
            "Nb6"
        ],
        "moveSet": "d4 Nf6 c4 g6 f3 d5 cxd5 Nxd5 e4 Nb6",
        "name": "Neo-Grunfeld Defense"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "cxd5",
            "Nxd5",
            "Bg2",
            "Bg7"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 cxd5 Nxd5 Bg2 Bg7",
        "name": "Neo-Grunfeld"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "cxd5",
            "Nxd5"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 cxd5 Nxd5",
        "name": "Neo-Grunfeld, 5.cd, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "Nf3",
            "dxc4"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 dxc4",
        "name": "Neo-Grunfeld, 5.Nf3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O",
        "name": "Neo-Grunfeld, 6.cd Nxd5, 7.O-O"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O",
        "name": "Neo-Grunfeld, 6.cd Nxd5, 7.O-O c5, 8.dxc5"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O",
        "name": "Neo-Grunfeld, 6.cd Nxd5, 7.O-O Nb6"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O",
        "name": "Neo-Grunfeld, 6.O-O"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O",
        "name": "Neo-Grunfeld, 6.O-O c6"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "d5",
            "Bg2",
            "Bg7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O",
        "name": "Neo-Grunfeld, 6.O-O, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Bg5",
            "Ne4"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bg5 Ne4",
        "name": "Grunfeld"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Qb3",
            "dxc4",
            "Qxc4",
            "Bg7"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Qb3 dxc4 Qxc4 Bg7",
        "name": "Grunfeld, Russian Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Bf4",
            "Bg7",
            "e3",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 c5",
        "name": "Grunfeld, 4.Bf4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Bf4",
            "Bg7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O",
        "name": "Grunfeld, Grunfeld Gambit"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Bf4",
            "Bg7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O",
        "name": "Grunfeld, Grunfeld Gambit Accepted"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "cxd5",
            "Nxd5",
            "Bd2",
            "Bg7"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 Bd2 Bg7",
        "name": "Grunfeld"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "cxd5",
            "Nxd5",
            "e4",
            "Nxc3"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3",
        "name": "Grunfeld, Exchange"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "cxd5",
            "Nxd5",
            "e4",
            "Nxc3"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3",
        "name": "Grunfeld, Exchange"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "cxd5",
            "Nxd5",
            "e4",
            "Nxc3"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3",
        "name": "Grunfeld, Spassky Variation, Main line, 10...cd, 11.cd"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "cxd5",
            "Nxd5",
            "e4",
            "Nxc3"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3",
        "name": "Grunfeld"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "cxd5",
            "Nxd5"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 cxd5 Nxd5",
        "name": "Grunfeld"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Bg5",
            "dxc4"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bg5 dxc4",
        "name": "Grunfeld, 5.Bg5"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Bf4",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bf4 c5",
        "name": "Grunfeld, 5.Bf4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Bf4",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bf4 O-O",
        "name": "Grunfeld, with Bf4 & e3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "e3",
            "c6"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 c6",
        "name": "Grunfeld"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "e3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O",
        "name": "Grunfeld"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Qb3",
            "c6"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 c6",
        "name": "Grunfeld, Russian Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Qb3",
            "dxc4"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4",
        "name": "Grunfeld, Russian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Qb3",
            "dxc4"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4",
        "name": "Grunfeld, Russian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "d5",
            "Nf3",
            "Bg7",
            "Qb3",
            "dxc4"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4",
        "name": "Grunfeld Defense, Smyslov"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "a3",
            "Bb7",
            "Nc3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 a3 Bb7 Nc3 d5",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "Bb4+",
            "Bd2",
            "Be7"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 Bb4+ Bd2 Be7",
        "name": "Catalan, Closed"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "dxc4",
            "Qa4+",
            "Bd7"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4+ Bd7",
        "name": "Catalan, Open, 5.Qa4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "dxc4",
            "Qa4+",
            "Nbd7"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4+ Nbd7",
        "name": "Catalan, Open"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "dxc4",
            "Nf3",
            "a6"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 a6",
        "name": "Catalan, Open, 5.Nf3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "dxc4",
            "Nf3",
            "Be7"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7",
        "name": "Catalan, Open, Classical line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "Be7",
            "Nf3",
            "dxc4"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 dxc4",
        "name": "Catalan, Closed, 5.Nf3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O",
        "name": "Catalan, Closed"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O",
        "name": "Catalan, Closed"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "g3",
            "d5",
            "Bg2",
            "Be7",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O",
        "name": "Catalan, Closed"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "c5",
            "d5",
            "exd5",
            "cxd5",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 c5 d5 exd5 cxd5 d6",
        "name": "Queen's Pawn Game"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "Bb4+",
            "Bd2",
            "Qe7",
            "g3",
            "Nc6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Qe7 g3 Nc6",
        "name": "Bogo-Indian Defense"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "g3",
            "Ba6",
            "b3",
            "Bb4+"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3 Bb4+",
        "name": "Queen's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "Nc3",
            "Bb7",
            "Bg5",
            "h6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 Bg5 h6",
        "name": "Queen's Indian, 4.Nc3, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "e3",
            "Bb7",
            "Bd3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 e3 Bb7 Bd3 d5",
        "name": "Queen's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "g3",
            "Ba6",
            "Qa4",
            "Bb7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 Qa4 Bb7",
        "name": "Queen's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "g3",
            "Bb7",
            "Bg2",
            "Bb4+"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Bb4+",
        "name": "Queen's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "g3",
            "Bb7",
            "Bg2",
            "Be7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7",
        "name": "Queen's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "g3",
            "Bb7",
            "Bg2",
            "Be7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7",
        "name": "Queen's Indian, Old Main line, 7.Nc3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nf3",
            "b6",
            "g3",
            "Bb7",
            "Bg2",
            "Be7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7",
        "name": "Queen's Indian, Old Main line, 9.Qxc3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Ne2",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Ne2 d5",
        "name": "Nimzo-Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Nf3",
            "b6",
            "Bg5",
            "Bb7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 b6 Bg5 Bb7",
        "name": "Nimzo-Indian, Three Knights"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qb3",
            "c5",
            "dxc5",
            "Na6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Na6",
        "name": "Nimzo-Indian, Spielmann Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qb3",
            "c5",
            "dxc5",
            "Nc6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6",
        "name": "Nimzo-Indian, Spielmann"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "a3",
            "Bxc3+",
            "bxc3",
            "b6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 b6",
        "name": "Nimzo-Indian, Samisch"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "a3",
            "Bxc3+",
            "bxc3",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5",
        "name": "Nimzo-Indian, Samisch"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "a3",
            "Bxc3+",
            "bxc3",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5",
        "name": "Nimzo-Indian, Samisch"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "a3",
            "Bxc3+",
            "bxc3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O",
        "name": "Nimzo-Indian, Samisch Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "a3",
            "Bxc3+",
            "bxc3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O",
        "name": "Nimzo-Indian, Samisch Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "a3",
            "Bxc3+",
            "bxc3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O",
        "name": "Nimzo-Indian, Samisch"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Bg5",
            "c5",
            "d5",
            "h6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Bg5 c5 d5 h6",
        "name": "Nimzo-Indian, Leningrad"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Bg5",
            "h6",
            "Bh4",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Bg5 h6 Bh4 c5",
        "name": "Nimzo-Indian, Leningrad, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "c5",
            "dxc5",
            "Bxc5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5 dxc5 Bxc5",
        "name": "Nimzo-Indian, Classical"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "Nc6",
            "Nf3",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 Nc6 Nf3 d6",
        "name": "Nimzo-Indian, Classical"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "d5",
            "cxd5",
            "Qxd5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 cxd5 Qxd5",
        "name": "Nimzo-Indian, Classical, Noa Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "d5",
            "cxd5",
            "exd5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 cxd5 exd5",
        "name": "Nimzo-Indian, Classical, Noa Variation, 5.cd ed"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "d5",
            "a3",
            "Be7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 a3 Be7",
        "name": "Nimzo-Indian, Classical"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "d5",
            "a3",
            "Bxc3+"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 a3 Bxc3+",
        "name": "Nimzo-Indian, Classical"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "c5",
            "dxc5",
            "Na6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5 dxc5 Na6",
        "name": "Nimzo-Indian, Classical, 4...c5"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "Qc2",
            "c5",
            "dxc5",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5 dxc5 O-O",
        "name": "Nimzo-Indian, Classical, Pirc Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Bd3",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 c5",
        "name": "Nimzo-Indian, 4.e3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "c5",
            "Bd3",
            "Nc6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5 Bd3 Nc6",
        "name": "Nimzo-Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "c5",
            "Ne2",
            "cxd4"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5 Ne2 cxd4",
        "name": "Nimzo-Indian, 4.e3 c5, 5.Ne2 (Rubinstein)"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "b6",
            "Bd3",
            "Bb7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Bd3 Bb7",
        "name": "Nimzo-Indian, Fischer Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "b6",
            "Ne2",
            "Bb7"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Ne2 Bb7",
        "name": "Nimzo-Indian, Fischer Variation, 5.Ne2"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "b6",
            "Ne2",
            "Ba6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Ne2 Ba6",
        "name": "Nimzo-Indian, 4.e3, Bronstein (Byrne) Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Ne2",
            "Re8"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Ne2 Re8",
        "name": "Nimzo-Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Bd3",
            "b6"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 b6",
        "name": "Nimzo-Indian, 4.e3 O-O 5.Bd3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Bd3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5",
        "name": "Nimzo-Indian, 4.e3 O-O 5.Bd3 d5"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Bd3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5",
        "name": "Nimzo-Indian, 4.e3, Botvinnik System"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 c5",
        "name": "Nimzo-Indian, 4.e3 O-O 5.Nf3, without ...d5"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3, Main line with ...b6"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3, Gligoric System"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3, Gligoric System, Bronstein Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3, Main line with 7...Nc6"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3, Main line with 8...dc and 9...cd"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3, Main line with 8...Bxc3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "e6",
            "Nc3",
            "Bb4",
            "e3",
            "O-O",
            "Nf3",
            "d5"
        ],
        "moveSet": "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
        "name": "Nimzo-Indian, 4.e3, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "g3",
            "Bg7",
            "Bg2",
            "O-O",
            "Nc3",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 g6 g3 Bg7 Bg2 O-O Nc3 d6",
        "name": "King's Indian Defense"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "h3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 h3 O-O",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "Nbd7"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 Nbd7",
        "name": "King's Indian, Fianchetto"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O",
        "name": "King's Indian, Fianchetto, Panno Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O",
        "name": "King's Indian, Fianchetto, Yugoslav System"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O",
        "name": "King's Indian, Fianchetto, Yugoslav, 7.O-O"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O",
        "name": "King's Indian, Fianchetto, Yugoslav Panno"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O",
        "name": "King's Indian, Fianchetto"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O",
        "name": "King's Indian, Fianchetto, Classical Variation, 8.e4"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "Nf3",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O",
        "name": "King's Indian, Fianchetto, Classical Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "O-O",
            "Nf3",
            "d6"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 O-O Nf3 d6",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "h3",
            "Nbd7"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 h3 Nbd7",
        "name": "King's Indian, Makagonov System (5.h3)"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "g3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 g3 O-O",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Be2",
            "Nbd7"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 Nbd7",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Be2",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O",
        "name": "King's Indian, Averbakh, 6...c5"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Be2",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O",
        "name": "King's Indian, Averbakh, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f4",
            "c5"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 c5",
        "name": "King's Indian, Four Pawns Attack"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f4",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f4",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O",
        "name": "King's Indian, Four Pawns Attack, with Be2 and Nf3"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f4",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O",
        "name": "King's Indian, Four Pawns Attack, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "c6"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 c6",
        "name": "King's Indian, Samisch Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch, double Fianchetto Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch, Panno Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch, Orthodox Variation"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch, Orthodox, 7.Nge2 c6"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch, Orthodox"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch, Orthodox, 7.d5 c6"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "f3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O",
        "name": "King's Indian, Samisch, Orthodox Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "Bg4"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 Bg4",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian, Petrosian System"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian, Orthodox"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian, Orthodox, 7...Nbd7, 8.Re1"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian, Orthodox, 7...Nbd7, Main line"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian, Orthodox, Taimanov, 9.Ne1"
    },
    {
        "moves": [
            "d4",
            "Nf6",
            "c4",
            "g6",
            "Nc3",
            "Bg7",
            "e4",
            "d6",
            "Nf3",
            "O-O"
        ],
        "moveSet": "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",
        "name": "King's Indian, Orthodox, Taimanov"
    }
]