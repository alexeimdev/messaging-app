import React, { useState, useEffect } from "react";
import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';
import { useChat } from "../features/hooks/chatHook";

export function ChatPage(props) {

    const { sendMessage, onIncomingMassage } = useChat();

    return (
        <ChatLayout headerTitle="Chat">
            <Chat bg="default"
                onSendMessage={sendMessage}
                onIncomingMassage={onIncomingMassage} />
        </ChatLayout>
    )
}