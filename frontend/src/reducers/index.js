import {combineReducers} from "redux";
import users from "./users";

export default (state, action) => {
    const reducers = combineReducers({
        users,
    });
    return reducers(state, action);
}