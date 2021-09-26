import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";

export function useChat() {

    const [socket, setSocket] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (socket == null) {
            setSocket(io.connect());
        }
        return () => {
        }
    }, [])

    function startChat(chatId) {
        console.log("startChat", 'chatId', chatId);
        socket?.emit("chat", {
            chatId: chatId,
        });
    }

    function sendMessage({ author, message }) {
        console.log("sendMessage", 'author', author, 'message', message);
        socket?.emit("message", {
            author: author,
            message: message,
        });
    }

    function onIncomingMassage(action) {
        console.log("onIncomingMassage");
        socket?.on("message", (incomingMessage) => {
            console.log("on message", 'incomingMessage', incomingMessage);
            dispatch(action(incomingMessage));
        });
    }

    function onGetChatHistory(action) {
        socket?.on("chatHistory", (messages) => {
            dispatch(action(messages));
        });
    }

    return { startChat, sendMessage, onIncomingMassage, onGetChatHistory };
}