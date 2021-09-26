import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Message } from './Message';
import { Date as MessagesDate } from './Date';
import styles from './Messages.module.scss';

export function Messages(props) {

    const messagesEndRef = useRef();

    const [ showScrollToBottomButton, setShowScrollToBottomButton] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            scrollToBottom();
        }, 100);

    }, [props.messages]);

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div className={styles.messages}>
            <div>{props.user}</div>
            {props.messages?.map(message =>
                <React.Fragment key={message.date}>
                    <MessagesDate key={message.date} date={message.date} />
                    {message?.messagesArr.map((item, index, arr) =>
                        <Message key={index}
                            message={item.message}
                            time={item.time}
                            me={item.author === props.me}
                            arrow={index === 0 || item.author !== arr[index - 1].author} />
                    )}
                </React.Fragment>
            )}
            {showScrollToBottomButton &&
                <button type="button" value="" onClick={scrollToBottom} className={styles.scrollToBottomButton}>
                    <span className="material-icons">keyboard_double_arrow_down</span>
                </button>
            }
            <div ref={messagesEndRef} />
        </div>
    )
}