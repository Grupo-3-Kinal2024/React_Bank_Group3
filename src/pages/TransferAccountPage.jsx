import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import transferImg from '../assets/img/transfer.jpg';

export const TransferAccountPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gray-100 py-12">
                <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl flex flex-col lg:flex-row">
                    <div className="w-full p-2 flex items-center justify-center">
                        <img src={transferImg} alt="Illustration" className="w-full h-auto max-w-sm object-center object-cover" />
                    </div>
                    <div className="w-full p-8 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Transfer Funds</h2>
                        <p className="text-center text-gray-600 mb-8">Fill in the details to transfer funds</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="destinationAccount">Destination Account</label>
                                <input type="number" id="destinationAccount" {...register("destinationAccount", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                {errors.destinationAccount && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="amount">Amount</label>
                                <input type="number" id="amount" {...register("amount", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                {errors.amount && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
                                <textarea id="description" {...register("description", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                {errors.description && <span className="text-red-500">This field is required</span>}
                            </div>
                            <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">Transfer</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransferAccountPage;
