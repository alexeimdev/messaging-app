import React, { useState, useEffect } from 'react';

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
        async function fetchUsers() {
            const response = await fetch('/api/user');
            const responseJson = await response.json();
            setUsers(responseJson.users);
        }
    }, []);

    return (
        <div>
            <select>
                {users?.map(user => <option>{user.email}</option>)}
            </select>
        </div>
    )
}