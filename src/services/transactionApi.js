import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from './baseQuery';

export const transactionApi = createApi({
    reducerPath: 'transactionApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        transfer: builder.mutation({
            query: (data) => ({
                url: 'transaction/transfer',
                method: 'POST',
                body: data
            })
        }),
        getTransfersByUser: builder.query({
            query: (numberAccount) => ({
                url: `transaction/my-transactions/${numberAccount}`,
                method: 'GET',
            }),
            transformResponse: (response) => response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),

        }),

    })
})

export const { useTransferMutation, useGetTransfersByUserQuery } = transactionApi;