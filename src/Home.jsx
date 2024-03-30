import { useState } from 'react'
import Styles from "./Home.module.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Bio from './components/Bio/Bio'
import MySkills from './components/skills/MySkills'
import Projects from './components/projects/Projects'
import Contact from './components/contactMe/Contact'
import Footer from './components/footer/Footer'

function Home() {


  return (
    <>
      <div className={Styles.Home}>  
      
       <Navbar/>
       <Hero/>
       <Bio/>
       <MySkills/>
       <Projects/>
       <Contact/>
       <Footer/>
       



      </div>
  
      
    </>
  )
}

export default Home
