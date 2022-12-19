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
        const start = this.startSquare.join();
        const end = this.endSquare.join();
        const { graph } = this;

        const queue = [start];

        const path = new Map();
        path.set(start, [start]); // store path take to reach each node

        const visited = new Set(); // store visited nodes

        while (queue.length > 0) {
            const node = queue.shift();

            if (!visited.has(node)) {
                visited.add(node);

                if (node === end) {
                    return path.get(node);
                }

                for (const neighbor of graph[node]) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);

                        path.set(neighbor, path.get(node).concat(neighbor));
                    }
                }
            }
        }
        return visited;
        return null;
    }
}
