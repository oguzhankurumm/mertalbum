import {
    GET_USER_INFO_FAILED,
    GET_USER_INFO_START,
    GET_USER_INFO_SUCCESS
} from "../constants";

const initialState = {
    userInfo: null,
    loading: false,
    errorMsg: ''
}

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO_START:
            return {
                ...state,
                loading: true
            };
            break;
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.userInfo,
                loading: false
            };
            break;
        case GET_USER_INFO_FAILED:
            return {
                ...state,
                errorMsg: action.error,
                loading: false
            };
            break;
        default:
            return state;
    }
}

export default userInfoReducer;