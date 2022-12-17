import { boardConfig } from './app/config/board.config.js';
import Gameboard from './app/gameboard/board.js';

const board = new Gameboard(boardConfig);

board.build();
