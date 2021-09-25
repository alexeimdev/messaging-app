import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Chat.module.scss';
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import { Modal } from "../../shared/components/Modal";
import { ConnectedUser } from '../users/ConnectedUser';
import { addMessage } from './chatSlice';

export function Chat(props) {

    const [user, setUser] = useState('');
    const messages = useSelector(state => state.chat.messages);

    useEffect(() => {
        props.onIncomingMassage(addMessage);
    }, [props.onIncomingMassage]);

    function createNewMessage(message) {
        props.onSendMessage({
            author: user,
            message, 
        });
    }

    return (
        <div className={styles.chat}>
            {props.bg === 'default' &&
                <div className={styles.bg} />
            }
            <Messages me={user} messages={messages} />
            <MessageInput onSubmit={createNewMessage} />
            <Modal title="Choose user" show={!user} hideCloseButton>
                <ConnectedUser users={['alexei@example.com', 'liat@example.com']} onSelectUser={(user) => setUser(user)} />
            </Modal>
        </div>
    )
}