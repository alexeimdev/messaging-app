import React, { useRef, useEffect } from 'react';
import { Message } from './Message';
import { Date as MessagesDate } from './Date';
import styles from './Messages.module.scss';

export function Messages(props) {

    const messagesEndRef = useRef();

    useEffect(() => {
        scrollToBottom();
    }, [props.messages]);

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className={styles.messages}>
            {props.messages?.map(message =>
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
            <div ref={messagesEndRef} />
        </div>
    )
}