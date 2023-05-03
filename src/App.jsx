import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portofolio from './components/portofolio/portofolio'
import Testimoni from './components/testimoni/testimoni'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <>
      <Header />
      {/* <Nav></Nav> */}
      <About></About>
      <Experience></Experience>
      {/* <Services></Services>
      <Portofolio></Portofolio>
      <Testimoni></Testimoni>
      <Contact></Contact>
      <Footer></Footer>  */}
    </> 
  )
}

export default App