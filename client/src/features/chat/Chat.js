import React, { useState, useEffect } from 'react';
import styles from './Chat.module.scss';
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";

export function Chat(props) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const today = new Date();
        const yesterday = today.getDate() - 1;
        const tomorrow = today.getDate() + 1;

        setMessages([
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
        ]);

    }, []);

    function addNewMessage(message, author) {
        const now = new Date();
        const currentHour = ("0" + now.getHours()).slice(-2);
        const currentMinutes = ("0" + now.getMinutes()).slice(-2);
        let newMessages = [...messages];
        newMessages?.find(x => x.date === "Today").messagesArr.push({
            time: `${currentHour}:${currentMinutes}`,
            text: message,
            author: author
        });
        setMessages(newMessages);
    }

    return (
        <div className={styles.chat}>
            {props.bg === 'default' &&
                <div className={styles.bg} />
            }
            <Messages messages={messages} />
            <MessageInput onSubmit={addNewMessage} />
        </div>
    )
}