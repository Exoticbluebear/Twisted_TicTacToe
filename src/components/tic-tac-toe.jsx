import { useState } from "react";
import useTicTacToe from "../hooks/use-tic-tac-toe";

const Tictactoe: React.FC = () => {
  const [boardSize, setBoardSize] = useState<number>(3); 
  const {board, handleClick, getStatusMessage, resetGame, winningPattern,} = useTicTacToe() as {
    board: (string | null)[];
    handleClick: (index: number) => void;
    getStatusMessage: () => string;
    resetGame: () => void;
    winningPattern: number[] | null;
  };

  return (
    <>
      <div className="game">
        <div className="status">{getStatusMessage()}</div>
        <div
          className="board"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          }}
        >
          {board.map((cell, index) => (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={cell !== null}
              style={{
                backgroundColor:
                  winningPattern && winningPattern.includes(index)
                    ? 'transparent'
                    : 'initial',
                width: '60px',
                height: '60px',
                fontSize: '24px',
                cursor: 'pointer',
                border: '1px solid black',
              }}
            >
              {cell}
            </button>
          ))}
        </div>

        <button className="reset-button" onClick={resetGame}>
          RESET GAME!
        </button>
      </div>

      {/* <button className="learnMore">?</button> */}
    </>
  );
};

export default Tictactoe;
