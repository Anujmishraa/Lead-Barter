import React from 'react'
import hero1 from '../assets/student1.jpg'
import studentImg from "../assets/certificate1.jpg"
import CourseSlider from '../Components/CourseSlider'
import InstructorSlider from '../Components/InstructorSlider'


export const HomePage = () => {
  return (
    <div className=' flex flex-col gap-6'>
      {/* section 1 */}
      <section className=' flex w-full'>
        <div className=' w-[50%] flex justify-center pl-[6rem] flex-col bg-[#31466d] text-white'>
          <h1 className=' text-5xl font-semibold leading-[4rem]  '> Learn new Skills online with top educators</h1>
          <p className=' text-2xl font-semibold w-[32rem] '>Learn 100% online with world-class universities and industry experts</p>
        </div>
        <div className=' w-[50%] '>
          <img src={hero1} alt="" />
        </div>
      </section>

      {/* section 2 */}
      <section className=' w-10/12 mx-auto '>
        <div className=' text-center mb-10'>
          <h2 className=' text-5xl font-semibold text-blue-600 my-5'>Our Courses</h2>
          <p className=' text-xl text-gray-600'>Choose from online video courses with new additions published every month</p>
        </div>
        <CourseSlider />
      </section>

      {/* section 3 */}
      <section className=' flex w-10/12 mx-auto '>
        <div className=' w-[30%] '>
          <img src={studentImg} alt="" />
        </div>
        <div className=' w-[70%] flex justify-center flex-col p-28 bg-[#EFFDFF] '>
          <p className=' text-5xl font-semibold leading-[3.5rem] '>The world's largest selection of online courses</p>
          <p className=' mt- text-lg text-[#111111aa]'>Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone.</p>
          <button className=' button2 bg-blue-500 rounded px-3 py-1 w-[6rem] text-white text-xl mt-5'>
            Courses
          </button>
        </div>
      </section>

      {/* section 4 */}
      <section className=' bg-[#F3EAD8]'>
        <div className="w-10/12 mx-auto py-9">
          <InstructorSlider />
        </div>
      </section>

    </div>
  )
}
