import generateQueryConstructor from '../utils/utils.js';

export default class ColorPath {
    constructor() {
        generateQueryConstructor.call(this, arguments);
    }

    colorPath(nodes) {
        const {
            board: { chessBoard },
        } = this;

        const pathSquares = nodes.map((node) => `[${node.replace(',', '-')}]`);
        console.log(pathSquares);

        for (const square of pathSquares) {
        }
    }
}
