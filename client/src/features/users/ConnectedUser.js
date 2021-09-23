import React, { useState } from 'react';
import styles from './ConnectedUser.module.scss';

export function ConnectedUser(props) {

    function handleSelectUser(e) {
        props.onSelectUser(e.target.value);
    }

    return (
        <form className={styles.connectedUser}>
            {props.users?.map(user =>
                <div className={styles.userWrapper}>
                    <input type="radio" id={user} name="user" value={user} onInput={handleSelectUser} className={styles.radioInput} />
                    <label htmlFor={user}>{user}</label>
                </div>
            )}
        </form>
    )
}