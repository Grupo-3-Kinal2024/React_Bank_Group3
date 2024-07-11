import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllUserQuery, useEditUserMutation } from '../services/userApi'
import { updateCredentials } from '../feature/userSlice';
import toast from "react-hot-toast";

const useUser = () => {
    const dispatch = useDispatch();
    const [editUser] = useEditUserMutation()


    const handleError = (err) => {
        console.log(err);
        const errorMessage = err?.data?.errors?.[0]?.msg
            || err?.data
            || err?.data?.error
            || 'An error occurred, please try again';
        toast.error(errorMessage);
    };


    const getAllUsers = (id) => {
        const { data, error, isLoading, refetch } = useGetAllUserQuery();

        if (error) handleError(error);
        console.log("REFETCH IN USER", refetch);
        return { data, isLoading, refetch };
    };

    const handlerEditUser = async (data) => {
        try {
            const edit = await editUser(data).unwrap();
            dispatch(updateCredentials(edit));
            toast.success('User update successfully');
        } catch (error) {
            handleError(error);
        }
    }

    return {
        getAllUsers,
        edit: handlerEditUser
    }
}

export default useUser