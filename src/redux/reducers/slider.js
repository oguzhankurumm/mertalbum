import {
    GET_SLIDER_START,
    GET_SLIDER_SUCCESS,
    GET_SLIDER_FAIL
} from "../constants";

const initialState = {
    sliders: [],
    loading: false
}

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SLIDER_START:
            return {
                ...state,
                loading: true
            };
            break;
        case GET_SLIDER_SUCCESS:
            return {
                ...state,
                sliders: action.sliders,
                loading: false
            };
            break;
        default:
            return state;
    }
}

export default sliderReducer;