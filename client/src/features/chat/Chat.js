import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Chat.module.scss';
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import { addMessage, setMessages } from './chatSlice';
import { useChat } from '../../hooks/chatHook';

export function Chat(props) {

    const { startChat, sendMessage, onIncomingMassage, onChatStarted } = useChat();
    const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        if (props.chatId) {
            startChat(props.chatId);
        }

        onIncomingMassage(addMessage);
        onChatStarted(setMessages);

    }, [props.chatId]);

    function handleSubmitMessage(message) {
        sendMessage({
            author: props.user,
            message,
            chatId: props.chatId,
        });
    }

    return (
        <div className={styles.chat}>
            {props.bg === 'default' &&
                <div className={styles.bg} />
            }
            <Messages me={props.user} messages={messages} />
            <MessageInput onSubmit={handleSubmitMessage} />
        </div>
    )
}