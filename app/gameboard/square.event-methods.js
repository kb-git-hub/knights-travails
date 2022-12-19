import ColorPath from './colorPath.js';

export default function renderSquareEvents() {
    renderHoverEvent.call(this);
    dragDropEvents.call(this);
}

function renderHoverEvent() {
    const { squareElement } = this;
    squareElement.addEventListener('mouseenter', () => {
        if (this.startSquare || this.endSquare) squareElement.classList.add('cursor-grab');
        else squareElement.classList.remove('cursor-grab');
    });
}

function dragDropEvents() {
    const { board, squareElement } = this;
    squareElement.addEventListener('dragstart', (e) => {
        if (dontAllowDrag.call(this)) {
            e.preventDefault();
            return;
        }
        board.draggedSquare = this;
    });

    squareElement.addEventListener('dragover', (e) => {
        if (dontAllowDrop.call(this)) return;
        e.preventDefault();
    });

    squareElement.addEventListener('drop', () => {
        this.resetSquare();
        this.startSquare = board.draggedSquare.startSquare;
        this.endSquare = board.draggedSquare.endSquare;
        this.renderSquareType();
        board.draggedSquare.resetSquare();

        this.resetBGColor();
        this.renderHTMLStyling();
        this.renderStartEndSquares();

        board.draggedSquare.resetBGColor();
        board.draggedSquare.renderHTMLStyling();
        board.draggedSquare.renderStartEndSquares();

        // find and resest previous path
        const pathingSquares = board.getPathingSquares();
        board.resetPathingSquare(pathingSquares);

        const colorPath = new ColorPath({ board });
        colorPath.getSteps(board.runBFS());
    });
}

function dontAllowDrag() {
    return !this.startSquare && !this.endSquare;
}

function dontAllowDrop() {
    const { board, squareElement } = this;
    if (board.draggedSquare.squareElement === squareElement) return true;
    if (board.draggedSquare.startSquare && this.endSquare) return true;
    if (board.draggedSquare.endSquare && this.startSquare) return true;
}
