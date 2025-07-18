import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from "../gameSettings";

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    protected getLinearMoves(board: Board, directions: { row: number, col: number }[]) {
        const currentSquare = board.findPiece(this);

        const availableMoves: Square[] = [];

        for (const direction of directions) {
            let row = currentSquare.row + direction.row;
            let col = currentSquare.col + direction.col;

            while(this.checkBounds(row, col)) {
                const nextSquare = Square.at(row, col);
                const pieceAtTarget = board.getPiece(nextSquare);

                if (!pieceAtTarget) {
                    availableMoves.push(nextSquare);
                } else {
                    if (pieceAtTarget.player !== this.player) {
                        if(pieceAtTarget.constructor.name !== 'King') {
                            availableMoves.push(nextSquare);
                        }
                    }

                    break;

                }

                row += direction.row;
                col += direction.col;
            }
        }

        return availableMoves;
    }

    protected checkBounds(row: number, col: number) {
        return row >= 0 && row < GameSettings.BOARD_SIZE && col >= 0 && col < GameSettings.BOARD_SIZE
    }
}
