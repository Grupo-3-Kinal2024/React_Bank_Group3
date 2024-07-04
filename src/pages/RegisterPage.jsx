import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {

        console.log(data);
    };

    return (
        <>
            <Navbar />
            <div className="py-5 flex  items-center justify-center  content-center">
                <div className="bg-gray-100 p-8 rounded-lg max-w-xl w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign up</h2>
                    <p className="text-center text-gray-600 mb-6">Join the community today!</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="dpi">DPI</label>
                            <input type="text" id="dpi" {...register("dpi", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.dpi && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input type="text" id="name" {...register("name", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" {...register("lastName", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                {errors.lastName && <span className="text-red-500">This field is required</span>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="userName">Username</label>
                            <input type="text" id="userName" {...register("userName", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.userName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" {...register("email", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                                <input type="password" id="password" {...register("password", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                                <input type="text" id="phone" {...register("phone", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                {errors.phone && <span className="text-red-500">This field is required</span>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
                            <input type="text" id="address" {...register("address", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.address && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="jobName">Job Name</label>
                            <input type="text" id="jobName" {...register("jobName", { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.jobName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none">Sign up</button>
                    </form>
                    <div className="text-center mt-6">
                        <p className="text-gray-600">Already a member? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
