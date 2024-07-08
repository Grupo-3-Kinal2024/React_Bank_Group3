import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import accountImg from '../assets/img/account.jpg'
import useAccount from '../hook/useAccount';
import useAuth from '../hook/useAuth';

export const AccountPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createAccount, loading } = useAccount();
    const { user } = useAuth();

    const onSubmit = (data) => {
        console.log("Info tomada directamente: ", data);
        data.idUser = user.id;
        console.log("Info con id: ", data);
        createAccount(data)
    };

    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gray-100 py-12">
                <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl flex">
                    <div className="hidden lg:block w-1/2 p-8">
                        <img src={accountImg} alt="Illustration" className="w-full h-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 p-8">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
                        <p className="text-center text-gray-600 mb-8">Fill in the details to create a new account</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="salary">What is your salary?</label>
                                <input placeholder='(GTQ)' type="number" id="salary" {...register("salary", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
                                {errors.salary && <span className="text-red-500">This field is required</span>}
                            </div>


                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2" htmlFor="credit">Open your Account whit...</label>
                                <select id="credit" {...register("credit", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
                                    <option selected disabled>Selecciona en GTQ</option>
                                    <option value={250}>Q250.00</option>
                                    <option value={200}>Q200.00</option>
                                    <option value={100}>Q100.00</option>
                                </select >
                                {errors.credit && <span className="text-red-500">This field is required</span>}
                            </div>

                            <div className="flex items-center mb-6">
                                <input type="checkbox" id="terms" {...register("terms", { required: true })} className="mr-2" />
                                <label htmlFor="terms" className="text-gray-700">I agree to the terms and conditions</label>
                                {errors.terms && <span className="text-red-500">This field is required</span>}
                            </div>

                            <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountPage;