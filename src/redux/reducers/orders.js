import {
    GET_ORDERS_START,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAILED
} from "../constants";

const initialState = {
    orders: [],
    allOrders: [],
    loading: false,
    errorMsg: ''
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_START:
            return {
                ...state,
                loading: true
            };
            break;
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                allOrders: action.allOrders,
                loading: false
            };
            break;
        case GET_ORDERS_FAILED:
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

export default ordersReducer;