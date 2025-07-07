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

        const availableMoves: Square[] = [];

        availableMoves.push(Square.at(currentSquare.col - 2, currentSquare.row - 1));
        availableMoves.push(Square.at(currentSquare.col + 2, currentSquare.row - 1));
        availableMoves.push(Square.at(currentSquare.col - 2, currentSquare.row + 1));
        availableMoves.push(Square.at(currentSquare.col + 2, currentSquare.row + 1));
        availableMoves.push(Square.at(currentSquare.col - 1, currentSquare.row + 2));
        availableMoves.push(Square.at(currentSquare.col + 1, currentSquare.row + 2));
        availableMoves.push(Square.at(currentSquare.col - 1, currentSquare.row - 2));
        availableMoves.push(Square.at(currentSquare.col + 1, currentSquare.row - 2));

        return availableMoves;
    }
}
