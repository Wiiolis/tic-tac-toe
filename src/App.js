import "./App.css";
import { useState } from "react";

function Square({ value, changeValue }) {
  return (
    <>
      <div className="square" onClick={changeValue}>
        {value}
      </div>
    </>
  );
}

export default function App({ props }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(idx) {
    const nextSquares = squares.slice();
    if (nextSquares[idx]) return;

    if (xIsNext) {
      nextSquares[idx] = "x";
      setXIsNext(false);
    } else {
      nextSquares[idx] = "o";
      setXIsNext(true);
    }

    return setSquares(nextSquares);
  }

  return (
    <div className="App">
      <p>Current player: {xIsNext ? "x" : "o"}</p>
      <div className="box">
        {squares.map((square, idx) => {
          return (
            <Square value={squares[idx]} changeValue={() => handleClick(idx)} />
          );
        })}
      </div>
    </div>
  );
}
