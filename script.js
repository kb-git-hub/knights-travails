import { boardConfig } from './app/config/board.config.js';
import Gameboard from './app/gameboard/board.js';
import KnightGraph from './app/graph/graph.js';

const board = new Gameboard(boardConfig);
board.build();

const knightGraph = new KnightGraph({ board: Object.keys(board.chessBoard) });
knightGraph.buildGraphFromInput();
