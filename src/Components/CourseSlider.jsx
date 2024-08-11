import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../assets/BA Flyer.png"
import img2 from "../assets/EPP Flyer.png"
import img3 from "../assets/HRMS Flyer.png"
import img4 from "../assets/Medical Coding.png"
import img5 from "../assets/Hrms.png.png"
import img6 from "../assets/Epp.png"
import img7 from "../assets/Business.png"
import img8 from "../assets/Medical.png"


// import './styles.css';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';



export default function CourseSlider() {
    const navigate = useNavigate();
    const data = [
        {   title: "Human Resource Management System ",
            img : img5,
            price: "7000",
        },
        {   title: "Professional English",
            img : img6,
            price: "4000",
        },
        {   title: "Business analyst",
            img : img7,
            price: "7000",
        },
        {   title: "Medical Coding",
            img : img8,
            price: "12000",
        },
        {   title: "Human Resource Management System ",
          img : img5,
          price: "7000",
      },
      {   title: "Professional English",
          img : img6,
          price: "4000",
      },
      {   title: "Business analyst",
          img : img7,
          price: "7000",
      },
      {   title: "Medical Coding",
          img : img8,
          price: "12000",
      },
        // {   title: "BA Flyer",
        //     img : img1,
        //     price: "3000",
        // },
        // {   title: "BA Flyer2",
        //     img : img2,
        //     price: "4000",
        // },
        // {   title: "BA Flyer3",
        //     img : img3,
        //     price: "3500",
        // },
        // {   title: "BA Flyer4",
        //     img : img4,
        //     price: "5000",
        // },
        
    ]
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop = {true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper pb-16"
      >
        {
            data.map((d, i) => (
              <SwiperSlide key={i} onClick={() => navigate("/Courses")} className=' w-[10rem] hover:scale-105 duration-200 pt-3 shadow-lg p-3 '>
                    <img width={250} src={d.img}  alt="" className=' w-[17rem] h-[13rem] shadow' />
                    <p className=' text-lg text-center mt-3 h-[3rem] '>{d.title}</p>
                    <p className=' text-blue-600'>Price Rs {d.price}</p>
                </SwiperSlide>
            ) )
        }
        
      </Swiper>
    </>
  );
}
