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
        const { lightSquare, darkSquare } = settings;
        const squareColor = this.color === 'light' ? lightSquare : darkSquare;
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
            squareElement,
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
        const { startSquare, endSquare } = this.settings;
        const bgRegex = /^bg.{8}$/;

        if (this.startSquare) {
            squareElement.classList.forEach((className) => {
                if (bgRegex.test(className)) {
                    squareElement.classList.remove(className);
                }
            });
            squareElement.classList.add(`bg-${startSquare}`);
        } else if (this.endSquare) {
            squareElement.classList.forEach((className) => {
                if (bgRegex.test(className)) {
                    squareElement.classList.remove(className);
                }
            });
            squareElement.classList.add(`bg-${endSquare}`);
        }
    }

    resetCell() {
        this.startSquare = false;
        this.endSquare = false;
        this.renderSquareType();
    }
}
