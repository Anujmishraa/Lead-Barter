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
      name: "Nidhi Tiwari",
      img: nidhi,
      dis: 'Everybody is differe, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas inre, delectus dignissimos facilis neque nulla earum.',
      role: 'HRMS Trainer',
    },
    {
      name: "Avinash Pandey",
      img: avinash,
      dis: 'Everybody is differe, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas inre, delectus dignissimos facilis neque nulla earum.',
      role: 'Senior Teacher',
    },
    {
      name: "Shreyash Chavhan",
      img: shreyash,
      dis: 'Everybody is differe, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas inre, delectus dignissimos facilis neque nulla earum.',
      role: 'Software Engineer',
    },
    {
      name: "Muskan Tripathi",
      img: muskan,
      dis: 'Everybody is differe, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas inre, delectus dignissimos facilis neque nulla earum.',
      role: ' Medical Coding Trainer',
    },
    {
      name: "Anuj Mishra",
      img: Anuj,
      dis: 'Everybody is differe, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas inre, delectus dignissimos facilis neque nulla earum.',
      role: 'Full Stack Developer',
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
                  <img width={50} src={d.img} className=' rounded-full' alt="" />
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
