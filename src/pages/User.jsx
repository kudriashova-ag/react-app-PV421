import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {

    const user = useLoaderData();

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
}

export default User;
