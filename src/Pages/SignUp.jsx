import React from 'react'
import img1 from "../assets/Logo1.png"

export const SignUp = () => {
    return (

        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src={img1} alt="" className='mx-auto w-20 h-10' />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to your account</h2>
                </div>

                {/* First Name tab */}

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                            <div className="mt-2">
                                <input id="FirstName" name="FirstName" type="String" placeholder='Enter Your First Name' required className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        {/* Last name tab */}

                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                            <div className="mt-2">
                                <input id="LastName" name="LastName" type="String" placeholder='Enter Your Last Name' required className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        {/* Email address tab */}

                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" placeholder='Enter Your Email' required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        {/* Password tab */}

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                {/* <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div> */}
                            </div>
                            <div className="mt-2">
                                <input id="password" placeholder='Enter Your Password' name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        {/* confirm password tab */}

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                                {/* <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div> */}
                            </div>


                            <div className="mt-2">
                                <input id="ConfirmPass" name="ConfirmPass" type="password" placeholder='Confirm Password' required className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                        </div>
                    </form>

                   
                </div>
            </div>
        </div>
    )
}
