import {createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: "0", name: "Yuzan Khadka"},
    {id: "1", name: "Sanjay Khadka"},
    {id: "2", name: "John Carlos"}
];

export   const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
});

export const selectAllUsers = (state) => state.users;

export const {  } = usersSlice.actions;

export default usersSlice.reducer;

