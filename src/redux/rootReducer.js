import { combineReducers } from "redux";
import ordersReducer from "./reducers/orders";
import authReducer from "./reducers/auth";
import homeReducer from './reducers/homedata';
import addressReducer from "./reducers/address";
import userInfoReducer from "./reducers/userinfo";

const rootReducer = combineReducers({
    authReducer,
    ordersReducer,
    homeReducer,
    addressReducer,
    userInfoReducer
})

export default rootReducer;