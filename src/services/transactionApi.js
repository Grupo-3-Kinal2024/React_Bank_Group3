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
    })
})

export const { useTransferMutation } = transactionApi;