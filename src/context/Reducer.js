import { unstable_renderSubtreeIntoContainer } from "react-dom"

const Reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return{
                user: null,
                token: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return{
                user: action.payload.userInfo,
                token: action.payload.token,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return{
                user: null,
                token: null,
                isFetching: false,
                error: true
            }
        case "LOGOUT":
            return{
                user: null,
                token: null,
                isFetching: false,
                erorr: false
            }
        default:
            return state;
    }
}

export default Reducer;