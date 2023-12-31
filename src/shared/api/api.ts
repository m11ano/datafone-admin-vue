import axios from 'axios';
import { RequestError } from '@/shared/lib/errors/RequestError';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.response.use(
    (config) => config,
    (error) => {
        if (typeof error.response.data.message === 'object') {
            throw new RequestError(error.response.data.message, error.code, error.response);
        } else if (typeof error.response.data.message === 'string') {
            throw new RequestError([error.response.data.message], error.code, error.response);
        }

        throw error;
    },
);
