import { GET_ADDRESS_START, GET_ADDRESS_SUCCESS, GET_ADDRESS_FAILED } from '../constants';
import ApiUrl from '../../api/ApiUrl';
import axios from 'axios';

export const getAddresses = token => async dispatch => {
    dispatch({ type: GET_ADDRESS_START })
    try {
        const response = await axios.get(`${ApiUrl}/getAddress/${token}`);
        if (response.data.success === 1) {
            dispatch({
                type: GET_ADDRESS_SUCCESS,
                addresses: response.data
            })
        } else {
            dispatch({ type: GET_ADDRESS_FAILED, error: error.message })
        }
    } catch (error) {
        dispatch({ type: GET_ADDRESS_FAILED, error: error.message })
    }
}