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
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
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

        const diagonalOffsets = [-1, 1];
        for (const colOffset of diagonalOffsets) {
            const targetRow = currentSquare.row + direction;
            const targetCol = currentSquare.col + colOffset;

            if(this.checkBounds(targetRow, targetCol)) {
                const targetSquare = Square.at(targetRow, targetCol);
                const piece = board.getPiece(targetSquare);

                if (piece && piece.player !== this.player && piece.constructor.name !== 'King') {
                    availableMoves.push(targetSquare);
                }
            }
        }

        availableMoves.push(...this.getEnPassantMoves(board, currentSquare));

        return availableMoves;
    }

    private getEnPassantMoves(board: Board, currentSquare: Square) {
        const direction = this.player === Player.WHITE ? 1 : -1;
        const moves: Square[] = [];

        const lastMove = board.lastMove;
        if (!lastMove) return moves;

        const {from, to, piece} = lastMove;

        if (
            piece instanceof Pawn &&
            piece.player !== this.player &&
            Math.abs(from.row - to.row) === 2 &&
            to.row === currentSquare.row &&
            Math.abs(to.col - currentSquare.col) === 1
        ) {
            const enPassantSquare = Square.at(currentSquare.row + direction, to.col);
            moves.push(enPassantSquare);
        }

        return moves;
    }
}
