import React from "react";
import "./App.css";
import useCounter from "./hooks/Counter";
import useTimer from "./hooks/InputHook";

function App() {
  const {
    count,
    incrementLevel,
    decrementLevel,
    setIncrementLevel,
    setDecrementLevel,
    increment,
    decrement,
    reset,
  } = useCounter();

  const { time, start, stop, restart } = useTimer(60);

  return (
    <div className="center">
      <div className="App">
        <div className="count">
          <div className="dec">Count: {count}</div>
          <div className="dec">Increment Level: {incrementLevel}</div>
          <div className="dec">Decrement Level: {decrementLevel}</div>
        </div>

        <div className="Counter">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <input
            type="number"
            value={incrementLevel}
            onChange={(e) => setIncrementLevel(parseInt(e.target.value))}
          />
          <input
            type="number"
            value={decrementLevel}
            onChange={(e) => setDecrementLevel(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div>
      <div className="dec" style={{marginLeft:"170px"}}>Time: {time} seconds</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={restart}>Restart</button>
    </div>
    </div>
  );
}

export default App;
