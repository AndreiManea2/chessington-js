import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);

        const possibleMoves = [
            Square.at(currentSquare.row - 2, currentSquare.col - 1),
            Square.at(currentSquare.row + 2, currentSquare.col - 1),
            Square.at(currentSquare.row - 2, currentSquare.col + 1),
            Square.at(currentSquare.row + 2, currentSquare.col + 1),
            Square.at(currentSquare.row - 1, currentSquare.col + 2),
            Square.at(currentSquare.row + 1, currentSquare.col + 2),
            Square.at(currentSquare.row - 1, currentSquare.col - 2),
            Square.at(currentSquare.row + 1, currentSquare.col - 2)
        ]

        const availableMoves: Square[] = [];

        for (const move of possibleMoves) {
            const { row, col } = move;

            if (this.checkBounds(row, col)) {
                const pieceAtTarget = board.getPiece(move);

                if (!pieceAtTarget) {
                    availableMoves.push(move);
                } else if(pieceAtTarget.player !== this.player && pieceAtTarget.constructor.name !== 'King') {
                    availableMoves.push(move);
                }
            }
        }

        return availableMoves;
    }
}
