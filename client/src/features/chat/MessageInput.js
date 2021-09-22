import React from 'react';
import styles from './MessageInput.module.scss';

export function MessageInput(props) {
    return (
        <div className={styles.messageInputWrapper}>
            <input className={styles.messageInput} />
            <div className={styles.spacer} />
            <input type="button" className={styles.submitButton} />
        </div>
    )
}