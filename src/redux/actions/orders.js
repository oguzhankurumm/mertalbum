import { GET_ORDERS_START, GET_ORDERS_SUCCESS, GET_ORDERS_FAILED } from '../constants';
import ApiUrl from '../../api/ApiUrl';
import axios from 'axios';

export const getOrders = token => async dispatch => {
    dispatch({ type: GET_ORDERS_START })
    try {
        const getData = await axios.post(`${ApiUrl}/myorder?tip=3&token_=${token}`)
        const orderData = getData.data.siparisler;
        const ordersArr = [...orderData.aktifSiparisler, ...orderData.dosyaBekleyen, ...orderData.iptaledilen];
        dispatch({
            type: GET_ORDERS_SUCCESS,
            orders: orderData,
            allOrders: ordersArr.sort((a, b) => b.tarih.localeCompare(a.tarih))
        })
    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILED, error: error.message })
    }
}