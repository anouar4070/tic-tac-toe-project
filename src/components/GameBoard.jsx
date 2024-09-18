

export default function GameBoard({ onSelectSquare, board }) {
  

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

/** why we use a second spread operator ([...innerArray]) ?

The inner spread operator ([...innerArray]) creates a shallow copy of each inner array (each row in the game board). Without this, if you modified an element in the copied array, it would still affect the original inner arrays because arrays are reference types.
This step ensures that even if you modify a specific square in the game board, only the new copy of that row is modified, not the original one.
 * 
 */
