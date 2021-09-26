import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";

export function useChat() {

    const socketRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (socketRef.current == null) {
            socketRef.current = io.connect();
        }
        // return () => { }
    }, [socketRef.current])

    function startChat(chatId) {
        console.log("startChat", 'chatId', chatId);
        socketRef.current?.emit("chat", {
            chatId: chatId,
        });
    }

    function sendMessage({ author, message }) {
        console.log("sendMessage", 'author', author, 'message', message);
        socketRef.current?.emit("message", {
            author: author,
            message: message,
        });
    }

    function onIncomingMassage(action) {
        console.log("onIncomingMassage");
        socketRef.current?.on("message", (incomingMessage) => {
            console.log("on message", 'incomingMessage', incomingMessage);
            dispatch(action(incomingMessage));
        });
    }

    function onGetChatHistory(action) {
        socketRef.current?.on("chatHistory", (messages) => {
            dispatch(action(messages));
        });
    }

    return {
        startChat,
        sendMessage,
        onIncomingMassage,
        onGetChatHistory
    }

}