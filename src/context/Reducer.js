const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return{
                user: null,
                token: null,
                isFetching: true,
                resetPassword: false,
                error: false
            }
        case "LOGIN_SUCCESS":
            return{
                user: action.payload.userInfo,
                token: action.payload.token,
                isFetching: false,
                resetPassword: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return{
                user: null,
                token: null,
                isFetching: false,
                resetPassword: false,
                error: true
            }
        case "LOGOUT":
            return{
                user: null,
                token: null,
                isFetching: false,
                resetPassword: false,
                erorr: false
            }
        case "RESET_PASSWORD":
            return{
                user: null,
                token: null,
                isFetching: false,
                resetPassword: true,
                erorr: false
            }
        case "RESET_PASSWORD_SUCCESS":
            return{
                user: null,
                token: null,
                isFetching: false,
                resetPassword: false,
                erorr: false
            }
        case "USER_UPDATE_START":
            return{
                user: state.user,
                token: null,
                isFetching: true,
                resetPassword: false,
                erorr: false
            }
        case "USER_UPDATE_SUCCESS":
            return{
                user: action.payload.userInfo,
                token: null,
                isFetching: false,
                resetPassword: false,
                erorr: false
            }
        default:
            return state;
    }
}

export default Reducer;