import { useState } from "react";
import useTicTacToe from "../hooks/use-tic-tac-toe.jsx";

function Tictactoe() {
  const [boardSize, setBoardSize] = useState(3); // State to manage the size of the board
  const {
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
    winningCells,
  } = useTicTacToe(); // Destructure the hook

  return (
    <>
      <div className="game">
        {/* Display the current status message (winner, turn, or draw) */}
        <div className="status">{getStatusMessage()}</div>

        <div className="board">
          {/* Render each cell of the board */}
          {board.map((b, index) => {
            return (
              <button
                className="cell" // CSS class for styling
                key={index} // Unique key for each cell
                onClick={() => handleClick(index)} // Handle click to mark X or O
                disabled={b !== null} // Disable if the cell is already marked
                style={{
                  backgroundColor: winningCells.includes(index)
                    ? "lightgreen"
                    : "",
                }}
              >
                {b} {/* Display the content of the cell */}
              </button>
            );
          })}
        </div>

        {/* Button to reset the game */}
        <button className="reset-button" onClick={resetGame}>
          RESET GAME
        </button>
      </div>

      {/* Uncomment the line below to add a button for instructions*/}
      {/* <button className="learnMore">?</button> */}
    </>
  );
}

export default Tictactoe;
