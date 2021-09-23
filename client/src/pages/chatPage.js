import React, {useState, useEffect} from "react";
import io from "socket.io-client";
import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';

export function ChatPage(props) {

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(io.connect())
    }, []);

    return (
        <ChatLayout headerTitle="Chat">
            <Chat socket={socket} bg="default" />
        </ChatLayout>
    )
}