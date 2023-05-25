import "./App.css";
import { useState, useEffect } from "react";
import { getByTestId } from "@testing-library/react";

function Square({ value, changeValue }) {
  return (
    <>
      <div className={`square ${value}`} onClick={changeValue}>
        {value}
      </div>
    </>
  );
}

export default function App({ props }) {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");
  const [tie, setTie] = useState(false);

  useEffect(() => {
    getWinner();
  }, squares);

  function handleClick(idx) {
    const nextSquares = squares.slice();
    if (nextSquares[idx] || winner) return;

    if (xIsNext) {
      nextSquares[idx] = "x";
      setXIsNext(false);
    } else {
      nextSquares[idx] = "o";
      setXIsNext(true);
    }

    setSquares(nextSquares);

    if (!nextSquares.includes(null)) {
      setTie(true);
    }

    getWinner();
  }

  function handleGameRestart() {
    setXIsNext(true);
    setSquares(Array(9).fill(null));
    setWinner("");
    setTie(false);
  }

  function renderFinalText() {
    if (tie) {
      return <p>It's a Tie!</p>;
    } else if (winner) {
      return (
        <p>
          Winner is <span>{winner}</span>
        </p>
      );
    } else {
      return (
        <p>
          Current player: <span>{xIsNext ? "x" : "o"}</span>
        </p>
      );
    }
  }

  return (
    <div className="App">
      {renderFinalText()}

      <div className="boxBorder" />
      <div className="box">
        <div className={`gateClosed ${(winner || tie) && "gateOpened"}`}>
          <p onClick={handleGameRestart}>
            <img src={require("./refresh.png")} />
          </p>
        </div>
        {squares.map((square, idx) => {
          return (
            <Square value={squares[idx]} changeValue={() => handleClick(idx)} />
          );
        })}
      </div>
    </div>
  );

  function getWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return setWinner(squares[a]);
      }
    }
  }
}
