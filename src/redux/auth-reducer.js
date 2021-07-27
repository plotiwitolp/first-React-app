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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH, data: {id, email, login}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.getMe().then(response => {
        let {id, login, email} = response.data.data;
        if (response.data.resultCode === 0) {
           dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer;