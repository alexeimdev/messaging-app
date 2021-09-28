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

    const groupedMessages = groupMessages(props.messages);

    function groupMessages(messages) {
        const groupedMessages = [];
        for (const message of messages) {
            const messageDate = new Date(message.date);
            const shortDate = getDisplayDate(messageDate);

            const existingDate = groupedMessages?.find(group => group.date === shortDate)?.date;
            if (existingDate) {
                groupedMessages.find(group => group.date === shortDate).messages.push(message);
            }
            else {
                groupedMessages.push({ date: shortDate, messages: [message] })
            }
        }
        return groupedMessages;
    }

    function getDisplayDate(date) {
        const now = new Date();
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

        const isToday = now.toLocaleDateString() === date.toLocaleDateString();
        const isYesterday = yesterday.toLocaleDateString() === date.toLocaleDateString();

        const months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        if (isToday) {
            return "Today";
        } else if (isYesterday) {
            return "Yesterday";
        } else {
            return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
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