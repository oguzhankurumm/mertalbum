import {
    USER_STATE_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_START,
    USER_LOGOUT_START,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILED
} from '../constants';
import ApiUrl from '../../api/ApiUrl';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getHomeData } from './homedata';
import { getOrders } from './orders';
import { getAddresses } from './address';
import { getUserInfo } from './userinfo';
import { showMessage } from 'react-native-flash-message';

export const userAuthStateListener = () => async (dispatch) => {
    try {
        const currentUser = await AsyncStorage.getItem('@currentUser');
        if (currentUser !== null) {
            const currentUserObj = JSON.parse(currentUser);
            const { email, password } = currentUserObj;
            const logMeIn = await axios.post(`${ApiUrl}/getToken`, { email, password });
            if (logMeIn.data.success !== undefined && logMeIn.data.success === 1) {
                dispatch({
                    type: USER_STATE_CHANGE,
                    currentUser: logMeIn.data.user,
                    loaded: true
                });
                dispatch(getUserInfo(logMeIn.data.user.token));
                dispatch(getAddresses(logMeIn.data.user.token));
                dispatch(getHomeData());
                dispatch(getOrders(logMeIn.data.user.token));
            } else {
                dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true })
            }
        } else {
            dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true })
        }
    } catch (e) {
        dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true })
        showMessage({ message: 'Hata!', description: e.message, type: 'danger', icon: 'danger', duration: 3000 });
    }
}

export function logout() {
    return async dispatch => {
        try {
            dispatch({ type: USER_LOGOUT_START });
            const keys = await AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(keys);
            dispatch({ type: USER_LOGOUT_SUCCESS });
        } catch (error) {
            dispatch({ dtype: USER_LOGOUT_FAILED, error: error.message })
            showMessage({ message: 'Hata!', description: error.message, type: 'danger', icon: 'danger', duration: 3000 });
        }
    }
}

export const login = (email, password, rememberme) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_START });
        const logMeIn = await axios.post(`${ApiUrl}/getToken`, { email, password });
        if (logMeIn.data.success !== undefined && logMeIn.data.success === 1) {
            if (rememberme === true) {
                const jsonValue = JSON.stringify({ email, password })
                await AsyncStorage.setItem('@currentUser', jsonValue)
            }
            dispatch({ type: LOGIN_SUCCESS, currentUser: logMeIn.data.user });
            dispatch(getUserInfo(logMeIn.data.user.token));
            dispatch(getAddresses(logMeIn.data.user.token));
            dispatch(getHomeData());
            dispatch(getOrders(logMeIn.data.user.token));
        } else {
            dispatch({ type: LOGIN_FAILED, error: logMeIn.data.message });
            showMessage({ message: 'Hata!', description: logMeIn.data.message, type: 'danger', icon: 'danger', duration: 3000 });
        }
    } catch (err) {
        dispatch({ type: LOGIN_FAILED, error: error.message });
        showMessage({ message: 'Hata!', description: error.message, type: 'danger', icon: 'danger', duration: 3000 });
    }
};