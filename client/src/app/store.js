import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import chatReducer from '../features/chat/chatSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
    user: userReducer,
  },
});
