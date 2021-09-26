import React, { useState, useEffect } from "react";
import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';
import { useChat } from '../hooks/chatHook';
import { useParams } from "react-router";

export function ChatPage(props) {

    const chatId = useParams("id");
    const { startChat, sendMessage, onIncomingMassage, onGetChatHistory } = useChat();

    console.log("chatId", chatId);

    return (
        <ChatLayout headerTitle="Chat">
            <Chat bg="default"
                chatId={chatId}
                onStartChat={startChat}
                onSendMessage={sendMessage}
                onIncomingMassage={onIncomingMassage}
                onGetChatHistory={onGetChatHistory} />
        </ChatLayout>
    )
}