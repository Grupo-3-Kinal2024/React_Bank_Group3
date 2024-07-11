import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
            }),
        }),
        getAllUser: builder.query({
            query: () => ({
                url: 'user/',
                method: 'GET',
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: 'auth/register',
                method: 'POST',
                body: data,
            }),
        }),
        editUser: builder.mutation({
            query: (data) => ({
                url: 'user/',
                method: 'PUT',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetAllUserQuery, useEditUserMutation } = userApi;