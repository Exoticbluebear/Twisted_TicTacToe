import { useState } from "react";
import useTicTacToe from "../hooks/use-tic-tac-toe.jsx";

function Tictactoe() {
  const [boardSize, setBoardSize] = useState(3); // State to manage the size of the board
  const { board, handleClick, getStatusMessage, resetGame, winningPattern } = useTicTacToe(); // Destructure the hook

  return (
    <>
      <div className="game">
        {/* Display the current status message (winner, turn, or draw) */}
        <div className="status">{getStatusMessage()}</div>

        <div className="board" style={{ display: 'grid', gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
          {/* Render each cell of the board */}
          {board.map((cell, index) => (
            <button
              className="cell" // CSS class for styling
              key={index} // Unique key for each cell
              onClick={() => handleClick(index)} // Handle click to mark X or O
              disabled={cell !== null} // Disable if the cell is already marked
              style={{
                backgroundColor: winningPattern && winningPattern.includes(index) ? 'transparent' : 'initial',
                width: '60px',
                height: '60px',
                fontSize: '24px',
                cursor: 'pointer',
                border: '1px solid black',
              }}
            >
              {cell} {/* Display the content of the cell */}
            </button>
          ))}
        </div>

        {/* Button to reset the game */}
        <button className="reset-button" onClick={resetGame}>
          RESET GAME
        </button>
      </div>

      {/* Uncomment the line below to add a button for instructions or help */}
      {/* <button className="learnMore">?</button> */}
    </>
  );
}

export default Tictactoe;
