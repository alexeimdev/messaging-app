import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Chat.module.scss';
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import { addMessage, setMessages } from './chatSlice';

export function Chat(props) {

    const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        props.onStartChat(props.chatId);
    }, [props.onStartChat, props.chatId]);

    useEffect(() => {
        props.onIncomingMassage(addMessage);
    }, [props.onIncomingMassage]);

    useEffect(() => {
        props.onGetChatHistory(setMessages);
    }, [props.onGetChatHistory]);

    function createNewMessage(message) {
        props.onSendMessage({
            author: props.user,
            message, 
        });
    }

    return (
        <div className={styles.chat}>
            {props.bg === 'default' &&
                <div className={styles.bg} />
            }
            <Messages me={props.user} messages={messages} />
            <MessageInput onSubmit={createNewMessage} />
        </div>
    )
}