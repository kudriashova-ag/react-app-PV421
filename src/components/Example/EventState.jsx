import React, { useState } from 'react';

let count = 1

const EventState = () => {
  // 1. зміна стану
  // 2. зміна props
  // оновлення компонента
    const [count, setCount] = useState(0);
    const increment = () => setCount( count + 1)
    const decrement = () => setCount(count - 1)

    return (
      <div>
        <h1>Event State</h1>

        <button onClick={decrement}>-</button>
            {count}
        <button onClick={increment}>+</button>
            
      </div>
    );
}

export default EventState;
