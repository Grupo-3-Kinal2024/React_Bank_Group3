import { useTransferMutation, useGetTransfersByUserQuery } from "../services/transactionApi";
import toast from "react-hot-toast";

const useTransaction = () => {

    const [transfer] = useTransferMutation();

    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage.error);
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
    }

}

export default useTransaction;