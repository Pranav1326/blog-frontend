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

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});
