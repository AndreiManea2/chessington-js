import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);

        const availableMoves: Square[] = [];

        availableMoves.push(Square.at(currentSquare.row - 1, currentSquare.col - 1));
        availableMoves.push(Square.at(currentSquare.row - 1, currentSquare.col));
        availableMoves.push(Square.at(currentSquare.row - 1, currentSquare.col + 1));
        availableMoves.push(Square.at(currentSquare.row, currentSquare.col - 1));
        availableMoves.push(Square.at(currentSquare.row, currentSquare.col + 1));
        availableMoves.push(Square.at(currentSquare.row + 1, currentSquare.col - 1));
        availableMoves.push(Square.at(currentSquare.row + 1, currentSquare.col));
        availableMoves.push(Square.at(currentSquare.row + 1, currentSquare.col + 1));

        return availableMoves;
    }
}
