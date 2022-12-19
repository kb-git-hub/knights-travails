import generateQueryConstructor from '../utils/utils.js';
import renderSquareEvents from './square.event-methods.js';

export default class Square {
    constructor() {
        generateQueryConstructor.call(this, ...arguments);
    }

    get position() {
        return `[${this.row}-${this.col}]`;
    }

    render() {
        this.renderHTMLElement();
        this.renderHTMLStyling();
        this.renderAttributes();
        this.renderSquareType();
        this.renderStartEndSquares();
        renderSquareEvents.call(this);
    }

    renderHTMLElement() {
        const {
            board: { boardElement },
        } = this;

        const squareElement = document.createElement('div');
        squareElement.setAttribute('position', this.position);
        boardElement.append(squareElement);

        this.squareElement = squareElement;
    }

    renderHTMLStyling() {
        const { squareElement, squareSize, settings } = this;
        const { lightSquareColor, darkSquareColor } = settings;
        const squareColor = this.color === 'light' ? lightSquareColor : darkSquareColor;
        const htmlStyle = {
            height: `h-[${squareSize}px]`,
            width: `w-[${squareSize}px]`,
            backgroundColor: `bg-${squareColor}`,
            float: `float-left`,
            outline: `outline`,
            outlineThickness: `outline-4`,
            outlineColor: `outline-sky-900`,
        };

        squareElement.classList.add(
            htmlStyle.height,
            htmlStyle.width,
            htmlStyle.backgroundColor,
            htmlStyle.float,
            htmlStyle.outline,
            htmlStyle.outlineThickness,
            htmlStyle.outlineColor
        );
    }

    renderAttributes() {
        const {
            board: { squareCount },
        } = this;
        this.startSquare = this.position === `[1-1]`;
        this.endSquare = this.position === `[${squareCount}-${squareCount}]`;
    }

    renderSquareType() {
        const { squareElement } = this;

        squareElement.classList[this.startSquare ? 'add' : 'remove']('startSquare');
        squareElement.classList[this.endSquare ? 'add' : 'remove']('endSquare');
    }

    renderStartEndSquares() {
        const { squareElement } = this;
        const { startSquareColor, endSquareColor } = this.settings;

        if (this.startSquare) {
            this.resetBg(squareElement);
            squareElement.classList.add(`bg-${startSquareColor}`);
            squareElement.setAttribute('draggable', true);
        } else if (this.endSquare) {
            this.resetBg(squareElement);
            squareElement.classList.add(`bg-${endSquareColor}`);
            squareElement.setAttribute('draggable', true);
        } else squareElement.removeAttribute('draggable');
    }

    resetSquare() {
        this.startSquare = false;
        this.endSquare = false;
        this.renderSquareType();
    }

    resetBg() {
        const { squareElement } = this;
        const bgRegex = /^bg/;
        squareElement.classList.forEach((className) => {
            if (bgRegex.test(className)) {
                squareElement.classList.remove(className);
            }
        });
    }

    colorPath(nodes) {
        const {
            board: { chessBoard },
        } = this;

        console.log(chessBoard);
        console.log(chessBoard[nodes[0]]);
    }
}
