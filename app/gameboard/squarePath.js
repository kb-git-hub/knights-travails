import generateQueryConstructor from '../utils/utils.js';

export default class SquarePath {
    constructor() {
        generateQueryConstructor.call(this, ...arguments);
        this.pathElements = [];
    }

    get pathSquares() {
        const {
            board: { chessBoard },
        } = this;

        return Object.values(chessBoard).filter((square) => square.pathSquare);
    }

    getSquarePathNodes(nodes) {
        const {
            board: { chessBoard },
        } = this;

        // this gets full path from BFS and returns intermediate steps as pathSquares
        this.clearPathSquares();

        const pathSquares = nodes.map((node) => `[${node.replace(',', '-')}]`).slice(1, -1);

        pathSquares.forEach((square) => {
            const pathingSquare = chessBoard[square];
            pathingSquare.pathSquare = true;
            this.pathElements.push(pathingSquare); // now this.path is populated
        });

        this.renderPathSquare();
    }

    renderPathSquare() {
        let pathNum = 1;
        this.pathElements.forEach((square) => {
            const { squareElement } = square;
            const { pathSquareColor } = square.settings;
            squareElement.classList.add(`bg-${pathSquareColor}`);
            squareElement.textContent = pathNum;
            pathNum++;
        });
    }

    clearPathSquares() {
        const activeSquares = this.pathSquares;
        activeSquares.forEach((square) => {
            const {
                squareElement,
                settings: { pathSquareColor },
            } = square;
            squareElement.classList.remove(`bg-${pathSquareColor}`);
            squareElement.textContent = '';
            square.pathSquare = false;
        });
    }
}
