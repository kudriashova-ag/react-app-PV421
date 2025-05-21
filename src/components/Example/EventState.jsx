import React from 'react';

const EventState = () => {
    const clickHandler = (message) => console.log(message);


    return (
        <div>
            <h1>Event State</h1>
            
            <button onClick={() => clickHandler('hello')}>Click</button>
        </div>
    );
}

export default EventState;
