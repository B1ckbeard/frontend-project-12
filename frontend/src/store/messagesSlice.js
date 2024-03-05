import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const messagesAdapter = createEntityAdapter();
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: messagesAdapter.addOne,
  },
});

export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
