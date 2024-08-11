import React from 'react'
import hero1 from '../assets/student1.jpg'
import studentImg from "../assets/certificate1.jpg"
import CourseSlider from '../Components/CourseSlider'
import InstructorSlider from '../Components/InstructorSlider'
import src1 from "../assets/src1.png.jpg"
import { useNavigate } from 'react-router-dom'
import TimelineSection from '../Components/Timeline'


export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex flex-col gap-6 bg-white'>
      {/* section 1 */}
      <section className=' flex w-full'>
        <div className=' w-[50%] flex justify-center pl-[6rem] flex-col bg-[#31466d] text-white'>
          <h1 className=' text-5xl font-semibold leading-[4rem]  '>Elevate Your Career with Lead Barter</h1>
          <br />
          <p className=' text-2xl font-semibold w-[32rem] '>At Leadbarter, we offer live, interactive skill enhancement programs tailored to both students and professionals. Our real-time learning experience, guided by industry experts, ensures you gain practical skills that set you apart in the competitive landscape.</p>
        </div>
        <div className=' w-[50%] '>
          <img src={src1} alt="" height={120} />
        </div>
      </section>

      {/* section 2 */}
      <section className=' w-10/12 mx-auto '>
        <div className=' text-center mb-10'>
          <h2 className=' text-5xl font-semibold text-blue-600 my-5'>Our Courses</h2>
          <p className=' text-xl text-gray-600'>Explore diverse, live courses across disciplines-maximizing your learning experience in real-time</p>
        </div>
        <CourseSlider />
      </section>

      {/* section 3 */}
      <section className=' flex w-10/12  mx-auto mt-10  '>
        <div className=' w-[30%] '>
          <img src={studentImg} alt="" />
        </div>
        <div className=' w-[70%] flex justify-center flex-col px-28 pb-28 pt-12 bg-[#EFFDFF] '>
          <p className=' text-5xl font-semibold leading-[3.5rem] '>Empowering Your Journey to Mastery with Live Courses</p>
          <p className=' mt- text-lg text-[#111111aa]'>At Leadbarter, we provide a diverse range of live, interactive courses tailored to boost your skills, whether you're a student or a professional. Our sessions offer personalized attention, real-time feedback, and direct interaction with expert instructors. Our successful alumni, who have landed top jobs or started their own ventures, attest to the effectiveness of our teaching and the commitment of our instructors.</p>
          <button onClick={() => navigate("/Courses")} className=' button2 bg-blue-500 rounded px-3 py-1 w-[6rem] text-white text-xl mt-5'>
            Courses
          </button>
        </div>
      </section>

      {/* section 5 */}
      <div >
        {/* <div className="bg-slate-500 min-h-screen py-8 px-4 mt-11"> */}
          <div className=" w-10/12 mx-auto bg-white p-8 rounded-lg  space-y-8">
            <section className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeIn ">Why choose us?</h1>
              <p className="text-lg w-8/12 mx-auto text-gray-700 mb-6 animate-fadeIn">
                Expert-Led Courses: Learn from industry professionals.
                Flexible Learning: Study at your own pace, anytime, anywhere.
                Certification: Receive recognition for your new skills.
              </p>
            </section>
            <TimelineSection />
          </div>
        {/* </div> */}
      </div>

      {/* section 5 */}
      <section className=' bg-[#F3EAD8]'>
        <div className="w-10/12 mx-auto py-9">
          <InstructorSlider />
        </div>
      </section>

    </div>
  )
}
