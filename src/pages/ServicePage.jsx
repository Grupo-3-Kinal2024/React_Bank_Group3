import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { useForm } from 'react-hook-form';

const ServicePage = () => {
    const services = [
        { id: 1, name: 'EEGSA', description: 'Pay your electricity bill', img: 'https://www.construguate.com/wp-content/uploads/2020/04/315.jpg' },
        { id: 2, name: 'EMPAGUA', description: 'Pay your water bill', img: 'https://lahora.gt/wp-content/uploads/sites/5/2020/05/Empagua.jpg' },
        { id: 3, name: 'TELGUA', description: 'Pay your phone bill', img: 'https://guateportsquetzal.com/wp-content/uploads/2019/06/logoClaro-358x184.png' },
        { id: 4, name: 'Tigo', description: 'Recharge your mobile phone', img: 'https://www.bitrefill.com/content/cn/b_rgb%3AFFFFFF%2Cc_pad%2Ch_720%2Cw_1280/v1676481894/tigo-bill-el-salvador-newlogo.webp' },
        { id: 5, name: 'SAT', description: 'Pay your taxes', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_SAT_Guatemala.svg/2560px-Logo_SAT_Guatemala.svg.png' }
    ];

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedService, setSelectedService] = useState(null);

    const handleOpenModal = (service) => {
        setSelectedService(service);
        document.getElementById('my_modal_1').showModal();
    };

    const onSubmit = async (data) => {
        console.log(data);
        document.getElementById('my_modal_1').close();
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center py-10">
                {services.map(service => (
                    <div key={service.id} className="bg-gray-800 text-white rounded-2xl w-96 shadow-xl m-4 overflow-hidden">
                        <figure className="flex justify-center items-center h-64 px-10 pt-10">
                            <img
                                src={service.img}
                                alt={service.name}
                                className="rounded-xl max-h-full"
                            />
                        </figure>
                        <div className="bg-white text-gray-800 card-body items-center text-center p-6 rounded-b-2xl">
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.description}</p>
                            <div className="card-actions mt-4">
                                <button
                                    onClick={() => handleOpenModal(service)}
                                    className="btn bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-gray-800">Payment for {selectedService?.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <div className="modal-content">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="amount">Amount</label>
                                <input
                                    type="number"
                                    id="amount"
                                    {...register("amount", { required: true })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.amount && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="uniqueField">
                                    {selectedService?.name === 'TELGUA' ? 'Phone Number' : selectedService?.name === 'Tigo' ? 'Mobile Number' : selectedService?.name === 'SAT' ? 'NIT' : 'Counter number'}
                                </label>
                                <input
                                    type={selectedService?.name === 'TELGUA' || selectedService?.name === 'Tigo' ? 'tel' : 'text'}
                                    id="uniqueField"
                                    {...register("uniqueField", { required: true })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.uniqueField && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="modal-action">
                                <button
                                    className="btn bg-gray-400 hover:bg-gray-300 text-black px-6 py-2 rounded-md"
                                    onClick={() => document.getElementById('my_modal_1').close()}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
                                >
                                    Confirm Payment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default ServicePage;
