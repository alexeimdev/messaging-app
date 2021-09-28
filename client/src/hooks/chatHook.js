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
    }, [])

    function startChat(chatId) {
        console.log("startChat", 'chatId', chatId);
        socketRef.current?.emit("chat", {
            chatId,
        });
    }

    function sendMessage({ author, message, chatId }) {
        console.log("sendMessage", 'author', author, 'message', message);
        socketRef.current?.emit("message", {
            author,
            message,
            chatId,
        });
    }

    function onIncomingMassage(action) {
        console.log("onIncomingMassage");
        socketRef.current?.on("message", (incomingMessage) => {
            console.log("on message", 'incomingMessage', incomingMessage);
            dispatch(action(incomingMessage));
        });
    }

    function onChatStarted(action) {
        socketRef.current?.on("chat", (messages) => {
            dispatch(action(messages));
        });
    }

    return {
        startChat,
        sendMessage,
        onIncomingMassage,
        onChatStarted,
    }

}