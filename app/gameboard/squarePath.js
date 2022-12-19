import generateQueryConstructor from '../utils/utils.js';

export default class SquarePath {
    constructor() {
        generateQueryConstructor.call(this, ...arguments);
    }

    getSquarePathNodes(nodes) {
        const {
            board: { chessBoard },
        } = this;

        const pathSquares = nodes.map((node) => `[${node.replace(',', '-')}]`).slice(1, -1);
        const pathElements = [];
        console.log('📡 | file: squarePath.js:15 | SquarePath | getSquarePathNodes | pathSquares', pathSquares);

        for (const square of pathSquares) {
            const pathingSquare = chessBoard[square];
            pathingSquare.pathSquare = true;
            pathElements.push(pathingSquare);
        }
        return pathElements;
    }
}
