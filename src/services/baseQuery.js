import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://192.168.1.7:3000/bank/v1',
    prepareHeaders: (headers, { getState }) => {
        const state = getState();
        const { token } = state.user || {};

        if (token) {

            headers.set('token', `${token}`);
        } else {
            console.warn('No token found in state');
        }
        return headers;
    },
});

export default baseQuery;