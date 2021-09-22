import React from 'react';
import styles from './MessageInput.module.scss';

export function MessageInput(props) {

    function handleSubmit(e) {
        e.preventDefault();
        if (e.target[0].value) {
            props.onSubmit(e.target[0].value);
            e.target.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.messageInputForm}>
            <input className={styles.messageInput} />
            <div className={styles.spacer} />
            <input type="submit" value="" className={styles.submitButton} />
        </form>
    )
}