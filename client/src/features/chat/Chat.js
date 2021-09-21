import React from 'react';
import styles from './Chat.module.css';
import { Message } from './Message';

export function Chat(props) {
    return (
        <div className={styles.chat}>
            <Message text="Hi!" me />
            <Message text="How you doing?" />
            <Message text="I'm fine thanks. How are you?" me />
            <Message text="Execllent" />
            <Message text="Hi!" me />
            <Message text="How you doing?" />
            <Message text="I'm fine thanks. How are you?" me />
            <Message text="Execllent" />
            <Message text="Hi!" me />
            <Message text="How you doing?" />
            <Message text="I'm fine thanks. How are you?" me />
            <Message text="Execllent" />
        </div>
    )
}