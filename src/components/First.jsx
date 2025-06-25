import React, { useReducer } from 'react';
import './First.css';
import counterReducer from '../reducers/counterReducer';

const First = () => {
    const [count, dispatch] = useReducer(counterReducer, 0);

    return (
        <>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            {count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'increment2', payload: 2 })}>+2</button>
        </>
        
    );
}

export default First;