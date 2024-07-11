import React, { useEffect } from 'react';
import useUser from '../../hook/useUser';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Accounts = () => {
    const { getAllUsers } = useUser();
    const { data, isLoading, refetch } = getAllUsers();
    const [ascendingOrder, setAscendingOrder] = useState(true);

    useEffect(() => {
        refetch();
    }, [refetch]);

    if (isLoading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    let sortedUsers = [...data];

    sortedUsers.sort((a, b) => {
        const totalTransactionsA = a.accounts.reduce((sum, account) => sum + account.numberTransactions, 0);
        const totalTransactionsB = b.accounts.reduce((sum, account) => sum + account.numberTransactions, 0);
        if (ascendingOrder) {
            return totalTransactionsA - totalTransactionsB; // Ascendente
        } else {
            return totalTransactionsB - totalTransactionsA; // Descendente
        }
    });

    const toggleOrder = () => {
        setAscendingOrder(!ascendingOrder);
    };

    return (
        <div className="p-8 mb-16 relative">
            <div className='mb-6'>
                <h1 className='text-center font-bold text-4xl'>All Accounts</h1>
            </div>
            <div className=" text-center">
                <button onClick={toggleOrder} className="btn bg-blue-400 text-gray-100">
                    {ascendingOrder ? "Ascending sort (Switch)" : "Descending sort (Switch)"}
                </button>
            </div>
            <div className="bg-white rounded-3xl max-w-7xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mx-auto mt-12">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Credit</th>
                                <th>Number Account</th>
                                <th>Status</th>
                                <th>Owner</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedUsers.map((user, userIndex) =>
                                user.accounts.map((account, accountIndex) => (
                                    <tr key={account._id}>
                                        <td>{account.credit}</td>
                                        <td>{account.numberAccount}</td>
                                        <td>{account.status ? "Active" : "Inactive"}</td>
                                        <td>{user.name} {user.lastName}</td>
                                        <td>
                                            <Link to={`../accounts/details/${account._id}`} className='link link-primary'>
                                                Details
                                            </Link>
                                        </td>
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