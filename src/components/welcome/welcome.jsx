import './welcome.css';
import bgVideo from '../../assets/sea.webm'; // Replace with your video path
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const video = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pin: bg1.current,
        pinSpacing: false,
        start: "top top",
        end: "bottom bottom"
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: img_container.current,
          pin: img_container.current,
          scrub: 1,
          start: "0% 0%"
        }
      })
      .to(video.current, { transform: "translateZ(2200px)" }, 0)
      .to(text1.current, { y: -800 }, 0.05, "<")
      .to(text2.current, { y: -800 }, 0.08, "<");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className='relative'>
      <div ref={bg1} className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"></div>
      <div ref={img_container} className="img-container perspective flex items-center justify-center h-screen w-screen">
        <video ref={video} className='image' autoPlay loop muted>
          <source src={bgVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className='text-white absolute flex flex-col items-center justify-center'>
          <h1 ref={text1} className='text-[190px] text-white'>
            <span className='text-stroke'>Abdul</span> Mannan
          </h1>
          <p ref={text2} className='opacity-50 w-48 text-[19px] text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, modi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
