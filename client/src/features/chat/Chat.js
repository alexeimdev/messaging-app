import React from 'react';
import styles from './Chat.module.css';
import { Message } from './Message';

export function Chat(props) {
    return (
        <div className={styles.chat}>
            <Message text="Hi!" time="07:03" me />
            <Message text="How you doing?" time="07:05" />
            <Message text="I'm fine thanks. How are you?" time="07:05" me />
            <Message text="Execllent" time="07:07" />
            <Message text="Hi!" time="07:03" me />
            <Message text="How you doing?" time="07:05" />
            <Message text="I'm fine thanks. How are you?" time="07:05" me />
            <Message text="Execllent" time="07:07" />
            <Message text="Hi!" time="07:03" me />
            <Message text="How you doing?" time="07:05" />
            <Message text="I'm fine thanks. How are you?" time="07:05" me />
            <Message text="Execllent" time="07:07" />
        </div>
    )
}