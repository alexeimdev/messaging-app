import React, { useState, useEffect } from 'react';
import styles from './Users.module.scss';

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();

        async function fetchUsers() {
            const response = await fetch('/api/user');
            const users = await response.json();
            setUsers(users);
        }
    }, []);

    return (
        <div className={styles.users}>
            <select className={styles.dropdown}>
                {users?.map(user => <option>{user.email}</option>)}
            </select>
            <div>{users.length} users</div>
        </div>
    )
}