
import {GET_ALL_USERS} from "../actionTypes/users";

const INITIAL_STATE = {
    users: false,
    lastInsertedUser: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload.users
            };
        default:
            return {
                ...state
            }
    }
}