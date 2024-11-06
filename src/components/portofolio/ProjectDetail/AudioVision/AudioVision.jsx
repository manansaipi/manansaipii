import React, { useEffect, useRef } from "react";

// import { Link } from 'react-router-dom';
// import projects from '../../projetcs';
import "./AudioVision.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import introScreen from "../../../../assets/AudioVision/intro.png"; // Replace with your video path
import spashscreen from "../../../../assets/AudioVision/splashscreen.png"; // Replace with your video path

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth", // optional for smooth scrolling
	});

	const contentRef = useRef(null);
	const textRef = useRef(null); // New ref for the text
	const secondRef = useRef(null); // Ref for the second section
	const img_container = useRef(null); // Ref for the second section

	useEffect(() => {
		window.scrollTo(0, 0);

		// GSAP ScrollTrigger for zoom effect
		gsap.to(textRef.current, {
			scale: 50, // Zoom in (scale 2x, adjust as necessary)
			duration: 3,
			scrollTrigger: {
				trigger: textRef.current,
				pin: true,
				scrub: 1, // Smooth scrub animation
				start: "50% 50%", // When the top of the text hits 80% of the viewport height
				end: "0% 0%", // Optional: when the bottom hits 60%
				onLeave: () => {
					if (textRef.current) {
						textRef.current.style.opacity = 0; // Make the element invisible
					}
				},
				onEnterBack: () => {
					if (textRef.current) {
						textRef.current.style.opacity = 1; // Make the element visible again
					}
				},

				// markers: true, // Use for debugging (visual markers for start/end)
			},
		});

		// ScrollTrigger.create({
		//   trigger: secondRef.current,
		//   start: "20% 20%",
		//   markers: true
		// })
	}, []);

	return (
		<div className="main">
			<div
				className="project-detail flex justify-center items-center h-screen"
				ref={contentRef}
			>
				<p className="text-[20px] text-black text-center" ref={textRef}>
					{/* <b>Dedicated</b> to all impaired people who demonstrate incredible resilience and determination. */}
					<b>Dedicated</b> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Optio, consequatur?
				</p>

				{/* <Link to="/" className="btn mt-4">Back to Home</Link> */}
			</div>

			<div
				className="w-screen h-screen flex justify-center items-center bg-slate-300"
				ref={secondRef}
			>
				<div className="text-2xl  text-black max-w-[50%] mx-28 bg-slate-200 ">
					<h1 className="text-7xl font-bold">Introduction</h1>
					<p className="mt-10">
						AudioVision is an application designed to enhance the
						lives of visually impaired individuals. This app
						utilizes advanced computer vision and real-time object
						detection technology.
					</p>
					<p className="mt-2">
						AudioVision offers reliable, detailed guidance, enabling
						users to navigate their environment safely and
						independently.
					</p>
				</div>

				<div
					ref={img_container}
					className=" h-screen max-w-[50%] flex justify-center items-end bg-pink-300"
				>
					<div className="bg-red-300  mt-24 ml-36 mr-24 relative bottom-[-15%] right-[-10%] ">
						<div>
							<img
								src={spashscreen}
								alt="AudioVision App"
								className="w-[70%]  absolute bottom-0 left-[-52%] z-10"
							/>
						</div>
						<div>
							<img
								src={introScreen}
								alt="AudioVision App"
								className="w-[90%]   relative "
							/>
						</div>
					</div>
				</div>

				{/* <div
					ref={img_container}
					className=" h-screen  relative max-w-[50%]  bg-pink-300"
				>
					<img
						src={spashscreen}
						alt="AudioVision App"
						className="w-[45%] absolute  bottom-[-20%] left-[-20%] z-10"
					/>
					<img
						src={introScreen}
						alt="AudioVision App"
						className="w-[65%] relative bottom-[-30%]"
					/>
				</div> */}
			</div>
		</div>
	);
};

export default ProjectDetail;
