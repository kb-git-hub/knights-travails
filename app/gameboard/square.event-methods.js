import SquarePath from './squarePath.js';

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

        this.renderAfterDrop();
        board.draggedSquare.renderAfterDrop();

        // find and resest previous path
        // const pathingSquares = board.getPathingSquares();
        // board.resetPathingSquare(pathingSquares);

        const squarePath = new SquarePath({ board });
        const squarePathNodes = squarePath.getSquarePathNodes(board.runBFS());
        console.log(
            '📡 | file: square.event-methods.js:47 | squareElement.addEventListener | squarePath',
            squarePathNodes
        );
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
