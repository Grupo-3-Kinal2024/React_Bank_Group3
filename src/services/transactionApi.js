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
        deposit: builder.mutation({
            query: (data) => ({
                url: 'transaction/deposit',
                method: 'POST',
                body: data
            })
        }),
        getAdminTransactions: builder.query({
            query: (id) => ({
                url: `transaction/admin-deposit/${id}`,
                method: 'GET'
            })
        })
    })
})

export const { useTransferMutation, useDepositMutation, useGetAdminTransactionsQuery } = transactionApi;