import axios from '../requesters/axios'
import {GET_ALL_USERS} from "../actionTypes/users";
import {errorHandler} from "./errorHandler";

const getAllUsers = (
    data,
    done = () => {
    }
) => {
    return (dispatch) => {
        axios.get('/users')
            .then((response) => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: {
                        users: response.data
                    }
                });
                done(response.data)
            }).catch(error => {
            errorHandler(error);
        })
    }
};

export { getAllUsers };