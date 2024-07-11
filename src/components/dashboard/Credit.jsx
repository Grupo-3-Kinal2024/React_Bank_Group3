import React, { useEffect } from 'react';
import useUser from '../../hook/useUser';
import useAuth from '../../hook/useAuth';
import { CardCredit } from '../common/CardCredit';

const Credit = () => {
    const { user } = useAuth();
    const userId = user?.id || user?._id; // Handle both cases for user ID

    console.log("🚀 ~ Credit ~ userId:", userId);

    const { getUserById } = useUser();
    const { data, isLoading, refetch } = getUserById(userId); // Pass the correct userId

    useEffect(() => {
        if (userId) {
            console.log("Entra");
            refetch();
        }
    }, [refetch, userId]); // Add userId as a dependency

    if (isLoading) return <div>cargando</div>;

    return (
        <div className='flex flex-col items-center my-6'>
            <div className="w-full px-6 mb-6">
                <div className="mt-6">
                    <h2 className="text-gray-600">Welcome back,</h2>
                    <h2 className="text-2xl font-semibold text-gray-900">{`${user?.name} ${user?.lastName}`}</h2>
                </div>
            </div>

            <div className="w-full max-w-lg px-6">
                {data?.map((user, userIndex) =>
                    user.accounts?.map((account, accountIndex) => (
                        <CardCredit key={`${userIndex}-${accountIndex}`} account={account} user={user} index={accountIndex} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Credit;
