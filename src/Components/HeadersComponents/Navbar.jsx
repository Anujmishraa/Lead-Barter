import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo1.png'

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header className="text-gray-600 body-font shadow mb-1">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={Logo} alt="" className='w-[4rem]'/>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to={"/"} className="mr-5 hover:text-blue-700 text-xl cursor-pointer ">Home</Link>
                        <Link to={"/Courses"} className="mr-5 cursor-pointer text-xl hover:text-blue-700 ">Courses</Link>
                        <Link to={"/AboutUs"} className="mr-5 cursor-pointer text-xl hover:text-blue-700 ">About</Link>
                        <Link to={"/ContactUs"} className="mr-5 cursor-pointer text-xl hover:text-blue-700 ">Contact Us</Link>
                    </nav>
                    <button className=" button2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-3" onClick={()=> navigate("/Login")}>Sign In 
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg> */}
                        
                    </button>
                    <button className="button2 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={()=> navigate("/SignUp")}>Sign Up
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg> */}
                    </button>
                </div>
            </header>
        </div>
    )
}
