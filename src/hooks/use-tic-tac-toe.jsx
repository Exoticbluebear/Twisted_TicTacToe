import { useState } from "react";

// Function to initialize the game board
const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setboard] = useState(initialBoard()); // State for the game board
  const [isXNext, setIsXNest] = useState(true); // State to track whose turn it is

  // Winning patterns for the game
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Function to calculate the winner based on the current board
const calculateWinner = (currentBoard) => {
  for (let i = 0; i < WINNING_PATTERNS.length; i++) {
    const [a, b, c] = WINNING_PATTERNS[i];
    if (
      currentBoard[a] &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[a] === currentBoard[c]
    ) {
      return { winner: currentBoard[a], pattern: [a, b, c] }; // Return the winner (X or O) and the winning pattern
    }
  }
  return null; // No winner
};

// State to store the winning pattern
const [winningPattern, setWinningPattern] = useState(null);

// Function to handle cell clicks
const handleClick = (index) => {
  const winner = calculateWinner(board);
  if (winner || board[index]) return; // Ignore if there's a winner or the cell is occupied

  const newBoard = [...board]; // Copy the current board
  newBoard[index] = isXNext ? "X" : "O"; // Update the clicked cell
  setboard(newBoard); // Set the new board state
  setIsXNest(!isXNext); // Switch turns

  // Check for a winner after the move
  const newWinner = calculateWinner(newBoard);
  if (newWinner) {
    setWinningPattern(newWinner.pattern); // Store the winning pattern
  }
};

// Function to get the status message to display
const getStatusMessage = () => {
  const winner = calculateWinner(board);
  if (winner)
    return (
      <span style={{ color: "black", fontWeight: "bold" }}>
        Player {winner.winner} wins!!!
      </span>
    );
  if (!board.includes(null))
    return (
      <span style={{ color: "black", fontWeight: "bold" }}>
        It's a draw :|
      </span>
    );
  return (
    <span style={{ color: "black", fontWeight: "bold" }}>
      Player {isXNext ? "X" : "O"} turn...
    </span>
  );
};

// Rendering the board
return (
  <div>
    {board.map((cell, index) => (
      <div
        key={index}
        className="cell"
        onClick={() => handleClick(index)}
        style={{
          backgroundColor: winningPattern && winningPattern.includes(index) ? 'transparent' : 'initial',
        }}
      >
        {cell}
      </div>
    ))}
    {getStatusMessage()}
  </div>
);

  // Function to reset the game
  const resetGame = () => {
    setboard(initialBoard()); // Reset the board
    setIsXNest(true); // Set X to start again
  };

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
