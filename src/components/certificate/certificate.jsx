import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiFillCaretLeft} from 'react-icons/ai'
import {BsFillCaretRightFill} from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './certificate.css'

import c1 from '../../assets/certificate/coursera1.png'
import c2 from '../../assets/certificate/coursera1.png'
import d1 from '../../assets/certificate/dicoding1.png'
import d2 from '../../assets/certificate/dicoding2.png'
import d3 from '../../assets/certificate/dicoding3.png'
import d4 from '../../assets/certificate/dicoding4.png'
import gcsb from '../../assets/certificate/gcsb.png'
const certificates = [
  {
    name: "The Bits and Bytes of Computer Networking",
    img: c1,
  },
  {
    name: "System Administration and IT Infrastructure Services",
    img: c2,
  },
  {
    name: "Become a Google Cloud Engineer",
    img: d1,
  },
  {
    name: "Build Back-End Applications with Google Cloud",
    img: d2,
  },
  {
    name: "JavaScript Programming",
    img: d3,
  },
  {
    name: "Web Development",
    img: d4,
  },
  {
    name: "Google Cloud Skill Boost",
    img: gcsb,
  },
];
const Certificate = () => {
  return (
   <div className="certificate cont">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >{certificates.map((certificate, index) => (
          <SwiperSlide key={index}>
            <img src={certificate.img} alt="slide_image" />
            <p className='text-secondary text-[20px] font-semibold' style={{ textAlign: 'center',  marginTop: '-100px'}}>{certificate.name}</p>
          </SwiperSlide>
      ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"  style={{ fontSize: '2.3em' }}>
            <AiFillCaretLeft />
          </div>
          <div className="swiper-button-next slider-arrow"  style={{ fontSize: '2.3em' }}>
            <BsFillCaretRightFill/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Certificate