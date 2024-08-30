import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import img1 from '../assets/man1.jpg'
// import img2 from '../assets/Man2.jpg'
// import img3 from '../assets/man3.jpg'
import nidhi from "../assets/Nidhi.jpg"
import avinash from "../assets/Avinash.jpg"
import shreyash from "../assets/shreyash.jpg"
import muskan from "../assets/Muskan.jpg"
import Anuj from "../assets/Anuj.jpeg"
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function InstructorSlider() {
  const data = [
    {
      name: "Nidhi Tiwari ",
      img: nidhi,
      dis: "Meet our expert instructors, who bring a wealth of knowledge and experience to guide you through your learning journey.",
    },
    {
      name: "Avinash Pandey",
      img: avinash,
      dis: "Meet our expert instructors, who bring a wealth of knowledge and experience to guide you through your learning journey.",
    },
    {
      name: "Shreyash Chavhan",
      img: shreyash,
      dis: "Meet our expert instructors, who bring a wealth of knowledge and experience to guide you through your learning journey.",
    },
    {
      name: "Muskan Tripathi",
      img: muskan,
      dis: "Meet our expert instructors, who bring a wealth of knowledge and experience to guide you through your learning journey.",
    },
    {
      name: "Anuj Mishra",
      img: Anuj,
      dis: "Meet our expert instructors, who bring a wealth of knowledge and experience to guide you through your learning journey.",
    },
  ]
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map((d, i) => (
            <SwiperSlide key={i} className='  '>
              <div className=' px-[20rem] flex items-center flex-col gap-9 py-20 '>
                <p className=' text-4xl font-semibold text-center py-'>Our Instructors</p>
                <p className=' text-center text-xl'>{d.dis}</p>
                <div className=' flex gap-3'>
                  <img  src={d.img} className=' rounded-full w-[4rem] h-[4rem] ' alt="" />
                  <div>
                    <p className=' font-semibold'>{d.name}</p>
                    <p className=' text-[#111111a6] '>{d.role}</p>
                  </div>
                </div>
              </div>

            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}
