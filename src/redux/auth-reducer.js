import {authAPI} from "../api/api";

const SET_AUTH = "SET_AUTH";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH, payload:
        {id, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.getMe().then(response => {
        let {id, login, email} = response.data.data;
        if (response.data.resultCode === 0) {
           dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
        if (response.data.resultCode === 0) {
           dispatch(getAuthUserData())
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;