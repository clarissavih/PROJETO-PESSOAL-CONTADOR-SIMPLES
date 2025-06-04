import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 data-testid="counter-value">Contador: {count}</h2>
      <button id="increment-button" onClick={() => setCount(count + 1)} data-testid="increment-button">
        Incrementar
      </button>
      <button id="decrement-button" onClick={() => setCount(count - 1)} data-testid="decrement-button">
        Decrementar
      </button>
      <button id="reset-button" onClick={() => setCount(0)} data-testid="reset-button">
        Resetar
      </button>
    </div>
  );
}

export default Counter;

