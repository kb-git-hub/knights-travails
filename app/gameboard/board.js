import { returnBoardDims } from '../config/board.config.js';
import { squareConfig } from '../config/square.config.js';
import generateQueryConstructor from '../utils/utils.js';
import Square from './square.class.js';

export default class Gameboard {
    constructor() {
        generateQueryConstructor.call(this, ...arguments);
    }

    get boardElement() {
        return document.querySelector(this.boardSelector);
    }

    build() {
        this.buildBoardLayout();
        this.buildBoardSquares();
    }

    buildBoardLayout() {
        const { boardElement } = this;
        const { innerWidth, innerHeight } = window;

        this.boardDimensions = Math.min(innerWidth, innerHeight);
        const dims = returnBoardDims.call(this);

        boardElement.classList.add(dims.height, dims.width);
    }

    buildBoardSquares() {
        this.chessBoard = {};
        this.squareCount = 3;

        const squareSize = Math.floor(this.boardDimensions / this.squareCount);

        for (let row = this.squareCount; row >= 1; row--) {
            for (let col = 1; col <= this.squareCount; col++) {
                const square = new Square({ board: this, row, col, squareSize, ...squareConfig });
                if ((row + col) % 2 === 0) square.color = 'dark';
                else square.color = 'light';
                square.render();
                this.chessBoard[square.position] = square;
            }
        }
    }
}
