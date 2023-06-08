import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: JSON.parse(localStorage.getItem("token")) || null,
    isFetching: false,
    resetPassword: false,
    forgotPasswordEmail: null,
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
        state.forgotPasswordEmail = null;
        state.error = false;
    },
    LOGIN_SUCCESS: (state, action) => {
        state.user = action.payload.userInfo;
        state.token = action.payload.token;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = false;
    },
    LOGIN_FAILURE: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = true;
    },
    LOGOUT: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = false;
    },
    USER_UPDATE: (state, action) => {
        state.user = action.payload;
        state.token = state.token;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = false;
    },
    FORGOT_PASSWORD: (state, action) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = true;
        state.forgotPasswordEmail = action.payload;
        state.error = false;
    },
    FORGOT_PASSWORD_SUCCESS: (state) => {
        state.user = null;  
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = false;
    },
    FORGOT_PASSWORD_FAILURE: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = true;
    },
    RESET_PASSWORD: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = true;
    },
    RESET_PASSWORD_SUCCESS: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = null;
        state.forgotPasswordEmail = null;
        state.error = true;
    },
    RESET_PASSWORD_FAILURE: (state) => {
        state.user = null;
        state.token = null;
        state.isFetching = false;
        state.resetPassword = false;
        state.forgotPasswordEmail = null;
        state.error = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, USER_UPDATE, FORGOT_PASSWORD, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } = userSlice.actions;

export default userSlice.reducer;