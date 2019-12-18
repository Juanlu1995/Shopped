import axios from 'axios';
import {TOKEN_NAME, BASE_URL} from '../constants';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Baerer ${localStorage.getItem(TOKEN_NAME)}`
    }
});
