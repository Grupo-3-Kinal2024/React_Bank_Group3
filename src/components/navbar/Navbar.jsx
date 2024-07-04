import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-white shadow-lg">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="mr-6">
                        <img className="h-10" src="path/to/logo.png" alt="Logo" />
                    </div>
                    <div className="text-xl font-semibold">E-bank</div>
                </div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-black focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            {sidebarOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {!sidebarOpen && (
                    <div className="hidden lg:flex lg:items-center space-x-4">
                        <a href="#" className="text-black text-lg hover:underline">About us</a>
                        <a href="#" className="text-black text-lg hover:underline">Features</a>
                        <button><Link to={`/Login/`} className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Log In</Link></button>
                        <button><Link to={`/Register/`} className="bg-gray-400 text-black px-4 py-2 rounded-md hover:bg-gray-300">Sign Up</Link></button>
                    </div>
                )}
            </div>

            {sidebarOpen && (
                <div className="lg:hidden mt-2">
                    <div className="bg-gray-700 text-white p-4">
                        <a href="#" className="block text-sm font-medium hover:text-gray-300 py-2">About us</a>
                        <a href="#" className="block text-sm font-medium hover:text-gray-300 py-2">Features</a>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Log In</button>
                        <button className="bg-gray-400 text-black px-4 py-2 rounded-md hover:bg-gray-300">Sign Up</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
