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

            state.messages.push({
                time: `${currentHour}:${currentMinutes}`,
                author: action.payload.author,
                message: action.payload.message,
            });
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