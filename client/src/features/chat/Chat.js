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
                    { time: "07:10", text: "Execllent!", me: true },
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
                        {message?.messagesArr.map(messageItem =>
                            <Message text={messageItem.text} time={messageItem.time} me={messageItem.me} />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

{/* <Date date="Yesterday" />
<Message text="Hi!" time="07:03" me />
<Message text="How you doing?" time="07:05" />
<Message text="I'm fine thanks. How are you?" time="07:05" me />
<Message text="Execllent" time="07:07" />
<Message text="Hi!" time="07:03" me />
<Date date="Today" />
<Message text="How you doing?" time="07:05" />
<Message text="I'm fine thanks. How are you?" time="07:05" me />
<Message text="Execllent" time="07:07" />
<Message text="Hi!" time="07:03" me />
<Message text="How you doing?" time="07:05" />
<Message text="I'm fine thanks. How are you?" time="07:05" me />
<Message text="Execllent" time="07:07" /> */}