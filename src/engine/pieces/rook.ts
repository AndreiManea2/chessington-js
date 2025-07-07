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
        const currentSquare = board.findPiece(this);

        const availableMoves: Square[] = [];

        const directions = [
            {row: 0, col: 1}, // right
            {row: 0, col: -1}, // left
            {row: 1, col: 0}, // down
            {row: -1, col: 0}, // up
        ];

        for (const direction of directions) {
            let row = currentSquare.row + direction.row;
            let col = currentSquare.col + direction.col;

            while(row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE) {
                const nextSquare = Square.at(row, col);
                availableMoves.push(nextSquare);
                row += direction.row;
                col += direction.col;
            }
        }

        return availableMoves;
    }
}
