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

        const queue = [{ node: start, path: [start] }];
        const visited = new Set(); // store visited nodes

        while (queue.length > 0) {
            const { node, path } = queue.shift();

            visited.add(node);

            if (node === end) return path;

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push({ node: neighbor, path: [...path, neighbor] });
                }
            }
        }
        return null;
    }
}
