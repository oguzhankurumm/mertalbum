import { combineReducers } from "redux";
import ordersReducer from "./reducers/orders";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
    authReducer,
    ordersReducer
})

export default rootReducer;