import {default as Swal} from 'sweetalert2';
import {
    EXIST_ERROR, EXPIRED_ERROR,
    FORBIDDEN_ERROR,
    HEADER_ERROR,
    NOT_FOUND_ERROR,
    SERVER_ERROR,
    TIMEOUT_ERROR,
    UNAUTHORIZED_ERROR
} from "../constant/messages";


export function errorHandler(error) {
    if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        // console.error(error.response);
        switch (error.response.status) {
            case 400:
                return Swal.fire(HEADER_ERROR, SERVER_ERROR, 'warning');
            case 401:
                return Swal.fire(HEADER_ERROR, UNAUTHORIZED_ERROR, 'error');
            case 403:
                return Swal.fire(HEADER_ERROR, FORBIDDEN_ERROR, 'error');
            case 404:
                return Swal.fire(HEADER_ERROR, NOT_FOUND_ERROR, 'error');
            case 408:
                return Swal.fire(HEADER_ERROR, TIMEOUT_ERROR, 'error');
            case 409:
                return Swal.fire(HEADER_ERROR, EXIST_ERROR, 'warning');
            case 410:
                return Swal.fire(HEADER_ERROR, EXPIRED_ERROR, 'error');
            default:
                return Swal.fire(HEADER_ERROR, error.response.message, 'error')
        }
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error(error);
        Swal.fire(HEADER_ERROR, SERVER_ERROR, 'error')
    }
};
