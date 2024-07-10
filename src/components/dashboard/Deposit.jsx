import { useForm } from 'react-hook-form';
import { ComboBox } from '../common/ComboBox';
import { useEffect } from 'react';
import Input from '../common/Input';
import useTransaction from '../../hook/useTransaction.js';
import useAuth from '../../hook/useAuth.js';

const Deposit = () => {

    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createDeposit, loading, getAdminTransactionsUse } = useTransaction();
    const { data, isLoading, refetch } = getAdminTransactionsUse(user.id);
    console.log("Data simple in page: ", data);

    const onSubmit = (data) => {
        data.adminId = user.id;
        createDeposit(data, reset)
    };

    return (
        <>
            <div className=" flex flex-col items-center justify-center overflow-y-scroll min-h-[calc(100vh-64px)] antialiased">
                <div className="w-full max-w-4xl flex">
                    <div className="hidden lg:block w-1/2 p-8">



                        <div className="p-8 mb-16">
                            <div className='mb-6'>
                                <h1 className='text-center font-bold text-4xl'>Deposits whit my</h1>
                            </div>
                            <div className="bg-white rounded-3xl max-w-7xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mx-auto">
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra w-full">
                                        <thead>
                                            <tr>
                                                <th>Destination Account</th>
                                                <th>Date</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {console.log(data)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="w-full lg:w-1/2 p-8">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">To Deposit</h2>
                        <p className="text-center text-gray-600 mb-8">Complete the fields to make the deposit</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <Input
                                    type="text"
                                    label="Insert The account number"
                                    name="destinationAccount"
                                    color="text-gray-700"
                                    placeholder="Type eight digits"
                                    register={register}
                                    rules={{ required: 'Enter the account number' }}
                                    error={errors.numberAccount}
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="number"
                                    label="Amount to deposit"
                                    name="amount"
                                    color="text-gray-700"
                                    placeholder="(GTQ)"
                                    register={register}
                                    rules={{ required: 'Enter the amount' }}
                                    error={errors.amount}
                                />
                            </div>

                            <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                {loading ? "Loading..." : "Deposit Money"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Deposit;