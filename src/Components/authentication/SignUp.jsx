import React, { useState } from 'react';
import img1 from "../../assets/Logo1.png";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { sendOtp } from '../../services/operations/authAPI';
import { setSignupData } from '../../redux/slices/authSlice';

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: '',
        confirmPassword: '',
    });

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    console.log("FormData:", formData);

    const submitHandler = (e) => {
        console.log("Inside submit function signup");
        e.preventDefault();
        dispatch(setSignupData(formData));
        dispatch(sendOtp(formData.email, navigate));
    };

    return (

        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={img1} alt="Logo" className='mx-auto w-20 h-10' />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submitHandler} className="space-y-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                            <div className="mt-2">
                                <input id="firstName" name="firstName" type="text" onChange={handleFormData} placeholder='Enter Your First Name' required className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                            <div className="mt-2">
                                <input id="lastName" name="lastName" type="text" onChange={handleFormData} placeholder='Enter Your Last Name' required className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" onChange={handleFormData} autoComplete="email" placeholder='Enter Your Email' required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" onChange={handleFormData} placeholder='Enter Your Password' autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleFormData} placeholder='Confirm Password' required className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
