import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [{
        date: "Yesterday",
        messagesArr: [
            { time: "07:03", message: "Hi!", author: "alexei@example.com" },
            { time: "07:05", message: "How you doing?", author: "liat@example.com" },
            { time: "07:06", message: "I'm fine thanks. How are you?", author: "alexei@example.com" },
            { time: "07:10", message: "Execllent", author: "liat@example.com" },
        ]
    }],
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            const now = new Date();
            const currentHour = ("0" + now.getHours()).slice(-2);
            const currentMinutes = ("0" + now.getMinutes()).slice(-2);

            let todayMessages = state?.messages?.find(x => x.date === "Today");

            if (todayMessages) {
                state.messages.find(x => x.date === "Today").messagesArr.push({
                    time: `${currentHour}:${currentMinutes}`,
                    author: action.payload.author,
                    message: action.payload.message,
                });
            }
            else {
                state.messages.push({
                    date: "Today",
                    messagesArr: [{
                        time: `${currentHour}:${currentMinutes}`,
                        author: action.payload.author,
                        message: action.payload.message,
                    }]
                });
            }
        }
    }
})

export const {
    addMessage,
} = chatSlice.actions;

export default chatSlice.reducer;