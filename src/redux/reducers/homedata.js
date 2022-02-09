import {
    GET_HOMEDATA_START,
    GET_HOMEDATA_SUCCESS,
    GET_HOMEDATA_FAILED
} from "../constants";

const initialState = {
    products: [],
    sliders: [],
    campaigns: [],
    loading: false,
    errorMsg: ''
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOMEDATA_START:
            return {
                ...state,
                loading: true
            };
            break;
        case GET_HOMEDATA_SUCCESS:
            return {
                ...state,
                products: action.products,
                sliders: action.sliders,
                campaigns: action.campaigns,
                loading: false
            };
            break;
        case GET_HOMEDATA_FAILED:
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

export default homeReducer;