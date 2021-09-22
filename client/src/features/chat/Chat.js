import React, { useState, useEffect } from 'react';
import styles from './Chat.module.scss';
import { Message } from './Message';
import { Date } from './Date';

export function Chat(props) {

    const [messages, setMessanges] = useState([]);

    useEffect(() => {
        setMessanges([
            {
                date: "Yesterday",
                messagesArr: [
                    { time: "07:03", text: "Hi!", me: false },
                    { time: "07:05", text: "How you doing?", me: true },
                    { time: "07:06", text: "I'm fine thanks. How are you?", me: false },
                    { time: "07:10", text: "Execllent", me: true },
                ]
            },
            {
                date: "Today",
                messagesArr: [
                    { time: "07:03", text: "Hi!", me: false },
                    { time: "07:05", text: "How you doing?", me: true },
                    { time: "07:06", text: "I'm fine thanks. How are you?", me: false },
                    { time: "07:11", text: "😃", me: true },
                ]
            },
            {
                date: "Tommorow",
                messagesArr: [
                    { time: "07:03", text: "Hi!", me: false },
                    { time: "07:05", text: "How you doing?", me: true },
                    { time: "07:06", text: "I'm fine thanks. How are you?", me: false },
                    { time: "07:10", text: "Execllent!", me: true },
                    { time: "07:10", text: "I'm very glad!", me: true },
                    { time: "07:11", text: "😃", me: true },
                ]
            },
        ]);
    }, []);

    return (
        <div className={styles.chat}>
            <div className={styles.bg} />
            <div className={styles.messages}>
                {messages?.map(message =>
                    <>
                        <Date date={message.date} />
                        {message?.messagesArr.map((item, index, arr) => {
                            const showArrow = index == 0 || item.me != arr[index - 1].me;
                            return (
                                <Message text={item.text} time={item.time} me={item.me} arrow={showArrow} />
                            )
                        }
                        )}
                    </>
                )}
            </div>
        </div>
    )
}