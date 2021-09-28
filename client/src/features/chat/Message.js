import React from 'react';
import styles from './Message.module.scss';

export function Message(props) {
    
    const date = new Date(props.date);
    const hour = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const time = `${hour}:${minutes}`;

    return (
        <div className={`${styles.message} ${props.arrow ? styles.arrow : ''} ${props.me ? styles.me : ''}`}>
            <div className={styles.text}>{props.message}</div>
            <div className={styles.time}>{time}</div>
        </div>
    )
}