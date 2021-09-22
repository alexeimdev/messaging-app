import { ChatLayout } from '../layouts/chatLayout';
import { Chat } from '../features/chat/Chat';

export function ChatPage(props) {
    return (
        <ChatLayout>
            <Chat />
        </ChatLayout>
    )
}