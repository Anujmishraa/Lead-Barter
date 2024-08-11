import React, { useEffect, useState } from 'react'
import Ba from "../assets/HRMS Flyer.png"
import medical from "../assets/Medical Coding.png"
import Epp from "../assets/EPP Flyer.png"
import business from "../assets/BA Flyer.png"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCourses } from "../services/operations/courseDetailsAPI"
import { BuyCourse } from '../services/operations/studentFeaturesAPI'
import { addToCart } from '../redux/slices/cartSlice'

export const CourseComponents = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token} = useSelector((state) => state.auth)
    const {user} = useSelector((state) => state.profile)
    const [courses, setCourses] = useState([])

    const getCourses = async () => {
        const data = await getAllCourses();
        console.log("Data : ", data);
        setCourses(data);
    }

    useEffect(() => {
        getCourses()
    }, [])

    const buyhandler = (id) => {
        BuyCourse(token, [id], user, navigate, dispatch)
    }
    return (
        // <>
        // <div className='flex gap-20 w-9/12 mx-auto my-5 shadow p-5'>

        //     <div className='p-3 bg-blue-400 '>
        //         <img src={Ba} alt="" width={300} className='courseImg duration-200' />
        //     </div>

        //     <div className=''>
        //         <h2 className='text-center mt-5 text-3xl font-semibold'>
        //             Course Descriptions
        //         </h2>

        //         <div className='mt-10'>
        //             <p className='font-semibold'>Certification in HRMS.</p>
        //             Enhance your HR expertise with our Certification in HRMS.
        //             <br />This course covers key areas including:<br />
        //             <ol className='list-decimal list-inside space-y-2 ml-5' >
        //                 <li>
        //                     Recruitment and Selection
        //                 </li>
        //                 <li>
        //                     HR Operations
        //                 </li>
        //                 <li>
        //                     Learning and Development
        //                 </li>
        //                 <li>
        //                     Employee Engagement
        //                 </li>
        //                 <li>
        //                     Performance Management System
        //                 </li>
        //                 <li>
        //                     Legal Compliance
        //                 </li>
        //                 <li>
        //                     Payroll Management/Compensation and Benefits
        //                 </li>


        //             </ol>
        //             Equip yourself with the skills to effectively manage HR functions and drive organizational success.
        //         </div>

        //         <div className=' flex gap-5 my-5'>
        //             <button className=' bg-blue-600 px-3 py-1 hover:bg-blue-700 outline outline-blue-400 text-white rounded text-lg'>Add to Cart</button>
        //             <button className=' bg-blue-600 px-3 py-1 hover:bg-blue-700 outline outline-blue-400 text-white rounded text-lg'>Buy now</button>
        //         </div>
        //     </div>

        // </div>

        //     <div className='flex flex-row-reverse gap-40 w-9/12 mx-auto my-5 shadow p-5'>

        //         <div className='p-3 bg-blue-400'>
        //             <img src={Epp} alt="" width={300} className='courseImg duration-200' />
        //         </div>

        //         <div className=''>
        //             <h2 className='text-center mt-5 text-3xl font-semibold'>
        //                 Course Information
        //             </h2>

        //             <div className='mt-10'>
        //                 <p className='font-semibold'>Mastering Professional English.</p>
        //                 Enhance your HR expertise with our Certification in HRMS.
        //                 <br />This course covers key areas including:<br />
        //                 <ol className='list-decimal list-inside space-y-2 ml-5' >
        //                     <li>
        //                         Enhance workplace communication with comprehensive learning.
        //                     </li>
        //                     <li>
        //                         Learn essentials of professional English.
        //                     </li>
        //                     <li>
        //                         Master writing professional emails and reports.
        //                     </li>
        //                     <li>
        //                         Refine presentation abilities.
        //                     </li>
        //                     <li>
        //                         Gain expertise in conducting effective meetings.
        //                     </li>
        //                     <li>
        //                         Learn negotiation, networking, and socializing skills.
        //                     </li>
        //                     <li>
        //                         Craft persuasive proposals and business plans.
        //                     </li>
        //                     <li>
        //                         Excel in job applications and interviews.
        //                     </li>
        //                     <li>
        //                         Conclude with a review and future learning strategies.
        //                     </li>
        //                 </ol>
        //             </div>
        //         </div>

        //     </div>

        //     <div className='flex gap-20 w-9/12 mx-auto my-5 shadow p-5'>
        //         <div className='p-3 bg-blue-400 '>
        //             <img src={medical} alt="" width={300} className='courseImg duration-200' />
        //         </div>
        //         <div className=''>
        //             <h2 className='text-center mt-5 text-3xl font-semibold'>
        //                 Course Information
        //             </h2>
        //             <div className='mt-10'>
        //                 <p className='font-semibold'>Medical Coding</p>
        //                 Advance your healthcare career with our Learn Medical Coding course.<br />
        //                 <ol className='list-decimal list-inside space-y-2 ml-5' >
        //                     <li>
        //                         Acquire essential skills in accurately translating medical records into standardized codes.
        //                     </li>
        //                     <li>
        //                         Ensure efficient and precise billing processes.
        //                     </li>
        //                     <li>
        //                         Ideal for those seeking to enter the medical coding field or enhance current expertise.
        //                     </li>
        //                     <li>
        //                         Become proficient in medical coding.
        //                     </li>
        //                     <li>
        //                         Boost your career prospects.
        //                     </li>
        //                 </ol>
        //             </div>
        //         </div>
        //     </div>

        //     <div className='flex flex-row-reverse gap-40 w-9/12 mx-auto my-5 shadow p-5'>
        //         <div className='p-3 bg-blue-400 '>
        //             <img src={business} alt="" width={300} className='courseImg duration-200' />
        //         </div>
        //         <div className=''>
        //             <h2 className='text-center mt-5 text-3xl font-semibold'>
        //                 Course Information
        //             </h2>
        //             <div className='mt-10'>
        //                 <p className='font-semibold'>Learn Business Analysis</p>
        //                 Boost your career with our Learn Business Analysis course:<br />
        //                 <ol className='list-decimal list-inside space-y-2 ml-5' >
        //                     <li className='font-semibold'>
        //                         Gain essential skills in: Understanding business needs.
        //                     </li>
        //                     <li>
        //                         Identifying solutions.
        //                     </li>
        //                     <li>
        //                         Driving successful project outcomes.
        //                     </li>
        //                     <li className='font-semibold'>
        //                         Ideal for: Aspiring business analysts.
        //                     </li>
        //                     <li>
        //                         Professionals looking to enhance their analytical capabilities.
        //                     </li>
        //                     <li>
        //                         Master the art of business analysis.
        //                     </li>
        //                     <li>
        //                         Propel your career forward.
        //                     </li>
        //                 </ol>
        //             </div>
        //         </div>
        //     </div>
        // </>

        <>
            <div className=' bg-white'>{
                courses.map((item, index) => (
                    <div className={`flex ${index%2 === 0 ? "" : "flex-row-reverse"} gap-20 w-9/12 mx-auto mb-5 shadow p-5`}>
                        <div className='p-3 bg-blue-400 '>
                            <img src={item?.thumbnail} alt="" width={300} className='courseImg duration-200' />
                        </div>
                        <div className=''>
                            <h2 className='text-center mt-2 text-3xl font-semibold'>
                                Course Descriptions
                            </h2>

                            <div className='mt-5'>
                                <p className='font-semibold'>{item?.courseName}</p>
                                {item?.courseDescription}
                                <br />This course covers key areas including:<br />
                                <ol className='list-decimal list-inside space-y-2 ml-5' >
                                    {
                                        item?.keyAreas.map((d) => (
                                            <li>
                                               {d}
                                            </li>
                                        ))
                                    }
                                </ol>
                                {item?.subDescription}
                            </div>

                            <div className=' flex gap-5 my-5'>
                                <button className=' bg-blue-600 px-3 py-1 hover:bg-blue-700 outline outline-blue-400 text-white rounded text-lg'onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                                <button className=' bg-blue-600 px-3 py-1 hover:bg-blue-700 outline outline-blue-400 text-white rounded text-lg' onClick={() => buyhandler(item?._id)}>Buy now</button>
                                <div className=' text-xl font-semibold text-blue-500'>
                                    ₹<span>{item?.price}</span>
                                </div>
                                <del className=' text-xl font-semibold text-blue-500'>
                                    ₹<span>{item?.price + 2000}</span>
                                </del>
                            </div>
                        </div>

                    </div>
                ))
            }
            </div>
        </>
    )
}
