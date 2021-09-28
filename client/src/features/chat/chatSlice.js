import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push({
                date: Date.now(),
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