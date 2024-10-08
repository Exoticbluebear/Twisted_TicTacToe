# Tic Tac Toe Game

## Overview

This is a simple Tic Tac Toe game built with React. The game allows two players to take turns marking their spots on a 3x3 grid. Players need to remember their choices as the game does not display their symbols (X or O) after a turn until the game is over.

## Features

- **Dynamic Game Board**: The board is set to a default size of 3x3 but can be easily adjusted for different sizes in future enhancements.
- **Turn Management**: Players take turns placing their marks on the board.
- **Winner Calculation**: The game checks for a winner after every move, and displays a message when a player wins or if the game ends in a draw.
- **Reset Game**: Players can reset the game to start fresh at any time.

## Key Implementation Details

### Component Structure

1. **`useTicTacToe` Hook**: 
   - Manages the state of the game, including the board and whose turn it is.
   - Contains logic for calculating the winner and handling player moves.

2. **`Tictactoe` Component**:
   - Renders the game interface, including the board, status messages, and reset button.
   - Uses the `useTicTacToe` hook to manage game state and logic.

### Player Interaction

- **Memory Challenge**: 
  - Once a player makes a move (by clicking a cell), their chosen mark (X or O) is not displayed after the move. This means players must remember where they placed their marks in order to strategize and win.
  - The game emphasizes memory and strategy, as players cannot see their marks once they make a choice, adding a unique twist to the traditional gameplay.

### Styling

- The game features a vibrant color scheme with a gradient background using SCSS variables for easy theming.
- The game board and cells are styled for visual appeal, with hover effects to enhance the user experience.

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

### Usage

- Players take turns clicking on the cells to mark their spots.
- After a player clicks on a cell, they must remember their choice to strategize their next move.
- The game will display a message when a player wins or if the game ends in a draw.
- Use the "RESET GAME" button to start a new game at any time.

## Conclusion

This Tic Tac Toe game is a fun and interactive way for players to challenge each other while exercising their memory. The unique twist of not displaying players' marks after their turn adds an additional layer of strategy to the classic game. Enjoy playing!


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
