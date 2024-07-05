import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from './baseQuery';

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        createAccount: builder.mutation({
            query: (data) => ({
                url: 'account/new',
                method: 'POST',
                body: data,
            }),
        })
    }),
});

export const { useCreateAccountMutation } = accountApi;