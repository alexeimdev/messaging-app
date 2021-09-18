import React, { useState, useEffect } from 'react';
import styles from './Users.module.css';

export function Users() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        fetchUsers();

        async function fetchUsers() {
            const response = await fetch('/api/user');
            const users = await response.json();
            setUsers(users);
            setSelectedUser(users[0].email);
        }
    }, []);

    function handleSelectUserChange (e) {
        setSelectedUser(e.target.value);
    }

    return (
        <div className={styles.users}>
            <select onChange={handleSelectUserChange} className={styles.dropdown} >
                {users?.map(user => <option>{user.email}</option>)}
            </select>
            <h2>{selectedUser}</h2>
        </div>
    )
}