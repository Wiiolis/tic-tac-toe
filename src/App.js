import "./App.css";
import { useState } from "react";

function Square() {}

export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(idx) {
    const nextSquares = squares.slice();

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
      <div className="row">
        <div className="square" onClick={() => handleClick(0)}>
          {squares[0]}
        </div>
        <div className="square" onClick={() => handleClick(1)}>
          {squares[1]}
        </div>
        <div className="square" onClick={() => handleClick(2)}>
          {squares[2]}
        </div>
      </div>
      <div className="row">
        <div className="square" onClick={() => handleClick(3)}>
          {squares[3]}
        </div>
        <div className="square" onClick={() => handleClick(4)}>
          {squares[4]}
        </div>
        <div className="square" onClick={() => handleClick(5)}>
          {squares[5]}
        </div>
      </div>{" "}
      <div className="row">
        <div className="square" onClick={() => handleClick(6)}>
          {squares[6]}
        </div>
        <div className="square" onClick={() => handleClick(7)}>
          {squares[7]}
        </div>
        <div className="square" onClick={() => handleClick(8)}>
          {squares[8]}
        </div>
      </div>
    </div>
  );
}
