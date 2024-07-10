import { useTransferMutation } from "../services/transactionApi";
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

    return {
        transfer: handleTransfer,
    }

}

export default useTransaction;