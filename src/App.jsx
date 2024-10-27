import React from 'react';
import Welcome from './components/welcome/welcome'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Certificate from './components/certificate/certificate'
import Portofolio from './components/portofolio/portofolio'
import Tech from './components/tech/Tech'
// import Testimoni from './components/testimoni/testimoni'
// import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import PreLoader from './components/preloader/PreLoader'



import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add the Font Awesome icons to the library
library.add(fas);

const FontAwesomeStylesheet = () => (
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
);
const BootstrapStylesheet = () => (
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
);

const FontawesomeStylesheet = () => (
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
);

const PoppinsStylesheet = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
);

const AbrilFatfaceStylesheet = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
      rel="stylesheet"
    />
  </>
);

const LatoStylesheet = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
      rel="stylesheet"
    />
  </>
);


const App = () => {
  return (
    <>
     <FontAwesomeStylesheet />
      <BootstrapStylesheet />
      <FontawesomeStylesheet />
      <PoppinsStylesheet />
      <AbrilFatfaceStylesheet />
      <LatoStylesheet />
      {/* <PreLoader/> */}
      <Welcome />
      <Header />
      <About />
      <Experience />
      <Certificate />
      <Portofolio /> 
      <Tech />
      <Footer />
      {/* <Nav /> */}

    </>
  )
}

export default App