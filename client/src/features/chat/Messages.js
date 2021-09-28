import React, { useRef, useState, useEffect } from 'react';
import { Message } from './Message';
import { Date as MessagesDate } from './Date';
import styles from './Messages.module.scss';

export function Messages(props) {

    const messagesEndRef = useRef();

    const [showScrollToBottomButton, setShowScrollToBottomButton] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            scrollToBottom();
        }, 100);

    }, [props.messages]);

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const groupedMessages = [];
    if (props.messages) {
        const now = new Date();

        for (const message of props.messages) {
            const messageDate = new Date(message.date);
            const shortDate = (messageDate.toLocaleDateString() === now.toLocaleDateString())
                ? "Today" : messageDate.toLocaleDateString();

            const existingDate = groupedMessages?.find(group => group.date === shortDate)?.date;
            if (existingDate) {
                groupedMessages.find(group => group.date === shortDate).messages.push(message);
            } 
            else {
                groupedMessages.push({ date: shortDate, messages: [message] })
            }
        }
    }

    return (
        <div className={styles.messages}>
            <div>{props.user}</div>
            {groupedMessages?.map((groupItem, groupindex) =>
                <React.Fragment key={groupindex}>
                    <MessagesDate date={groupItem.date} />
                    {groupItem.messages.map((messageItem, messageIndex, messageArr) => 
                        <Message key={messageIndex}
                            message={messageItem.message}
                            date={messageItem.date}
                            me={messageItem.author === props.me}
                            arrow={messageIndex === 0 || messageItem.author !== messageArr[messageIndex - 1].author} />
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