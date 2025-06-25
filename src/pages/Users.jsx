import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router';

const Users = () => {
    
    /*
    1 Варіант отримання даних
    const [users, setUsers] = useState([]);

    useEffect(() => { 
        getUsers();
    }, []);

    const getUsers = async () => { 
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }*/

    const users = useLoaderData(); // данні з маршрута routes.js

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => <div key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link>   </div>)}
            
            <Outlet />
        </div>
    );
}

export default Users;
