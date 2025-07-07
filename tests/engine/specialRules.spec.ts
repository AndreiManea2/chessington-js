import 'chai/register-should';
import Board from '../../src/engine/board';
import Pawn from '../../src/engine/pieces/pawn';
import Player from '../../src/engine/player';
import Square from '../../src/engine/square';

describe('Special Rules', () => {
    let board : Board;
    beforeEach(() => {
        board = new Board();
    });

    it('En Passant Rule', () => {
        const whitePawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(4, 4), whitePawn);

        const blackPawn = new Pawn(Player.BLACK);
        board.setPiece(Square.at(6, 5), blackPawn);

        board.currentPlayer = Player.BLACK;

        board.movePiece(Square.at(6, 5), Square.at(4, 5));

        const moves = whitePawn.getAvailableMoves(board);

        moves.should.deep.include(Square.at(5, 5));
    });
});