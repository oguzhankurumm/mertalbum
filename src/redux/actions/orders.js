import axios from 'axios';
import { GET_ORDERS_START, GET_ORDERS_SUCCESS } from '../constants';

export function getOrders(token) {
    return async function (dispatch) {
        dispatch({ type: GET_ORDERS_START })
        const getData = await axios.post(`${ApiUrl}/myorder?tip=3`, {
            "token_": token
        })
        console.log('get:', getData);
        return dispatch({
            type: GET_ORDERS_SUCCESS,
            orders: []
        })
    }
}