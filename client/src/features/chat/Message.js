import React from 'react';
import styles from './Message.module.scss';

export function Message(props) {
    return (
        <div className={`${styles.message} ${props.me ? styles.me : ''}`}>
            <div className={styles.text}>{props.text}</div>
            <div className={styles.time}>{props.time}</div>
        </div>
    )
}