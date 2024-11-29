import { useState, useEffect } from "react";

// Function to initialize the game board
const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setboard] = useState(initialBoard()); // State for the game board
  const [isXNext, setIsXNext] = useState(true); // State to track whose turn it is
  const [winningCells, setWinningCells] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [draw, setDraw] = useState(false);

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
    for (let pattern of WINNING_PATTERNS) {
      const [a, b, c] = pattern;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { winner: currentBoard[a], pattern }; // Return the winner (X or O)
      }
    }
    return { winner: null, pattern: [] }; // No winner
  };

  //Draw inside getStatusMessage was too much rendering
  useEffect(() => {
    const { winner } = calculateWinner(board);
    if (!winner && !board.includes(null)) {
      setDraw(true);
    }
  }, [board]);

  // Function to handle cell clicks
  const handleClick = (index) => {
    setIsClicked(true);
    const { winner } = calculateWinner(board);
    if (winner || board[index]) return; // Ignore if there's a winner or the cell is occupied

    const newBoard = [...board]; // Copy the current board
    newBoard[index] = isXNext ? "X" : "O"; // Update the clicked cell
    setboard(newBoard); // Set the new board state

    const { winner: newWinner, pattern } = calculateWinner(newBoard); // Recalculate winner
    if (newWinner) {
      setWinningCells(pattern); // Update winning cells if there's a winner
    }

    setIsXNext(!isXNext); // Switch turns
  };

  // Function to get the status message to display
  const getStatusMessage = () => {
    const { winner } = calculateWinner(board);
    if (winner)
      return (
        <span style={{ color: "black", fontWeight: "bold" }}>
          Player {winner} wins!!!
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

  // Function to reset the game
  const resetGame = () => {
    setboard(initialBoard()); // Reset the board
    setIsXNext(true); // Set X to start again
    setWinningCells([]); // Clear winning cells
    setDraw(false);
  };

  return {
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
    winningCells,
    isClicked,
    draw,
  };
};

export default useTicTacToe;
