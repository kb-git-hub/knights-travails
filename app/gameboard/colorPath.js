import generateQueryConstructor from '../utils/utils.js';

export default class ColorPath {
    constructor() {
        generateQueryConstructor.call(this, ...arguments);
    }

    getSteps(nodes) {
        const {
            board: { chessBoard },
        } = this;

        const pathSquares = nodes.map((node) => `[${node.replace(',', '-')}]`).slice(1, -1);
        const pathElements = [];

        console.log(pathSquares);
        for (const square of pathSquares) {
            const pathingSquare = chessBoard[square];
            pathingSquare.pathSquare = true;

            pathingSquare.renderPathSquare();
        }
    }
}
