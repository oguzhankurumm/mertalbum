import {
    GET_ADDRESS_START,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAILED
} from "../constants";

const initialState = {
    addresses: [],
    loading: false,
    errorMsg: ''
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESS_START:
            return {
                ...state,
                loading: true
            };
            break;
        case GET_ADDRESS_SUCCESS:
            return {
                ...state,
                addresses: action.addresses,
                loading: false
            };
            break;
        case GET_ADDRESS_FAILED:
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

export default addressReducer;