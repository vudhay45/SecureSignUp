import React, { useState } from 'react';
import ProfileCreation from './ProfileCreation';

const SignUpPage = () => {
    const [profileCreation, setProfileCreation] = useState(false);
    
    const handleClick = (event) => {
        event.preventDefault(); // Prevent form submission
        setProfileCreation(true);
    };

    if (profileCreation) {
        return <ProfileCreation />;
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Side */}
            <div className=" md:w-3/10 bg-[#F3D189] p-8 flex flex-col justify-between items-center md:items-start">
                <div>
                    <h1 className="text-2xl text-[#a52a2a] font-cursive">𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒</h1>
                    <p className="text-3xl text-[#a52a2a] font-bold">Discover the world's top<br />
                        <span className="text-brown">Designers & Creatives.</span>
                    </p>
                </div>
                <div className="flex justify-center md:justify-start">
                    <div className="max-w-xs md:max-w-md mx-auto">
                        <img src="/static/loginleft.png" alt="Art by Artist" className="w-full h-auto" />
                    </div>
                </div>
                <div>
                    <p className="text-xs text-[#a52a2a]">Art by <span className="text-brown underline">Peter Tarka</span></p>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:flex-1 flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <div className="flex justify-end mb-8">
                        <a href="/signin" className="text-black">Already a member? <span className="text-blue-500">Sign in</span></a>
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign up to Dribbble</h2>
                    <form>
                        <div className="flex flex-col md:flex-row justify-between mb-4">
                            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-2">
                                <label className="block text-lg mb-2" htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Name" className="w-full p-2 border border-gray-300 bg-[#f0f5f5] rounded" />
                            </div>
                            <div className="w-full md:w-1/2 md:ml-2">
                                <label className="block text-lg mb-2" htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="Username" className="w-full p-2 border border-gray-300 bg-[#f0f5f5] rounded" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Email" className="w-full p-2 border border-gray-300 bg-[#f0f5f5] rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg mb-2" htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="6+ characters" className="w-full p-2 border border-gray-300 bg-[#f0f5f5]" />
                        </div>
                        <div className="flex items-center mb-6">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-sm">
                                Creating an Account means you're okay with our <a href="#" className="text-blue-500">Terms of Service</a>, <a href="#" className="text-blue-500">Privacy Policy</a>, and default <a href="#" className="text-blue-500">Notification Settings</a>.
                            </label>
                        </div>
                        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded-lg" onClick={handleClick}>
                            Create Account
                        </button>
                    </form>
                    <p className="text-sm text-gray-700 mt-4">
                        This site is protected by reCAPTCHA and Google <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Service</a> apply.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
