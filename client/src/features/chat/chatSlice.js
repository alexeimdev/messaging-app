import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
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
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        }
    }
})

export const {
    addMessage,
    setMessages,
} = chatSlice.actions;

export default chatSlice.reducer;