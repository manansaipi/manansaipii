import React, { useEffect, useRef } from "react";
import "./Serfee.css";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { FaTools } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProjectDetail = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth", // optional for smooth scrolling
	});
	const underDevRef = useRef(null);
	const iconRef = useRef(null);
	const textDevRef = useRef(null);

	useEffect(() => {
		// window.scrollTo(0, 0);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: underDevRef.current,
				start: "top 80%",
			},
		});

		tl.from(iconRef.current, {
			y: -50,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
		}).from(
			textDevRef.current,
			{
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power2.out",
			},
			"-=0.5" // Overlap the animations by 0.5 seconds
		);
	}, []);

	return (
		<div className="main">
			<div
				className="flex flex-col justify-center items-center h-screen bg-gray-100"
				ref={underDevRef}
			>
				<FaTools
					className="text-6xl text-gray-800 mb-4"
					ref={iconRef}
				/>
				<h1
					className="text-5xl font-bold text-gray-800"
					ref={textDevRef}
				>
					UNDER DEVELOPMENT
				</h1>
			</div>
		</div>
	);
};

export default ProjectDetail;
