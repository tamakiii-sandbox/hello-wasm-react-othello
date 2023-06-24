import React, { useState, useEffect } from 'react';
import { Counter } from '../pkg/index';

function App() {
  const [counter, setCounter] = useState<Counter|null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const counter =  new Counter();
    setCounter(counter);
    setCount(counter.get_count());
  }, []);

  const increment = () => {
    if (counter) {
      counter.increment();
      setCount(counter.get_count());
    }
  };

  const decrement = () => {
    if (counter) {
      counter.decrement();
      setCount(counter.get_count());
    }
  };

  return (
    <div>
        <div>{count}</div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
