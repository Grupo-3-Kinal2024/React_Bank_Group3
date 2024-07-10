import React, { useEffect } from 'react';
import useUser from '../../hook/useUser';


const Accounts = () => {
    const { getAllUsers } = useUser();
        const { data, isLoading, refetch } = getAllUsers();
        console.log("🚀 ~ Accounts ~ data:", data);

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isLoading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div className="p-8 mb-16">
            <div className='mb-6'>
                <h1 className='text-center font-bold text-4xl'>Accounts</h1>
            </div>
            <div className="bg-white rounded-3xl max-w-7xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Credit</th>
                                <th>Number Account</th>
                                <th>Status</th>
                                <th>Owner</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user, userIndex) =>
                                user.accounts.map((account, accountIndex) => (
                                    <tr key={account._id}>
                                        <th>{userIndex + 1}.{accountIndex + 1}</th>
                                        <td>{account.credit}</td>
                                        <td>{account.numberAccount}</td>
                                        <td>{account.status ? "Active" : "Inactive"}</td>
                                        <td>{user.name} {user.lastName}</td>
                                        <td><a className='link link-primary'>Details</a></td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Accounts;
