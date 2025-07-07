import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings'

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const directions = [
            {row: 0, col: 1}, // right
            {row: 0, col: -1}, // left
            {row: 1, col: 0}, // down
            {row: -1, col: 0}, // up
        ];

        return this.getLinearMoves(board, directions);
    }
}
