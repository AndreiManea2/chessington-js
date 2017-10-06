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

        // Always can move one square forward
        const oneStep = Square.at(currentSquare.row + direction, currentSquare.col);
        availableMoves.push(oneStep);

        // If it hasn't moved yet, it can also move two squares forward
        if (!this.hasMoved) {
            const twoStep = Square.at(currentSquare.row + 2 * direction, currentSquare.col);
            availableMoves.push(twoStep);
        }

        return availableMoves;
    }
}
