import React from 'react';
import './First.css';

const First = () => {
    const title = 'Hello World';

    const authorized = true;
    const loading = true;

    const templateAuthorized = (
        <p>Authorized</p>
    );

    const templateUnauthorized = (
        <p>Unauthorized</p>
    );
    
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1 className="title">{title} { Math.random() }</h1>
            <p style={{ color: 'red' }}>Lorem, ipsum dolor.</p>
            {authorized ? <p>Authorized</p> : <p>Unauthorized</p>}
            {authorized && <p>Authorized</p>}
            {authorized ? templateAuthorized : templateUnauthorized}
        </>
        
    );
}

export default First;