import generateQueryConstructor from '../utils/utils.js';
/*

Inputs equal startSquare and endSquare 

all possible moves equal children in a tree

bfs for shortest path




 > knightMoves([3,3],[4,3])
  => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]




    */

export default class KnightGraph {
    constructor(board) {
        this.board = board.map((element) => element.replace(/[^\d]/g, '').split('').map(Number));
        this.numberofNodes = 0;
        this.adjacentList = {};
        this.buildVerticesFromBoard();
        this.addEdges();
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberofNodes++;
    }

    buildVerticesFromBoard() {
        this.board.forEach((square) => this.addVertex(square));
    }

    addEdges() {
        this.board.forEach((square) => {
            const [row, col] = square; // loop through this board
            const adjKey = [row, col].join(',');

            let result = [
                [row + 2, col + 1],
                [row + 1, col + 2],
                [row - 1, col + 2],
                [row - 2, col + 1],
                [row - 2, col - 1],
                [row - 1, col - 2],
                [row + 1, col - 2],
                [row + 2, col - 1],
            ];
            result = result.filter((item) => item[0] <= 8 && item[0] >= 1 && item[1] <= 8 && item[1] >= 1);
            this.adjacentList[adjKey] = result;
        });
    }

    bfs(source, destination) {
        const { graph } = this.adjacentList;
        console.log(source, destination);
    }
}
