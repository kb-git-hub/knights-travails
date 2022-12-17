export default function renderSquareEvents() {
    renderHoverEvent.call(this);
    dragDropEvents.call(this);
}

function renderHoverEvent() {
    const { squareElement } = this;
    squareElement.addEventListener('mouseenter', () => {
        if (this.startSquare || this.endSquare) {
            squareElement.classList.add('cursor-grab');
        }
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
}

function dontAllowDrag() {
    return !this.startSquare && !this.endSquare;
}
