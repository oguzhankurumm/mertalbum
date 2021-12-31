import { combineReducers } from "redux";
import sliderReducer from "./reducers/slider";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
    sliderReducer,
    authReducer
})

export default rootReducer;