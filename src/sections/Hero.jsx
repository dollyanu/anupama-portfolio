import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-r from-[#0f1734] via-[#111835] to-[#121a3c] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white whitespace-nowrap">
  Anupama Maurya
</h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6 typewriter">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            Passionate about building responsive, user-friendly, and scalable
            <span className="text-purple-500">web applications</span> using <span className="text-purple-500"> React, Node.js, </span>and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition duration-300"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition duration-300"
            >
              View Projects
            </a>
          </div>
          <div className="flex items-center gap-6 mt-8 text-2xl">
      {/* GitHub */}
      <a
        href="https://github.com/dollyanu"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-purple-500 transition duration-300"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/anupama-maurya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-purple-500 transition duration-300"
      >
        <FaLinkedin />
      </a>

      {/* Email */}
      <a
        href="mailto:mauryanupama1411@gmail.com"
        className="text-gray-300 hover:text-purple-500 transition duration-300"
      >
        <FaEnvelope />
      </a>
    </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple to-pink opacity-70 animate-pulse"></div>

            <motion.img
            animate={{y:[0, -15, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "loop", 
              ease:"easeInOut"}}
              src={profileImg}
              alt="Anupama Maurya"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full z-10 animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;