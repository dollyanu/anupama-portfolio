import React from 'react'
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "./Projects"
import Skills from './Skills';
import Experience  from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home