import { useTransferMutation, useGetTransfersByUserQuery, useDepositMutation, useGetAdminTransactionsQuery } from "../services/transactionApi";

import toast from "react-hot-toast";

const useTransaction = () => {

    const [transfer] = useTransferMutation();
    const [createDeposit] = useDepositMutation();


    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage.error || errorMessage);
    };

    const handleTransfer = async (data, reset) => {
        try {
            await transfer(data).unwrap();
            reset()
            toast.success('Transfer Successful');
        } catch (err) {
            handleError(err);
        }
    }

    const handlerCreateDeposit = async (data, reset) => {
        try {
            await createDeposit(data).unwrap();
            reset();
            toast.success("Deposit Created Successfully");
        } catch (err) {
            handleError(err);
        }
    }

    const getAdminTransactionsUse = (id) => {
        console.log("ID: ", id);
        const { data, error, isLoading, refetch } = useGetAdminTransactionsQuery(id);
        console.log("REFETCH IN USER", refetch);
        if (error) handleError(error);
        return { data, isLoading, refetch };

    }


    const getTransfersByUser = (numberAccount) => {
        const { data, error, isLoading, refetch } = useGetTransfersByUserQuery(numberAccount, {
            skip: !numberAccount,
        });

        if (error) handleError(error);

        return { data, isLoading, refetch };
    };


    return {
        getTransfersByUser,
        transfer: handleTransfer,
        createDeposit: handlerCreateDeposit,
        getAdminTransactionsUse
    }

}

export default useTransaction;