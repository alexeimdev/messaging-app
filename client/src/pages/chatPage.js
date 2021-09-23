import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';

export function ChatPage(props) {

    const [socket, setSocket] = useState();

    useEffect(() => {
        const newSocket = io.connect();
        setSocket(newSocket);
    }, [setSocket]);

    return (
        <ChatLayout headerTitle="Chat">
            <Chat socket={socket} bg="default" />
        </ChatLayout>
    )
}