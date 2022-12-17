const boardConfig = {
    boardSelector: '#gameboard',
    // settings: {
    //     border: `border-[2px]`,
    //     borderColor: `border-sky-800`,
    // },
};

function returnBoardDims() {
    return {
        height: `h-[${this.boardDimensions}px]`,
        width: `w-[${this.boardDimensions}px]`,
    };
}

export { boardConfig, returnBoardDims };
