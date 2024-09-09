import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
const [gameBoard, setGameBoard] = useState(initialGameBoard);

function handleSelectSquare(rowIndex, colIndex) {
  // state that depends on objects or arrays should be updated in an immutable way
  setGameBoard((prevGameBoard)=> {
    const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    updatedBoard[rowIndex][colIndex] = 'X';
    return updatedBoard;
  });
}
 
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

/** why we use a second spread ([...innerArray]) ?

The inner spread operator ([...innerArray]) creates a shallow copy of each inner array (each row in the game board). Without this, if you modified an element in the copied array, it would still affect the original inner arrays because arrays are reference types.
This step ensures that even if you modify a specific square in the game board, only the new copy of that row is modified, not the original one.
 * 
 */