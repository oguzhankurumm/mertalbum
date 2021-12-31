// import axios from 'axios';
import {
    USER_STATE_CHANGE,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    USER_LOGOUT,
    USER_LOGOUT_FAILED
} from '../constants';

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

export const getCurrentUserData = () => dispatch => {
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

export const logout = () => dispatch => {
    try {
        dispatch({
            type: USER_LOGOUT
        })
        // auth().signOut();
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAILED
        })
    }
}

export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
    // auth().createUserWithEmailAndPassword(email, password)
    //     .then(() => {
    //         resolve();
    //     })
    //     .catch(() => {
    //         reject();
    //     })
})