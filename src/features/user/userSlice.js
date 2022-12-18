import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
    isFetching: false,
    resetPassword: false,
    error: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOGIN_START: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = true;
        state.resetPassword = false;
        state.error = false;
    },
    LOGIN_SUCCESS: (state, action) => {
        state.user = action.payload.userInfo;
        state.token = action.payload.token;
        state.isFetching = false;
        state.resetPassword = false;
        state.error = false;
    },
    LOGIN_FAILURE: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.error = true;
    },
    LOGOUT: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.error = false;
    },
    USER_UPDATE: (state, action) => {
        state.user = action.payload;
        state.token = state.token;
        state.isFetching = false;
        state.resetPassword = false;
        state.error = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_UPDATE } = userSlice.actions;

export default userSlice.reducer;