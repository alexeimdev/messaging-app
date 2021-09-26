import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';
import { Modal } from '../shared/components/Modal';
import { ConnectedUser } from '../features/users/ConnectedUser';
import { useChat } from '../hooks/chatHook';
import { setUser } from '../features/users/userSlice';
import { getStoredUser, storeUser }  from "../utilities/localStorageUtility";

export function ChatPage(props) {

    const dispatch = useDispatch();
    const chatId = useParams("id");
    let user = useSelector(state => state.user.user);
    let storedUser = getStoredUser();
    
    const { startChat, sendMessage, onIncomingMassage, onGetChatHistory } = useChat();
    
    if (storedUser) {
        user = storedUser;
    }

    function onSelectUser(user) {
        storeUser(user);
        dispatch(setUser(user));
    }

    return (
        <ChatLayout headerTitle="Chat" headerSubTitle={user}>
            <Chat bg="default"
                chatId={chatId}
                user={user}
                onStartChat={startChat}
                onSendMessage={sendMessage}
                onIncomingMassage={onIncomingMassage}
                onGetChatHistory={onGetChatHistory} />
            <Modal title="Choose user" show={!user} hideCloseButton>
                <ConnectedUser users={['alexei@example.com', 'liat@example.com']} onSelectUser={onSelectUser} />
            </Modal>
        </ChatLayout>
    )
}