export const LoginStart = (userCrendentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user, token) => ({
    type: "LOGIN_SUCCESS",
    payload: [user, token],
});

export const Logout = () => ({
    type: "LOGOUT"
});

export const UserUpdate = () => ({
    type: "USER_UPDATE_START"
});

export const UserUpdateSuccess = (user) => ({
    type: "USER_UPDATE_SUCCESS",
    payload: user
});

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});

export const ResetPassword = () => ({
    type: "RESET_PASSWORD"
});

export const ResetPasswordSuccess = () => ({
    type: "RESET_PASSWORD_SUCCESS"
});
