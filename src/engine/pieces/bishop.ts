import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const directions = [
            {row: 1, col: 1}, // right-up
            {row: 1, col: -1}, // left-up
            {row: -1, col: 1}, // right-down
            {row: -1, col: -1}, // left-down
        ];

        return this.getLinearMoves(board, directions);
    }
}
