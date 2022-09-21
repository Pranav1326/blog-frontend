import { useEffect } from "react";
import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")),
    token: JSON.parse(localStorage.getItem("token")),
    isFetching: false,
    resetPassword: false,
    error: false
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user));
        localStorage.setItem("token",JSON.stringify(state.token));
    }, [state.user]);
    
    return (
        <Context.Provider
            value={{
                user: state.user,
                token: state.token,
                isFetching: state.isFetching,
                error: state.error,
                resetPassword: state.resetPassword,
                dispatch
            }}
        >
            {children}
        </Context.Provider>
    );
}
