import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';
import { Modal } from '../shared/components/Modal';
import { ConnectedUser } from '../features/users/ConnectedUser';
import { setUser } from '../features/users/userSlice';
import { getStoredUser, storeUser }  from "../utilities/localStorageUtility";

export function ChatPage(props) {

    const chatId = useParams("id");
    const user = useSelector(state => state.user.user);

    return (
        <ChatLayout headerTitle="Chat" headerSubTitle={user}>
            <Chat bg="default"
                chatId={chatId}
                user={user} />
            <Modal title="Choose user" show={!user} hideCloseButton>
                <ConnectedUser users={['alexei@example.com', 'liat@example.com']} />
            </Modal>
        </ChatLayout>
    )
}