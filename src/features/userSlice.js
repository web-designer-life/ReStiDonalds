import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName: null,
    userEmail: null,
    userAvatar: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userName = action.payload.userName,
            state.userEmail = action.payload.userEmail,
            state.userAvatar = action.payload.userAvatar
        },
        logout: state => {
            state.userName = null,
            state.userEmail = null,
            state.userAvatar = null
        }
    }
});

export const { login, logout } = userSlice.actions;

export const selectUserName = state => state.user.userName;
export const selectUserEmail = state => state.user.userEmail;
export const selectUserAvatar = state => state.user.userAvatar;

export default userSlice.reducer;