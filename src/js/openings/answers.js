let allChessOpenings = [
    {
        name_expert: "Nimzovich-Larsen Attack",
        moves: "b3"
    },
    {
        name_expert: "Bird's Opening",
        moves: "f4"
    },
    {
        name_expert: "Bird's Opening",
        moves: "f4 d5"
    },
    {
        name_expert: "Reti Opening",
        moves: "Nf3"
    },
    {
        name_expert: "Reti Opening",
        moves: "Nf3 Nf6"
    },
    {
        name_expert: "Reti Opening",
        moves: "Nf3 d5"
    },
    {
        name_expert: "King's Indian Attack",
        moves: "Nf3 d5 g3"
    },
    {
        name_expert: "King's Indian Attack",
        moves: "Nf3 d5 g3 c5 Bg2"
    },
    {
        name_expert: "Reti Opening",
        moves: "Nf3 d5 c4"
    },
    {
        name_expert: "English",
        moves: "c4"
    },
    {
        name_expert: "English, Caro-Kann Defensive System",
        moves: "c4 c6"
    },
    {
        name_expert: "English with b3",
        moves: "c4 c6 Nf3 d5 b3"
    },
    {
        name_expert: "English",
        moves: "c4 e6"
    },
    {
        name_expert: "English",
        moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 Be7 O-O"
    },
    {
        name_expert: "English",
        moves: "c4 Nf6"
    },
    {
        name_expert: "English",
        moves: "c4 Nf6 Nc3"
    },
    {
        name_expert: "English",
        moves: "c4 Nf6 Nc3 e6"
    },
    {
        name_expert: "English, Mikenas-Carls",
        moves: "c4 Nf6 Nc3 e6 e4"
    },
    {
        name_expert: "English, Mikenas-Carls, Sicilian Variation",
        moves: "c4 Nf6 Nc3 e6 e4 c5"
    },
    {
        name_expert: "English",
        moves: "c4 e5"
    },
    {
        name_expert: "English",
        moves: "c4 e5 Nc3"
    },
    {
        name_expert: "English",
        moves: "c4 e5 Nc3 Nf6"
    },
    {
        name_expert: "English, Bremen System, Keres Variation",
        moves: "c4 e5 Nc3 Nf6 g3 c6"
    },
    {
        name_expert: "English, Bremen System with ...g6",
        moves: "c4 e5 Nc3 Nf6 g3 g6"
    },
    {
        name_expert: "English",
        moves: "c4 e5 Nc3 Nc6"
    },
    {
        name_expert: "English",
        moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6"
    },
    {
        name_expert: "English, Three Knights System",
        moves: "c4 e5 Nc3 Nc6 Nf3"
    },
    {
        name_expert: "English",
        moves: "c4 e5 Nc3 Nc6 Nf3 Nf6"
    },
    {
        name_expert: "English, Four Knights, Kingside Fianchetto",
        moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 g3"
    },
    {
        name_expert: "English, Symmetrical",
        moves: "c4 c5"
    },
    {
        name_expert: "English, Symmetrical, Benoni Formation",
        moves: "c4 c5 Nf3 Nf6 d4"
    },
    {
        name_expert: "English, Symmetrical Variation",
        moves: "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e6"
    },
    {
        name_expert: "English, Symmetrical",
        moves: "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e6 Nc3 Nc6"
    },
    {
        name_expert: "English, Symmetrical",
        moves: "c4 c5 Nc3"
    },
    {
        name_expert: "English, Symmetrical",
        moves: "c4 c5 Nc3 Nc6"
    },
    {
        name_expert: "English",
        moves: "c4 c5 Nc3 Nc6 g3"
    },
    {
        name_expert: "English, Symmetrical",
        moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3"
    },
    {
        name_expert: "English, Symmetrical",
        moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6"
    },
    {
        name_expert: "English, Symmetrical, Main line with d4",
        moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4"
    },
    {
        name_expert: "Queen's Pawn Game (with ...d6)",
        moves: "d4 d6"
    },
    {
        name_expert: "Modern Defense, Averbakh System",
        moves: "d4 d6 c4 g6 Nc3 Bg7 e4"
    },
    {
        name_expert: "Old Benoni",
        moves: "d4 c5"
    },
    {
        name_expert: "Old Benoni Defense",
        moves: "d4 c5 d5 e5"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 Nf6"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 Nf6 Nf3"
    },
    {
        name_expert: "Queen's Indian",
        moves: "d4 Nf6 Nf3 b6"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 Nf3 g6"
    },
    {
        name_expert: "King's Indian, Fianchetto without c4",
        moves: "d4 Nf6 Nf3 g6 g3"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 Nf6 c4"
    },
    {
        name_expert: "Budapest Gambit",
        moves: "d4 Nf6 c4 e5"
    },
    {
        name_expert: "Budapest Gambit",
        moves: "d4 Nf6 c4 e5 dxe5 Ng4"
    },
    {
        name_expert: "Old Indian",
        moves: "d4 Nf6 c4 d6"
    },
    {
        name_expert: "Old Indian, Ukrainian Variation, 4.Nf3",
        moves: "d4 Nf6 c4 d6 Nc3 e5 Nf3"
    },
    {
        name_expert: "Old Indian, Main line",
        moves: "d4 Nf6 c4 d6 Nc3 e5 Nf3 Nbd7 e4"
    },
    {
        name_expert: "Benoni Defense",
        moves: "d4 Nf6 c4 c5"
    },
    {
        name_expert: "Benko Gambit",
        moves: "d4 Nf6 c4 c5 d5 b5"
    },
    {
        name_expert: "Benko Gambit",
        moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6"
    },
    {
        name_expert: "Benko Gambit",
        moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6"
    },
    {
        name_expert: "Benoni Defense",
        moves: "d4 Nf6 c4 c5 d5 e6"
    },
    {
        name_expert: "Benoni",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Fianchetto Variation",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Fianchetto, 9...Nbd7",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Fianchetto, 11...Re8",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, 6.e4",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Taimanov Variation",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Four Pawns Attack",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Four Pawns Attack, Main line",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical with 7.Nf3",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical, 8.Bg5",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical without 9.O-O",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical, 9.O-O",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical, 9...a6, 10.a4",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical with ...a6 and 10...Bg4",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical, 9...Re8",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical, 9...Re8, 10.Nd2",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical with ...Re8 and ...Na6",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Benoni, Classical, 11.f3",
        moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6"
    },
    {
        name_expert: "Dutch",
        moves: "d4 f5"
    },
    {
        name_expert: "Dutch",
        moves: "d4 f5 g3"
    },
    {
        name_expert: "Dutch, Staunton Gambit",
        moves: "d4 f5 e4"
    },
    {
        name_expert: "Dutch, Staunton Gambit",
        moves: "d4 f5 e4 fxe4 Nc3 Nf6 Bg5"
    },
    {
        name_expert: "Dutch",
        moves: "d4 f5 c4"
    },
    {
        name_expert: "Dutch, with c4 & Nc3",
        moves: "d4 f5 c4 Nf6 Nc3"
    },
    {
        name_expert: "Dutch",
        moves: "d4 f5 c4 Nf6 g3"
    },
    {
        name_expert: "Dutch, Leningrad, Main Variation",
        moves: "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3"
    },
    {
        name_expert: "Dutch, Leningrad, Main Variation with c6",
        moves: "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Leningrad, Main Variation with Nc6",
        moves: "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Dutch",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2"
    },
    {
        name_expert: "Dutch Defense",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7"
    },
    {
        name_expert: "Dutch",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Stonewall, Botvinnik Variation",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Stonewall with Ba3",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Stonewall",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Classical Variation",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Ilyin-Genevsky",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Ilyin-Genevsky Variation with Qc2",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Dutch, Ilyin-Genevsky Variation with b3",
        moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Uncommon King's Pawn Opening",
        moves: "e4"
    },
    {
        name_expert: "Scandinavian",
        moves: "e4 d5"
    },
    {
        name_expert: "Alekhine's Defense",
        moves: "e4 Nf6"
    },
    {
        name_expert: "Alekhine's Defense",
        moves: "e4 Nf6 e5 Nd5 d4"
    },
    {
        name_expert: "Alekhine's Defense, Modern",
        moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3"
    },
    {
        name_expert: "Alekhine's Defense, Modern",
        moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4"
    },
    {
        name_expert: "Robatsch",
        moves: "e4 g6"
    },
    {
        name_expert: "Pirc",
        moves: "e4 d6 d4 Nf6"
    },
    {
        name_expert: "Pirc, Classical",
        moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3"
    },
    {
        name_expert: "Pirc, Austrian Attack",
        moves: "e4 d6 d4 Nf6 Nc3 g6 f4"
    },
    {
        name_expert: "Caro-Kann",
        moves: "e4 c6"
    },
    {
        name_expert: "Caro-Kann, Two Knights, 3...Bg4",
        moves: "e4 c6 Nc3 d5 Nf3 Bg4"
    },
    {
        name_expert: "Caro-Kann Defense",
        moves: "e4 c6 d4"
    },
    {
        name_expert: "Caro-Kann, Exchange",
        moves: "e4 c6 d4 d5 exd5 cxd5"
    },
    {
        name_expert: "Caro-Kann, Panov-Botvinnik Attack",
        moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Caro-Kann",
        moves: "e4 c6 d4 d5 Nc3"
    },
    {
        name_expert: "Caro-Kann, Bronstein-Larsen Variation",
        moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ gxf6"
    },
    {
        name_expert: "Caro-Kann, Steinitz Variation",
        moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7"
    },
    {
        name_expert: "Caro-Kann, Classical",
        moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5"
    },
    {
        name_expert: "Caro-Kann, Classical",
        moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5"
    },
    {
        name_expert: "Sicilian, 2.f4 and 2.d4",
        moves: "e4 c5 f4"
    },
    {
        name_expert: "Sicilian, Alapin",
        moves: "e4 c5 c3"
    },
    {
        name_expert: "Sicilian, Closed",
        moves: "e4 c5 Nc3"
    },
    {
        name_expert: "Sicilian, Closed",
        moves: "e4 c5 Nc3 Nc6 g3"
    },
    {
        name_expert: "Sicilian, Closed",
        moves: "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6"
    },
    {
        name_expert: "Sicilian, Closed, 6.Be3",
        moves: "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3"
    },
    {
        name_expert: "Sicilian, O'Kelly Variation",
        moves: "e4 c5 Nf3 a6"
    },
    {
        name_expert: "Sicilian, Nimzovich-Rubinstein",
        moves: "e4 c5 Nf3 Nf6"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 Nc6"
    },
    {
        name_expert: "Sicilian, Rossolimo Variation",
        moves: "e4 c5 Nf3 Nc6 Bb5 g6"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4"
    },
    {
        name_expert: "Sicilian, Accelerated Fianchetto",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nxc6"
    },
    {
        name_expert: "Sicilian, Accelerated Fianchetto, Modern Variation with Bc4",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7"
    },
    {
        name_expert: "Sicilian, Accelerated Fianchetto",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4"
    },
    {
        name_expert: "Sicilian, Accelerated Fianchetto",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7"
    },
    {
        name_expert: "Sicilian, Accelerated Fianchetto, Maroczy Bind, 6.Be3",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7"
    },
    {
        name_expert: "Sicilian, Accelerated Fianchetto, Breyer Variation",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 e6"
    },
    {
        name_expert: "Sicilian, Kan",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6"
    },
    {
        name_expert: "Sicilian, Kan",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3"
    },
    {
        name_expert: "Sicilian, Kan, 5.Nc3",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6"
    },
    {
        name_expert: "Sicilian, Taimanov",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3"
    },
    {
        name_expert: "Sicilian, Taimanov Variation",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Taimanov (Bastrikov) Variation",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7"
    },
    {
        name_expert: "Sicilian, Taimanov Variation",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7"
    },
    {
        name_expert: "Sicilian, Taimanov Variation",
        moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 d6"
    },
    {
        name_expert: "Sicilian, Canal-Sokolsky (Rossolimo) Attack",
        moves: "e4 c5 Nf3 d6 Bb5+"
    },
    {
        name_expert: "Sicilian, Canal-Sokolsky (Rossolimo) Attack",
        moves: "e4 c5 Nf3 d6 Bb5+ Bd7"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Qxd4"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4"
    },
    {
        name_expert: "Sicilian, Prins Variation, Venice Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3 e5"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6"
    },
    {
        name_expert: "Sicilian, Boleslavsky Variation, 7.Nb3",
        moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer, Larsen Variation, 7.Qd2",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer Attack, 7...Be7 Defense, 9...Nxd4",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer Attack, 7...a6",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 8...Bd7",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 9...Be7",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Richter-Rauzer Attack, 7...a6 Defense, 11.Bxf6",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6"
    },
    {
        name_expert: "Sicilian, Dragon Variation",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Levenfish Variation",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Classical",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Classical",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Yugoslav Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Yugoslav Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Yugoslav Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Yugoslav Attack, 10.castle long",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Dragon, Yugoslav Attack, 12.h4",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6"
    },
    {
        name_expert: "Sicilian, Scheveningen",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Scheveningen, Keres Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Scheveningen",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Scheveningen",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Scheveningen, Classical",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Fischer-Sozin Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Fischer-Sozin with ...a6 and ...b5",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Fischer-Sozin Attack",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6"
    },
    {
        name_expert: "Sicilian, Najdorf",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf, Zagreb (Fianchetto) Variation",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf, Opocensky Variation",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf, 6.f4",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf, 6...e6",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "Sicilian, Najdorf, 7...Be7 Main line",
        moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6"
    },
    {
        name_expert: "French Defense",
        moves: "e4 e6"
    },
    {
        name_expert: "French, Exchange",
        moves: "e4 e6 d4 d5 exd5 exd5 Nc3 Nf6 Bg5"
    },
    {
        name_expert: "French, Advance",
        moves: "e4 e6 d4 d5 e5"
    },
    {
        name_expert: "French, Tarrasch",
        moves: "e4 e6 d4 d5 Nd2"
    },
    {
        name_expert: "French, Tarrasch, Guimard Main line",
        moves: "e4 e6 d4 d5 Nd2 Nc6 Ngf3 Nf6"
    },
    {
        name_expert: "French, Tarrasch",
        moves: "e4 e6 d4 d5 Nd2 Nf6"
    },
    {
        name_expert: "French, Tarrasch",
        moves: "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5"
    },
    {
        name_expert: "French, Tarrasch",
        moves: "e4 e6 d4 d5 Nd2 c5"
    },
    {
        name_expert: "French, Tarrasch, Open, 4.ed ed",
        moves: "e4 e6 d4 d5 Nd2 c5 exd5 exd5"
    },
    {
        name_expert: "French, Tarrasch, Open Variation, Main line",
        moves: "e4 e6 d4 d5 Nd2 c5 exd5 exd5 Ngf3 Nc6"
    },
    {
        name_expert: "French",
        moves: "e4 e6 d4 d5 Nc3"
    },
    {
        name_expert: "French",
        moves: "e4 e6 d4 d5 Nc3 Nf6"
    },
    {
        name_expert: "French, McCutcheon",
        moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4"
    },
    {
        name_expert: "French",
        moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7"
    },
    {
        name_expert: "French, Classical",
        moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7"
    },
    {
        name_expert: "French, Winawer",
        moves: "e4 e6 d4 d5 Nc3 Bb4"
    },
    {
        name_expert: "French, Winawer",
        moves: "e4 e6 d4 d5 Nc3 Bb4 e5"
    },
    {
        name_expert: "French, Winawer, Advance",
        moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5"
    },
    {
        name_expert: "French, Winawer",
        moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+"
    },
    {
        name_expert: "French, Winawer, Advance",
        moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+"
    },
    {
        name_expert: "King's Pawn Game",
        moves: "e4 e5"
    },
    {
        name_expert: "Center Game",
        moves: "e4 e5 d4 exd4"
    },
    {
        name_expert: "Center Game",
        moves: "e4 e5 d4 exd4 Qxd4 Nc6"
    },
    {
        name_expert: "Bishop's Opening",
        moves: "e4 e5 Bc4"
    },
    {
        name_expert: "Bishop's Opening",
        moves: "e4 e5 Bc4 Nf6"
    },
    {
        name_expert: "Vienna",
        moves: "e4 e5 Nc3"
    },
    {
        name_expert: "Vienna",
        moves: "e4 e5 Nc3 Nf6"
    },
    {
        name_expert: "Vienna Game",
        moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4"
    },
    {
        name_expert: "Vienna Game",
        moves: "e4 e5 Nc3 Nf6 Bc4 Nc6"
    },
    {
        name_expert: "Vienna Gambit",
        moves: "e4 e5 Nc3 Nf6 f4"
    },
    {
        name_expert: "King's Gambit Declined",
        moves: "e4 e5 f4"
    },
    {
        name_expert: "King's Gambit Declined, Falkbeer Counter Gambit",
        moves: "e4 e5 f4 d5"
    },
    {
        name_expert: "King's Gambit Declined, Falkbeer Counter Gambit",
        moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 "
    },
    {
        name_expert: "King's Gambit Accepted",
        moves: "e4 e5 f4 exf4"
    },
    {
        name_expert: "King's Gambit Accepted",
        moves: "e4 e5 f4 exf4 Nf3"
    },
    {
        name_expert: "King's Gambit Accepted, Cunningham",
        moves: "e4 e5 f4 exf4 Nf3 Be7"
    },
    {
        name_expert: "King's Gambit Accepted, Abbazia Defense",
        moves: "e4 e5 f4 exf4 Nf3 d5"
    },
    {
        name_expert: "King's Gambit Accepted",
        moves: "e4 e5 f4 exf4 Nf3 g5 Nc3"
    },
    {
        name_expert: "King's Gambit Accepted",
        moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7"
    },
    {
        name_expert: "King's Gambit Accepted",
        moves: "e4 e5 f4 exf4 Nf3 g5 h4"
    },
    {
        name_expert: "King's Knight Opening",
        moves: "e4 e5 Nf3"
    },
    {
        name_expert: "Philidor Defense",
        moves: "e4 e5 Nf3 d6"
    },
    {
        name_expert: "Petrov Defense",
        moves: "e4 e5 Nf3 Nf6"
    },
    {
        name_expert: "Petrov, Modern Attack",
        moves: "e4 e5 Nf3 Nf6 d4 exd4 e5 Ne4 Qxd4"
    },
    {
        name_expert: "King's Pawn Game",
        moves: "e4 e5 Nf3 Nc6"
    },
    {
        name_expert: "Scotch Game",
        moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4"
    },
    {
        name_expert: "Three Knights",
        moves: "e4 e5 Nf3 Nc6 Nc3"
    },
    {
        name_expert: "Four Knights",
        moves: "e4 e5 Nf3 Nc6 Nc3 Nf6"
    },
    {
        name_expert: "Four Knights",
        moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5"
    },
    {
        name_expert: "Four Knights",
        moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4"
    },
    {
        name_expert: "Giuoco Piano",
        moves: "e4 e5 Nf3 Nc6 Bc4 Bc5"
    },
    {
        name_expert: "Evans Gambit",
        moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 "
    },
    {
        name_expert: "Evans Gambit",
        moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5"
    },
    {
        name_expert: "Giuoco Piano",
        moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3"
    },
    {
        name_expert: "Giuoco Piano",
        moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4"
    },
    {
        name_expert: "Two Knights Defense",
        moves: "e4 e5 Nf3 Nc6 Bc4 Nf6"
    },
    {
        name_expert: "Two Knights",
        moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4"
    },
    {
        name_expert: "Two Knights",
        moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5"
    },
    {
        name_expert: "Two Knights",
        moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5"
    },
    {
        name_expert: "Two Knights",
        moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5"
    },
    {
        name_expert: "Ruy Lopez, Bird's Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 Nd4"
    },
    {
        name_expert: "Ruy Lopez, Old Steinitz Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 d6"
    },
    {
        name_expert: "Ruy Lopez, Schliemann Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 f5"
    },
    {
        name_expert: "Ruy Lopez, Classical",
        moves: "e4 e5 Nf3 Nc6 Bb5 Bc5"
    },
    {
        name_expert: "Ruy Lopez, Berlin Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 Nf6"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4"
    },
    {
        name_expert: "Ruy Lopez, Exchange",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6"
    },
    {
        name_expert: "Ruy Lopez, Exchange, Gligoric Variation",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dc O-O f6 "
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6"
    },
    {
        name_expert: "Ruy Lopez, Modern Steinitz Defense, 5.O-O",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 O-O"
    },
    {
        name_expert: "Ruy Lopez, Modern Steinitz Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 Bxc6+ bxc6"
    },
    {
        name_expert: "Ruy Lopez, Modern Steinitz Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3"
    },
    {
        name_expert: "Ruy Lopez, Modern Steinitz Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7"
    },
    {
        name_expert: "Ruy Lopez, Modern Steinitz Defense, Fianchetto Variation",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O"
    },
    {
        name_expert: "Ruy Lopez, Steinitz Defense Deferred",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6"
    },
    {
        name_expert: "Ruy Lopez, Open",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4"
    },
    {
        name_expert: "Ruy Lopez, Open, Howell Attack",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4"
    },
    {
        name_expert: "Ruy Lopez, Open",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4"
    },
    {
        name_expert: "Ruy Lopez, Open",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4"
    },
    {
        name_expert: "Ruy Lopez, Closed",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Exchange Variation Doubly Deferred (DERLD)",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Worrall Attack",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Marshall",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed, Smyslov Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed, Breyer Defense",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed, Breyer",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed, Chigorin",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed, Chigorin",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Ruy Lopez, Closed, Chigorin, 12...cd",
        moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 d5"
    },
    {
        name_expert: "Richter-Veresov Attack",
        moves: "d4 d5 Nc3 Nf6 Bg5"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 d5 Nf3"
    },
    {
        name_expert: "Torre Attack (Tartakower Variation)",
        moves: "d4 d5 Nf3 Nf6 Bg5"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 d5 Nf3 Nf6 e3"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 d5 Nf3 Nf6 e3 e6"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4"
    },
    {
        name_expert: "Queen's Gambit Declined, Chigorin Defense",
        moves: "d4 d5 c4 Nc6"
    },
    {
        name_expert: "Queen's Gambit Declined, Albin Counter Gambit",
        moves: "d4 d5 c4 e5"
    },
    {
        name_expert: "Queen's Gambit Declined, Albin Counter Gambit, 5.g3",
        moves: "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3"
    },
    {
        name_expert: "Queen's Gambit Declined Slav",
        moves: "d4 d5 c4 c6"
    },
    {
        name_expert: "Queen's Gambit Declined Slav",
        moves: "d4 d5 c4 c6 Nf3"
    },
    {
        name_expert: "Queen's Gambit Declined Slav",
        moves: "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5"
    },
    {
        name_expert: "Queen's Gambit Declined Slav, Exchange Variation",
        moves: "d4 d5 c4 c6 Nf3 Nf6 cxd5 cxd5"
    },
    {
        name_expert: "Queen's Gambit Declined Slav, Exchange Variation",
        moves: "d4 d5 c4 c6 Nf3 Nf6 cxd5 cxd5 Nc3 Nc6"
    },
    {
        name_expert: "Queen's Gambit Declined Slav",
        moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3"
    },
    {
        name_expert: "Queen's Gambit Declined Slav",
        moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4"
    },
    {
        name_expert: "Queen's Gambit Declined Slav",
        moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5"
    },
    {
        name_expert: "Queen's Gambit Declined Slav, Dutch",
        moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5"
    },
    {
        name_expert: "Queen's Gambit Declined Slav, Dutch",
        moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5"
    },
    {
        name_expert: "Queen's Gambit Accepted",
        moves: "d4 d5 c4 dxc4"
    },
    {
        name_expert: "Queen's Gambit Accepted",
        moves: "d4 d5 c4 dxc4 Nf3"
    },
    {
        name_expert: "Queen's Gambit Accepted",
        moves: "d4 d5 c4 dxc4 Nf3 a6 e3 Bg4 Bxc4 e6"
    },
    {
        name_expert: "Queen's Gambit Accepted",
        moves: "d4 d5 c4 dxc4 Nf3 Nf6"
    },
    {
        name_expert: "Queen's Gambit Accepted",
        moves: "d4 d5 c4 dxc4 Nf3 Nf6 Nc3"
    },
    {
        name_expert: "Queen's Gambit Accepted",
        moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3"
    },
    {
        name_expert: "Queen's Gambit Accepted",
        moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6"
    },
    {
        name_expert: "Queen's Gambit Accepted, Classical",
        moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5"
    },
    {
        name_expert: "Queen's Gambit Accepted, Classical",
        moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5"
    },
    {
        name_expert: "Queen's Gambit Accepted, Classical",
        moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3"
    },
    {
        name_expert: "Queen's Gambit Declined, Tarrasch",
        moves: "d4 d5 c4 e6 Nc3 c5"
    },
    {
        name_expert: "Queen's Gambit Declined, Tarrasch",
        moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6"
    },
    {
        name_expert: "Queen's Gambit Declined, Tarrasch",
        moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6"
    },
    {
        name_expert: "Queen's Gambit Declined, Exchange, Positional line, 6.Qc2",
        moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3"
    },
    {
        name_expert: "Queen's Gambit Declined, Ragozin Variation",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4"
    },
    {
        name_expert: "Queen's Gambit Declined, Ragozin, Vienna Variation",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4 Bg5 dxc4"
    },
    {
        name_expert: "Queen's Gambit Declined, Semi-Tarrasch",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5"
    },
    {
        name_expert: "Queen's Gambit Declined, Semi-Tarrasch",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5"
    },
    {
        name_expert: "Queen's Gambit Declined, Semi-Tarrasch, 7.Bd3",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5 Nxd5"
    },
    {
        name_expert: "Queen's Gambit Declined Semi-Slav",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6"
    },
    {
        name_expert: "Queen's Gambit Declined Semi-Slav",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4"
    },
    {
        name_expert: "Queen's Gambit Declined Semi-Slav",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3"
    },
    {
        name_expert: "Queen's Gambit Declined Semi-Slav",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7"
    },
    {
        name_expert: "Queen's Gambit Declined Semi-Slav",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7"
    },
    {
        name_expert: "Queen's Gambit Declined Semi-Slav, Meran",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7"
    },
    {
        name_expert: "Queen's Gambit Declined Semi-Slav, Meran",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7"
    },
    {
        name_expert: "Queen's Gambit Declined, Anti-Neo-Orthodox Variation",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Lasker Defense",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Tartakower (Makagonov-Bondarevsky) System",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Tartakower",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox Defense",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox Defense",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox, Rubinstein Attack",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox, Rubinstein Attack, Main line",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox Defense, Bd3 line",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox Defense, Classical",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Queen's Gambit Declined, Orthodox Defense, Classical, 13.de",
        moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O"
    },
    {
        name_expert: "Neo-Grunfeld Defense",
        moves: "d4 Nf6 c4 g6 f3 d5"
    },
    {
        name_expert: "Neo-Grunfeld",
        moves: "d4 Nf6 c4 g6 g3 d5"
    },
    {
        name_expert: "Neo-Grunfeld, 5.cd, Main line",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 cxd5 Nxd5"
    },
    {
        name_expert: "Neo-Grunfeld, 5.Nf3",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3"
    },
    {
        name_expert: "Neo-Grunfeld, 6.cd Nxd5, 7.O-O",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Neo-Grunfeld, 6.cd Nxd5, 7.O-O c5, 8.dxc5",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Neo-Grunfeld, 6.cd Nxd5, 7.O-O Nb6",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Neo-Grunfeld, 6.O-O",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Neo-Grunfeld, 6.O-O c6",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Neo-Grunfeld, 6.O-O, Main line",
        moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O"
    },
    {
        name_expert: "Grunfeld",
        moves: "d4 Nf6 c4 g6 Nc3 d5"
    },
    {
        name_expert: "Grunfeld, Russian Variation",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Qb3"
    },
    {
        name_expert: "Grunfeld, 4.Bf4",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4"
    },
    {
        name_expert: "Grunfeld, Grunfeld Gambit",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O"
    },
    {
        name_expert: "Grunfeld, Grunfeld Gambit Accepted",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O"
    },
    {
        name_expert: "Grunfeld",
        moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5"
    },
    {
        name_expert: "Grunfeld, Exchange",
        moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3"
    },
    {
        name_expert: "Grunfeld, Exchange",
        moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3"
    },
    {
        name_expert: "Grunfeld, Spassky Variation, Main line, 10...cd, 11.cd",
        moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3"
    },
    {
        name_expert: "Grunfeld",
        moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3"
    },
    {
        name_expert: "Grunfeld",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3"
    },
    {
        name_expert: "Grunfeld, 5.Bg5",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bg5"
    },
    {
        name_expert: "Grunfeld, 5.Bf4",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bf4"
    },
    {
        name_expert: "Grunfeld, with Bf4 & e3",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bf4 O-O"
    },
    {
        name_expert: "Grunfeld",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3"
    },
    {
        name_expert: "Grunfeld",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O"
    },
    {
        name_expert: "Grunfeld, Russian Variation",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3"
    },
    {
        name_expert: "Grunfeld, Russian",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4"
    },
    {
        name_expert: "Grunfeld, Russian",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4"
    },
    {
        name_expert: "Grunfeld Defense, Smyslov",
        moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 Nf6 c4 e6"
    },
    {
        name_expert: "Catalan, Closed",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2"
    },
    {
        name_expert: "Catalan, Open, 5.Qa4",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4+"
    },
    {
        name_expert: "Catalan, Open",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4+ Nbd7"
    },
    {
        name_expert: "Catalan, Open, 5.Nf3",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3"
    },
    {
        name_expert: "Catalan, Open, Classical line",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7"
    },
    {
        name_expert: "Catalan, Closed, 5.Nf3",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3"
    },
    {
        name_expert: "Catalan, Closed",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Catalan, Closed",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Catalan, Closed",
        moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O"
    },
    {
        name_expert: "Queen's Pawn Game",
        moves: "d4 Nf6 c4 e6 Nf3"
    },
    {
        name_expert: "Bogo-Indian Defense",
        moves: "d4 Nf6 c4 e6 Nf3 Bb4+"
    },
    {
        name_expert: "Queen's Indian",
        moves: "d4 Nf6 c4 e6 Nf3 b6"
    },
    {
        name_expert: "Queen's Indian, 4.Nc3, Main line",
        moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 Bg5 h6"
    },
    {
        name_expert: "Queen's Indian",
        moves: "d4 Nf6 c4 e6 Nf3 b6 e3"
    },
    {
        name_expert: "Queen's Indian",
        moves: "d4 Nf6 c4 e6 Nf3 b6 g3"
    },
    {
        name_expert: "Queen's Indian",
        moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Bb4+"
    },
    {
        name_expert: "Queen's Indian",
        moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7"
    },
    {
        name_expert: "Queen's Indian, Old Main line, 7.Nc3",
        moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7"
    },
    {
        name_expert: "Queen's Indian, Old Main line, 9.Qxc3",
        moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7"
    },
    {
        name_expert: "Nimzo-Indian",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4"
    },
    {
        name_expert: "Nimzo-Indian, Three Knights",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3"
    },
    {
        name_expert: "Nimzo-Indian, Spielmann Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3"
    },
    {
        name_expert: "Nimzo-Indian, Spielmann",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6"
    },
    {
        name_expert: "Nimzo-Indian, Samisch",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3"
    },
    {
        name_expert: "Nimzo-Indian, Samisch",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5"
    },
    {
        name_expert: "Nimzo-Indian, Samisch",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5"
    },
    {
        name_expert: "Nimzo-Indian, Samisch Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O"
    },
    {
        name_expert: "Nimzo-Indian, Samisch Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O"
    },
    {
        name_expert: "Nimzo-Indian, Samisch",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O"
    },
    {
        name_expert: "Nimzo-Indian, Leningrad",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Bg5"
    },
    {
        name_expert: "Nimzo-Indian, Leningrad, Main line",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Bg5 h6 Bh4 c5"
    },
    {
        name_expert: "Nimzo-Indian, Classical",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2"
    },
    {
        name_expert: "Nimzo-Indian, Classical",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 Nc6"
    },
    {
        name_expert: "Nimzo-Indian, Classical, Noa Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5"
    },
    {
        name_expert: "Nimzo-Indian, Classical, Noa Variation, 5.cd ed",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 cxd5 exd5"
    },
    {
        name_expert: "Nimzo-Indian, Classical",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 a3"
    },
    {
        name_expert: "Nimzo-Indian, Classical",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 a3 Bxc3+"
    },
    {
        name_expert: "Nimzo-Indian, Classical, 4...c5",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5"
    },
    {
        name_expert: "Nimzo-Indian, Classical, Pirc Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5 dxc5 O-O"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3"
    },
    {
        name_expert: "Nimzo-Indian",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3 c5, 5.Ne2 (Rubinstein)",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5 Ne2"
    },
    {
        name_expert: "Nimzo-Indian, Fischer Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6"
    },
    {
        name_expert: "Nimzo-Indian, Fischer Variation, 5.Ne2",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Ne2"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Bronstein (Byrne) Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Ne2 Ba6"
    },
    {
        name_expert: "Nimzo-Indian",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3 O-O 5.Bd3",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3 O-O 5.Bd3 d5",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Botvinnik System",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3 O-O 5.Nf3, without ...d5",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Main line with ...b6",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Gligoric System",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Gligoric System, Bronstein Variation",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Main line with 7...Nc6",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Main line with 8...dc and 9...cd",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Main line with 8...Bxc3",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "Nimzo-Indian, 4.e3, Main line",
        moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5"
    },
    {
        name_expert: "King's Indian Defense",
        moves: "d4 Nf6 c4 g6"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3"
    },
    {
        name_expert: "King's Indian, Fianchetto",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3"
    },
    {
        name_expert: "King's Indian, Fianchetto, Panno Variation",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O"
    },
    {
        name_expert: "King's Indian, Fianchetto, Yugoslav System",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O"
    },
    {
        name_expert: "King's Indian, Fianchetto, Yugoslav, 7.O-O",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O"
    },
    {
        name_expert: "King's Indian, Fianchetto, Yugoslav Panno",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O"
    },
    {
        name_expert: "King's Indian, Fianchetto",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O"
    },
    {
        name_expert: "King's Indian, Fianchetto, Classical Variation, 8.e4",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O"
    },
    {
        name_expert: "King's Indian, Fianchetto, Classical Main line",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4"
    },
    {
        name_expert: "King's Indian, Makagonov System (5.h3)",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 h3"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 g3"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2"
    },
    {
        name_expert: "King's Indian, Averbakh, 6...c5",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O"
    },
    {
        name_expert: "King's Indian, Averbakh, Main line",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O"
    },
    {
        name_expert: "King's Indian, Four Pawns Attack",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O"
    },
    {
        name_expert: "King's Indian, Four Pawns Attack, with Be2 and Nf3",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O"
    },
    {
        name_expert: "King's Indian, Four Pawns Attack, Main line",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O"
    },
    {
        name_expert: "King's Indian, Samisch Variation",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3"
    },
    {
        name_expert: "King's Indian, Samisch",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch, double Fianchetto Variation",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch, Panno Main line",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch, Orthodox Variation",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch, Orthodox, 7.Nge2 c6",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch, Orthodox",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch, Orthodox, 7.d5 c6",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian, Samisch, Orthodox Main line",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian, Petrosian System",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian, Orthodox",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian, Orthodox, 7...Nbd7, 8.Re1",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian, Orthodox, 7...Nbd7, Main line",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian, Orthodox, Taimanov, 9.Ne1",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    },
    {
        name_expert: "King's Indian, Orthodox, Taimanov",
        moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O"
    }
]

for (i = 0; i < allChessOpenings.length; i++) {
    allChessOpenings[i].name_normal = allChessOpenings[i].name_expert
    allChessOpenings[i].date = "1999-02-22"
    allChessOpenings[i].num = -1
    allChessOpenings[i].chessable_link = "file:///C:/Users/Adam/Documents/+%20Chessle-Infinite/src/index.html" // TODO
    allChessOpenings[i].moves = allChessOpenings[i].moves.split(" ")
    if (allChessOpenings[i].moves.length < 10) {
        while (allChessOpenings[i].moves.length < 10) {
            if (allChessOpenings[i].moves.length % 2 === 0) {
                allChessOpenings[i].moves.push("Ke3")
            } else {
                allChessOpenings[i].moves.push("Ke7")
            }
        }
    }
}