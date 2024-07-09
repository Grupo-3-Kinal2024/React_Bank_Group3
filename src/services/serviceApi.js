import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const serviceApi = createApi({
    reducerPath: 'serviceApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: 'auth/register',
                method: 'POST',
                body: data,
            }),
        })
    }),
});

export const {useRegisterMutation } = serviceApi;
