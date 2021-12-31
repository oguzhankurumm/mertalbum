import {
    USER_STATE_CHANGE,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILED,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "../constants";

const initialState = {
    currentUser: null,
    loaded: false,
    errorMsg: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser,
                loaded: action.loaded
            };
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                loaded: true
            };
        case USER_LOGOUT_FAILED:
            return {
                ...state,
                currentUser: null,
                loaded: true
            };
        case LOGIN_START:
            return {
                ...state,
                loaded: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loaded: true,
                currentUser: action.currentUser
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loaded: true,
                errorMsg: action.error
            }
        default:
            return state;
    }
};

export default authReducer;