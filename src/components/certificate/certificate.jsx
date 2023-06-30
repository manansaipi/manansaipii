import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiFillCaretLeft} from 'react-icons/ai'
import {BsFillCaretRightFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { textVariant } from '../../utils/motion'
import { fadeIn } from '../../utils/motion'
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
    link: "https://www.coursera.org/account/accomplishments/certificate/W7HL5ZKJY2JY"
  },
  {
    name: "System Administration and IT Infrastructure Services",
    img: c2,
    link: "https://www.coursera.org/account/accomplishments/certificate/SASKPNKXVL54"
  },
  {
    name: "Become a Google Cloud Engineer",
    img: d1,
    link: "https://www.dicoding.com/certificates/1RXY6O233ZVM"
  },
  {
    name: "Build Back-End Applications with Google Cloud",
    img: d2,
    link: "https://www.dicoding.com/certificates/ERZR0QE5NXYV"
  },
  {
    name: "JavaScript Programming",
    img: d3,
    link: "https://www.dicoding.com/certificates/6RPN6LE38P2M"
  },
  {
    name: "Web Development",
    img: d4,
    link: "https://www.dicoding.com/certificates/1OP8587JQPQK"
  },
  {
    name: "Google Cloud Skill Boost",
    img: gcsb,
    link: "https://www.cloudskillsboost.google/public_profiles/5d03fd6c-a138-4e59-b072-85c1174c5051"
  },
];
const Certificate = () => {
  return (
   <div className="certificate cont">
   <motion.div variants={textVariant()}>
        <section id='Experience' className='title'>
          <h2>Certificate</h2>
        </section>
      </motion.div>
    <motion.div  variants={fadeIn("left","",  0.6, 0.75)}>
      
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
            <a href={certificate.link}  style={{ textDecoration: 'none' }}  target="_blank" rel="noreferrer"> <p className='text-secondary text-[20px] font-semibold' style={{ textAlign: 'center',  marginTop: '-100px'}}>{certificate.name}</p></a>
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
    </motion.div>

    </div>
  )
}

export default  SectionWrapper(Certificate, "certificate") 