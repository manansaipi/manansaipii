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

import b from '../../assets/certificate/Bangkit.png'
import c1 from '../../assets/certificate/coursera1.png'
import c2 from '../../assets/certificate/coursera1.png'
import d1 from '../../assets/certificate/dicoding1.png'
import d2 from '../../assets/certificate/dicoding2.png'
import d3 from '../../assets/certificate/dicoding3.png'
import d4 from '../../assets/certificate/dicoding4.png'
import gcsb from '../../assets/certificate/gcsb.png'
const certificates = [
   
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
    name: "The Bits and Bytes of Computer Networking",
    img: c1,
    link: "https://www.coursera.org/account/accomplishments/certificate/W7HL5ZKJY2JY"
  },
  {
    name: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    img: b,
    link: "https://doc-0c-84-docs.googleusercontent.com/docs/securesc/6gcqf2m5vg03r7jf3d2m6ps3ac1lci59/cr9a17appfb5tli8a8tdmtn07ieadvsc/1690545225000/12536267041218139854/07945434338870100485/1FvJgRhIRKbwpVS4n_aU2gTlNNd6dBB1l?e=view&ax=AGtFMPVTiM7dQlRSfzhE3Rj75w3v0PGVoJCJO43cBXBg5YNaTuCvjOE8KBZ06eQ29-ET4DNkiiJrUuWsTbMC1ytDfUdZsfrm_16R6Knuvpv5hmIXDUO0JFIU7Flrq4WElaoM0m6Yc_lK1ErvXffuGK3bNQWLqvjbpm8MRehwnL5WZpp5dl44BgR-Frn6U1WHepsUN1NJYpGXmDC2DB_OZLT432cpF2vwIEC8ZniclwA2jT13EK3gNaIQtS6dw28CTyJ4FAhcQOI0FwGIrfLEagG0s0QdcCIweBxuibyuj-TYD0M2YkvUQDmlyfUEzOYS9WeQyxVs-orE6U9Xm_Us0wo-6gjbfNUFG-PHXzrOOVFArpfm-2ecJzpG_xJy4VZPItnAULeyV4Cl1FQtOUhdi9Y5u-TnKK24KMUvfpPham8JmEHmtLFGx-G501Zm4j7sPcJdRi_fqzNHzgHUnKgxpdDJ2HdsmRyUvUsIBdOE7buhEK3HqwfFdHtptzwJnw62dh8TE9CpsmWfJanKPkPX7NJCItuAJfU9bvf2A6H-R72p-sQpWtqBMLNuzu_qPNYqmSNAy9HfVQKj9WXZ10q1PVvQi7RHPVmrYqVSFwT1b8dPpKktrfQXvyC1ZrfjQtKKHXNhhAt8a4v8HdrL3Uvy-2bt6-07ahj5Y3vFjLjN2m-THZbKU69xX4X-mush99M555w9Gm3MQhvw95VJBiGf9cUAAnJd86KH_IyKTZ7eIh3VZBB8wYJZQ9vw27SI1s6dc-_T-AFqnq6Dc1IB9UXVTfE9famfghk9QhHoSYDWgLCwTr_hJNT_PjPtojElrned7FCNC5NfGKt4t75YVF7JDlRo7eL5peZZ3wdJ9rv29a6y0F7wz8dasFFspjBRtqAkZKI&uuid=e2d682e3-6c45-4727-b063-f0af39f9e5d4&authuser=0"
  },
 
  {
    name: "System Administration and IT Infrastructure Services",
    img: c2,
    link: "https://www.coursera.org/account/accomplishments/certificate/SASKPNKXVL54"
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
   const middleIndex = Math.floor(certificates.length / 2 -1); // Calculate the middle index
  return (
   <div className="certificate cont">
   <motion.div variants={textVariant()}>
        <section id='Experience' className='title'>
          <h2>Certificate</h2>
        </section>
      </motion.div>
    <motion.div  variants={fadeIn("left","",  0.6, 0.75)}>
      
        <Swiper
      initialSlide={middleIndex} // Set the initial slide to the middle index
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
    >
      {certificates.map((certificate, index) => (
        <SwiperSlide key={index}>
          <img src={certificate.img} alt="slide_image" />
          <a href={certificate.link} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
            <p className='text-secondary text-[20px] font-semibold' style={{ textAlign: 'center', marginTop: '-100px' }}>{certificate.name}</p>
          </a>
        </SwiperSlide>
      ))}
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow" style={{ fontSize: '2.3em' }}>
          <AiFillCaretLeft />
        </div>
        <div className="swiper-button-next slider-arrow" style={{ fontSize: '2.3em' }}>
          <BsFillCaretRightFill />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
    </motion.div>

    </div>
  )
}

export default  SectionWrapper(Certificate, "certificate") 