import { useForm } from 'react-hook-form';
import useUser from '../../hook/useUser.js';

const UsersCreated = () => {

    const { register: formRegister, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { register } = useUser();

    return 



}

export default UsersCreated;