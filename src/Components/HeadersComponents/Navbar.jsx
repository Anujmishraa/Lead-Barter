import React from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo1.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/operations/authAPI';
import ProfileDropdown from './ProfileDropdown';

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    let path = location.pathname
    console.log("path : ", location.pathname.split('/'));
    const { user } = useSelector((state) => state.profile)
    console.log("User : ", user)
    return (
        <div className=' bg-white border-b border-[0.1] border-pure-greys-50'>
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={Logo} alt="" className='w-[4rem]' />
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to={"/"} className={`mr-5 hover:text-blue-700 text-xl cursor-pointer ${path === "/" ? "text-blue-700" : ""} `}>Home</Link>
                        <Link to={"/Courses"} className={`mr-5 cursor-pointer text-xl hover:text-blue-700 ${path === "/Courses" ? "text-blue-700" : ""} `}>Courses</Link>
                        <Link to={"/AboutUs"} className={`mr-5 cursor-pointer text-xl hover:text-blue-700 ${path === "/AboutUs" ? "text-blue-700" : ""} `}>About</Link>
                        <Link to={"/ContactUs"} className={`mr-5 cursor-pointer text-xl hover:text-blue-700 ${path === "/ContactUs" ? "text-blue-700" : ""}`}>Contact Us</Link>
                    </nav>
                    {user ?
                        (<>
                            {/* <ProfileDropdown/> */}
                            <div className='' onClick={() => navigate("/dashboard/my-profile")} title='Dashboard'><img src={user?.image} className=' w-[2.7rem] rounded-full ' alt="" /></div>
                            <div className=' w-8 ml-5'>
                                <button className="Btn" onClick={() => dispatch(logout(navigate))}>
                                    <div class="sign">
                                        <svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                                        </svg>
                                    </div>
                                    <div class="text">Logout</div>
                                </button>
                            </div>
                        </>) :
                        (<>
                            <div className='h-8 w-[5.6rem] '>
                                <button className=" button2 inline-flex items-center bg-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-3" onClick={() => navigate("/Login")}>Sign In

                                </button>
                            </div>

                            <div className='h-8 w-[6.5rem]'>
                                <button className=" ml-5 button2 inline-flex items-center bg-gray-100  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => navigate("/SignUp")}>Sign Up
                                </button>
                            </div>
                        </>)}
                </div>
            </header>
        </div>
    )
}
