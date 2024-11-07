import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import gsap from "gsap";

// import PreLoadr from './components/preloader/PreLoader'
import Welcome from "./components/welcome/welcome";
import Header from "./components/header/header";
// import Nav from './components/nav/nav'
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Certificate from "./components/certificate/certificate";
import Portofolio from "./components/portofolio/portofolio";
import Tech from "./components/tech/Tech";
// import Testimoni from './components/testimoni/testimoni'
// import Contact from './components/contact/contact'
import Footer from "./components/footer/footer";
// import PreLoader from './components/preloader/PreLoader'
import AudioVisionDetail from "./components/portofolio/ProjectDetail/AudioVision/AudioVision";
import SerfeeDetail from "./components/portofolio/ProjectDetail/Serfee/Serfee";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<TransitionGroup component={null}>
			<Transition
				key={location.pathname}
				timeout={500}
				onEnter={(node) => {
					gsap.from(node, {
						opacity: 0,
						duration: 0.5,
						y: 50,
						ease: "power1.out",
					});
				}}
				onExit={(node) => {
					gsap.to(node, {
						opacity: 0,
						duration: 0.5,
						y: -50,
						ease: "power1.in",
					});
				}}
			>
				{(state) => (
					<div className="page">
						<Routes location={location}>
							<Route
								path="/"
								element={
									<>
										{/* <PreLoader /> */}
										<Welcome />
										<Header />
										<About />
										<Experience />
										<Certificate />
										<Portofolio />
										<Tech />
										<Footer />
									</>
								}
							/>
							<Route
								path="/project/Serfee"
								element={<SerfeeDetail />}
							/>
							<Route
								path="/project/AudioVision"
								element={<AudioVisionDetail />}
							/>
						</Routes>
					</div>
				)}
			</Transition>
		</TransitionGroup>
	);
};

export default AnimatedRoutes;
