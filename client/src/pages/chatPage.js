import React, { useState, useEffect } from "react";
import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';
import { useChat } from '../hooks/chatHook';

export function ChatPage(props) {

    const { startChat, sendMessage, onIncomingMassage, onGetChatHistory } = useChat();

    return (
        <ChatLayout headerTitle="Chat">
            <Chat bg="default"
                onStartChat={startChat}
                onSendMessage={sendMessage}
                onIncomingMassage={onIncomingMassage}
                onGetChatHistory={onGetChatHistory} />
        </ChatLayout>
    )
}