import React from 'react'
import { useState } from 'react'
// import teamImage from '../assets/team.jpg'; // Adjust path as needed
// import skillsImage from '../assets/skills.jpg'; // Adjust path as needed



export const AboutUs = () => {
  return (
    <div >
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">About Us</h1>
          <p className="text-lg text-gray-700 mb-6 animate-fadeIn">
            Welcome to Lead Barter, your go-to for skill enhancement and upskilling. We empower individuals with the knowledge and skills needed to excel in today’s competitive job market. Our mission is to bridge the gap between education and industry, providing top-notch training for both students and professionals.
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            {/* <img src={teamImage} alt="Our Team" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" /> */}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 animate-slideIn">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6 animate-slideIn">
              Lead Barter offers comprehensive skill development programs led by experienced educators and industry experts. We are committed to delivering high-quality, relevant training that aligns with the latest industry standards.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 animate-slideIn">Our Programs</h2>
            <p className="text-lg text-gray-700 mb-6 animate-slideIn">
              We provide a range of courses for enhancing skills and advancing careers. Our offerings include practical skill-enhancement programs and upskilling courses for professionals looking to stay ahead.
            </p>
          </div>
          <div className="flex-1">
            {/* <img src={skillsImage} alt="Skill Development" className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" /> */}
          </div>
        </section>

        <section className="w-[37rem] mx-auto ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 animate-fadeIn">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6 animate-fadeIn ">
            <li>Expert Instructors: Learn from seasoned professionals.</li>
            <li>Practical Learning: Gain real-world skills through hands-on experience.</li>
            <li>Flexible Options: Choose from online or in-person formats.</li>
            <li>Up-to-Date Curriculum: Stay current with industry trends.</li>
            <li>Supportive Community: Join a network dedicated to growth.</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 animate-fadeIn">Join Us Today</h2>
          <p className="text-lg text-gray-700 animate-fadeIn">
            Take the next step in your career with Lead Barter. Contact us for more information about our programs and enrollment.
          </p>
        </section>
      </div>
    </div>
    </div>
  )
}
