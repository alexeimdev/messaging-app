import React, { useState, useEffect } from 'react';
import styles from './Chat.module.scss';
import { Message } from './Message';
import { Date as MessagesDate } from './Date';

export function Chat(props) {

    const [messages, setMessanges] = useState([]);

    useEffect(() => {

        const today = new Date();
        const yesterday = today.getDate() - 1;
        const tomorrow = today.getDate() + 1;

        setMessanges([
            {
                date: "Yesterday",
                messagesArr: [
                    { time: "07:03", text: "Hi!", author: "me" },
                    { time: "07:05", text: "How you doing?", author: "liat5861@gmail.com" },
                    { time: "07:06", text: "I'm fine thanks. How are you?", author: "me" },
                    { time: "07:10", text: "Execllent", author: "liat5861@gmail.com" },
                ]
            },
            {
                date: "Today",
                messagesArr: [
                    { time: "07:03", text: "Hi!", author: "me" },
                    { time: "07:05", text: "How you doing?", author: "liat5861@gmail.com" },
                    { time: "07:06", text: "I'm fine thanks. How are you?", author: "me" },
                    { time: "07:10", text: "Execllent", author: "liat5861@gmail.com" },
                    { time: "07:11", text: "😃", author: "me" },
                ]
            },
            {
                date: "Tommorow",
                messagesArr: [
                    { time: "07:03", text: "Hi!", author: "liat5861@gmail.com" },
                    { time: "07:05", text: "How you doing?", author: "me" },
                    { time: "07:06", text: "I'm fine thanks. How are you?", author: "liat5861@gmail.com" },
                    { time: "07:10", text: "Execllent!", author: "me" },
                    { time: "07:10", text: "I'm very glad!", author: "me" },
                    { time: "07:11", text: "😃", author: "me" },
                ]
            },
        ]);
    }, []);

    return (
        <div className={styles.chat}>
            {props.bg == 'default' &&
                <div className={styles.bg} />
            }
            <div className={styles.messages}>
                {messages?.map(message =>
                    <>
                        <MessagesDate key={message.date} date={message.date} />
                        {message?.messagesArr.map((item, index, arr) =>
                            <Message key={index}
                                text={item.text}
                                time={item.time}
                                me={item.author == "me"}
                                arrow={index == 0 || item.author != arr[index - 1].author} />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}