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

export const userAuthStateListener = () => dispatch => {
    const user = null;
    // auth().onAuthStateChanged((user) => {
    if (user) {
        // dispatch(getCurrentUserData())
    } else {
        dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true })
    }
    // })
}

export async function getCurrentUserData(user, token) {
    // const getMyOrders = await axios.post(`${ApiUrl}/myorder?tip=3`, {
    //     "token_": token
    // })
    // console.log('GET', getMyOrders);

    return dispatch({
        type: USER_STATE_CHANGE,
        currentUser: user
    })

    // firestore()
    //     .collection('users')
    //     .doc(auth().currentUser.uid)
    //     .onSnapshot((res) => {
    //         if (res.exists) {
    //             return dispatch({
    //                 type: USER_STATE_CHANGE,
    //                 currentUser: {
    //                     ...res.data(),
    //                     userId: auth().currentUser.uid
    //                 },
    //                 loaded: true
    //             })
    //         }
    //     })
}

// export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
//     auth().signInWithEmailAndPassword(email, password)
//         .then(() => {
//             resolve(() => {
//                 dispatch({
//                     type: LOGIN_SUCCESS
//                 })
//             });
//         })
//         .catch((error) => {
//             reject(() => {
//                 dispatch({
//                     type: LOGIN_FAILED,
//                     errorMsg: error.code
//                 })
//             });
//         })
// })

export function logout() {
    return async dispatch => {
        try {
            dispatch({ type: USER_LOGOUT_START });
            const keys = AsyncStorage.getAllKeys();
            await AsyncStorage.multiRemove(keys)
            dispatch({ type: USER_LOGOUT_SUCCESS });
        } catch (error) {
            dispatch({ dtype: USER_LOGOUT_FAILED, error: error.message })
        }
    }
}

export const login = (email, password) => async (dispatch) => {
    console.log('sela')
    try {
        dispatch({ type: LOGIN_START });
        const logMeIn = await axios.post(`${ApiUrl}/getToken`, { email, password });
        console.log('log:', logMeIn);
        await AsyncStorage.setItem('@storage_Key', value)
        return dispatch({ type: LOGIN_SUCCESS, currentUser: logMeIn.data.token });
    } catch (error) {
        console.log('error login:', error);
        return dispatch({ type: LOGIN_FAILED, error: error.message });
    }
}