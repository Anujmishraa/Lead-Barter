import React from 'react'
import Ba from "../assets/HRMS Flyer.png"
import medical from "../assets/Medical Coding.png"
import Epp from "../assets/EPP Flyer.png"
import business from "../assets/BA Flyer.png"

export const CourseComponents = () => {
    return (
        <>
        <div className='flex gap-20 w-9/12 mx-auto my-5 shadow p-5'>

            <div className='p-3 bg-blue-400 '>
                <img src={Ba} alt="" width={300} className='courseImg duration-200' />
            </div>

            <div className=''>
                <h2 className='text-center mt-5 text-3xl font-semibold'>
                    Course Information
                </h2>

                <div className='mt-10'>
                    <p className='font-semibold'>Certification in HRMS.</p>
                    Enhance your HR expertise with our Certification in HRMS. 
                    <br/>This course covers key areas including:<br/>
                    <ol className='list-decimal list-inside space-y-2 ml-5' >
                        <li>
                        Recruitment and Selection
                        </li>
                        <li>
                        HR Operations
                        </li>
                        <li>
                        Learning and Development
                        </li>
                        <li>
                        Employee Engagement
                        </li>
                        <li>
                        Performance Management System
                        </li>
                        <li>
                        Legal Compliance
                        </li>
                        <li>
                        Payroll Management/Compensation and Benefits
                        </li>


                    </ol>
                    Equip yourself with the skills to effectively manage HR functions and drive organizational success.
              
                    
                </div>
            </div>

        </div>

        <div className='flex flex-row-reverse gap-40 w-9/12 mx-auto my-5 shadow p-5'>

            <div className='p-3 bg-blue-400'>
                <img src={Epp} alt="" width={300}  className='courseImg duration-200' />
            </div>

            <div className=''>
                <h2 className='text-center mt-5 text-3xl font-semibold'>
                    Course Information
                </h2>

                <div className='mt-10'>
                    <p className='font-semibold'>Mastering Professional English.</p>
                    Enhance your HR expertise with our Certification in HRMS. 
                    <br/>This course covers key areas including:<br/>
                    <ol className='list-decimal list-inside space-y-2 ml-5' >
                     <li>
                     Enhance workplace communication with comprehensive learning.
                     </li>

                     <li>
                     Learn essentials of professional English.
                     </li>

                
                     <li>
                     Master writing professional emails and reports.
                     </li>

                     <li>
                     Refine presentation abilities.
                     </li>

                     <li>
                     Gain expertise in conducting effective meetings.
                     </li>

                     <li>
                     Learn negotiation, networking, and socializing skills.
                     </li>

                     <li>
                     Craft persuasive proposals and business plans.
                     </li>

                     <li>
                     Excel in job applications and interviews.
                     </li>

                     <li>
                     Conclude with a review and future learning strategies.
                     </li>

                    </ol>
  








                    
                </div>
            </div>

        </div>

        <div className='flex gap-20 w-9/12 mx-auto my-5 shadow p-5'>

            <div className='p-3 bg-blue-400 '>
                <img src={medical} alt="" width={300} className='courseImg duration-200' />
            </div>

            <div className=''>
                <h2 className='text-center mt-5 text-3xl font-semibold'>
                    Course Information
                </h2>

                <div className='mt-10'>
                    <p className='font-semibold'>Medical Coding</p>
                    Advance your healthcare career with our Learn Medical Coding course.<br/>
                    <ol className='list-decimal list-inside space-y-2 ml-5' >
                        <li>
                        Acquire essential skills in accurately translating medical records into standardized codes.
                        </li>
                        <li>
                        Ensure efficient and precise billing processes.
                        </li>
                        <li>
                        Ideal for those seeking to enter the medical coding field or enhance current expertise.
                        </li>
                        <li>
                        Become proficient in medical coding.
                        </li>
                        <li>
                        Boost your career prospects.
                        </li>

                    </ol>
                </div>
            </div>

        </div>

        <div className='flex flex-row-reverse gap-40 w-9/12 mx-auto my-5 shadow p-5'>

<div className='p-3 bg-blue-400 '>
    <img src={business} alt="" width={300} className='courseImg duration-200' />
</div>

<div className=''>
    <h2 className='text-center mt-5 text-3xl font-semibold'>
        Course Information
    </h2>

    <div className='mt-10'>
        <p className='font-semibold'>Learn Business Analysis</p>
        Boost your career with our Learn Business Analysis course:<br/>
        <ol className='list-decimal list-inside space-y-2 ml-5' >
            <li className='font-semibold'>
            Gain essential skills in: Understanding business needs.
            </li>
           
            <li>
            Identifying solutions.
            </li>
            <li>
            Driving successful project outcomes.
            </li>
            <li className='font-semibold'>
            Ideal for: Aspiring business analysts.
            </li>
            
            <li>
            Professionals looking to enhance their analytical capabilities.
            </li>
            <li>
            Master the art of business analysis.
            </li>
            <li>
            Propel your career forward.
            </li>


        </ol>
        
    </div>
</div>

</div>


        </>



    )
}
