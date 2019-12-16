import axios from 'axios';
import {TOKEN_NAME} from '../constant';

axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
        Authorization: `Baerer ${localStorage.getItem(TOKEN_NAME)}`
    }
});