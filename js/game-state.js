let game = {
    score: 0,
    isRunning: false,
    player: {},
    enemy: {},
    board: null
};

// setup the board
const __ = 0;
const P1 = 1;
const P2 = 2;
const SPONGE = 3;
const WALL = 4;

const ROWS = 6;
const COLS = 6;