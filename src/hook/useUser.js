import React from 'react'
import { useGetAllUserQuery } from '../services/userApi'
import toast from "react-hot-toast";

const useUser = () => {

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
    return {
        getAllUsers
    }
}

export default useUser