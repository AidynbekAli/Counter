import { useState } from 'react';

 function useCounter() {
  const [count, setCount] = useState(0);
  const [incrementLevel, setIncrementLevel] = useState(1);
  const [decrementLevel, setDecrementLevel] = useState(1);

  const increment = () => setCount(count + incrementLevel);
  const decrement = () => setCount(count - decrementLevel);
  const reset = () => setCount(0);

  return {
    count,
    incrementLevel,
    decrementLevel,
    setIncrementLevel,
    setDecrementLevel,
    increment,
    decrement,
    reset,
  };
}

export default useCounter