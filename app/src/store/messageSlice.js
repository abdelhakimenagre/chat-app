import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: []
};

const messages = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        deleteMessage: (state, action) => {
            state.messages = state.messages.filter(message => message.id !== action.payload);
        },
        editMessage: (state, action) => {
            const index = state.messages.findIndex(message => message.id === action.payload.id);
            if (index !== -1) {
                state.messages[index] = action.payload;
            }
        }
    }
});

export const { addMessage, deleteMessage, editMessage } = messages.actions;

export default messages.reducer;
