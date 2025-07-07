import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        return {'col': currentSquare.col, 'row': this.player === Player.WHITE ? currentSquare.row + 1 : currentSquare.row - 1};
    }
}
