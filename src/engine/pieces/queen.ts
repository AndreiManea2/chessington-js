import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const horizontalDirections = [
            {row: 0, col: 1}, // right
            {row: 0, col: -1}, // left
            {row: 1, col: 0}, // down
            {row: -1, col: 0}, // up
        ];

        const horizontalMoves = this.getLinearMoves(board, horizontalDirections);

        const diagonalDirections = [
            {row: 1, col: 1}, // right-up
            {row: 1, col: -1}, // left-up
            {row: -1, col: 1}, // right-down
            {row: -1, col: -1}, // left-down
        ];

        const diagonalMoves = this.getLinearMoves(board, diagonalDirections);

        return horizontalMoves.concat(diagonalMoves);

    }
}
