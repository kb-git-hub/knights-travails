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
    constructor() {
        generateQueryConstructor.call(this, ...arguments);
    }

    buildGraphFromInput() {
        const { board } = this;
        const modifiedBoard = board.map((element) => element.replace(/[^\d]/g, '').split('').map(Number));
        console.log(modifiedBoard);
    }
}
