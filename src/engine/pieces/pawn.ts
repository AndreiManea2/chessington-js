import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    private hasMoved: boolean = false;

    public constructor(player: Player) {
        super(player);
    }

    public moveTo(board: Board, newSquare: Square) {
        super.moveTo(board, newSquare);
        this.hasMoved = true;
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const direction = this.player === Player.WHITE ? 1 : -1;

        const availableMoves: Square[] = [];

        //Can move one square forward if no piece is blocking and if it is in bounds
        if (this.checkBounds(currentSquare.row + direction, currentSquare.col)) {
            const oneStep = Square.at(currentSquare.row + direction, currentSquare.col);

            if(!board.getPiece(oneStep)) {
                availableMoves.push(oneStep);

                // If it hasn't moved yet, the square is not blocked and in bounds, it can also move two squares forward
                if (!this.hasMoved) {
                    if (this.checkBounds(currentSquare.row + 2 * direction, currentSquare.col)) {
                        const twoStep = Square.at(currentSquare.row + 2 * direction, currentSquare.col);

                        if(!board.getPiece(twoStep)) {
                            availableMoves.push(twoStep);
                        }
                    }
                }
            }
        }

        return availableMoves;
    }
}
