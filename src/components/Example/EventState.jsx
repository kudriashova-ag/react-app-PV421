import React, { useState } from 'react';

const EventState = () => {
    // стан, ф-ція для зміни стану
    // при зміні стану викликається рендер компоненту
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const increment = () => setCount( count + 1)
    const decrement = () => setCount(count - 1)

    return (
      <div>
        <h1>Event State</h1>
        
        <button onClick={() => setVisible(!visible)}>Show</button>
        {visible && <div>Lorem, ipsum dolor.</div>}

        <hr />

        <button onClick={decrement}>-</button>
            {count}
        <button onClick={increment}>+</button>
            
      </div>
    );
}

export default EventState;
