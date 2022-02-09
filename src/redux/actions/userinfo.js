import { GET_USER_INFO_START, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILED } from '../constants';
import ApiUrl from '../../api/ApiUrl';
import axios from 'axios';

export const getUserInfo = (token) => async (dispatch) => {
    const url = `${ApiUrl}/memberInfo/${token}`;
    try {
        dispatch({ type: GET_USER_INFO_START });
        const response = await axios.get(url);
        if (response.data.success === 1) {
            dispatch({ type: GET_USER_INFO_SUCCESS, userInfo: response.data.user[0] });
        } else {
            dispatch({ type: GET_USER_INFO_FAILED });
        }
    } catch (e) {
        dispatch({ type: GET_USER_INFO_FAILED });
    }
}