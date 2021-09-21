import React from 'react';
import styles from './Message.module.css';

export function Message(props) {
    return (
        <div className={`${styles.message} ${props.me ? styles.me : ''}`}>
            <div className="text">{props.text}</div>
        </div>
    )
}