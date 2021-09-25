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

    function sendMessage({ author, message }) {
        console.log("sendMessage");
        socket?.emit("sendMessage", {
            author: author,
            message: message,
        });
    }

    function onIncomingMassage(action) {
        console.log("onIncomingMassage");
        socket?.on("newMessage", (incomingMessage) => {
            dispatch(action(incomingMessage));
        });
    }

    return { sendMessage, onIncomingMassage };
}