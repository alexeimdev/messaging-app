import { useState, useEffect } from "react";
import io from "socket.io-client";

export function useChat() {

    const [socket, setSocket] = useState(null);

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

    function onIncomingMassage(cb) {
        console.log("onIncomingMassage");
        socket?.on("newMessage", (incomingMessage) => {
            if (cb && typeof (cb === "function")) {
                cb(incomingMessage);
            }
        });
    }

    return { sendMessage, onIncomingMassage };
}