import { useCreateMutation } from '../services/accountApi';
import toast from 'react-hot-toast';

const useAccount = () => {
    //const navigate = useNavigate();

    const [createAccount] = useCreateMutation();

    const handlerCreateAccount = async (data) => {
        try {
            console.dir(data);   //DEBUG
            await createAccount(data)
            //navigate('/'); //Aquí va el Dashboard de la cuenta bancaria
            toast.success('Account Created Successfully');
        } catch (err) {
            console.log(err);
            const errorMessage = err?.data?.errors?.[0]?.msg
                || err?.data
                || err?.data.error
                || 'An error occurred, please try again';
            toast.error(errorMessage);
        }
    }

    return {
        createAccount: handlerCreateAccount,
    }

}

export default useAccount;