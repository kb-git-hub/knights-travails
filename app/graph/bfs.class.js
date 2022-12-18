export default class BFS {
    constructor(gameBoard, graph) {
        this.gameBoard = gameBoard;
        this.graph = graph;
    }

    get startSquare() {
        const squareValues = Object.values(this.gameBoard.chessBoard);
        const target = squareValues.find((square) => square.startSquare);
        return [target.row, target.col];
    }

    get endSquare() {
        const squareValues = Object.values(this.gameBoard.chessBoard);
        const target = squareValues.find((square) => square.endSquare);
        return [target.row, target.col];
    }

    findShortestPath() {
        // console.log(this.gameBoard.chessBoard);
        // console.log(this.board.chessBoard);
        // console.log(this.board, this.graph, this.source, this.destination);
        console.log(this.startSquare, this.endSquare);
    }
}

/*
Copy code
function breadthFirstSearch(graph, source, destination) {
  // create a queue and add the source node
  let queue = [source];

  // create a map to store the path taken to reach each node
  let path = new Map();
  path.set(source, [source]);

  // create a set to store visited nodes
  let visited = new Set();

  // while the queue is not empty
  while (queue.length > 0) {
    // get the next node from the queue
    let node = queue.shift();

    // if the node has not been visited
    if (!visited.has(node)) {
      // mark the node as visited
      visited.add(node);

      // if the node is the destination node, return the path
      if (node === destination) {
        return path.get(node);
      }

      // add the node's neighbors to the queue
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          // update the path for the neighbor to include the path to the current node plus the neighbor
          path.set(neighbor, path.get(node).concat(neighbor));
        }
      }
    }
  }

  // if the destination was not reached, return null
  return null;
}
This function takes in a graph (represented as an adjacency list), a source node, and a destination node, and returns an array representing the shortest path from the source to the destination, or null if no path was found.

To use this function, you will need to have a graph data structure represented as an object, where the keys are the nodes in the graph and the values are arrays of the node's neighbors.

For example, given the following graph:

Copy code
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};
You can find the shortest path from node A to node F by calling:

Copy code
const shortestPath = breadthFirstSearch(graph, 'A', 'F');
The output of this function would be:

Copy code
['A', 'C', 'F']
I hope this helps! Let 

*/
