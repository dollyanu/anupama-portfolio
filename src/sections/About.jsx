import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";
import { FaGem, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#0d152b] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease:'easeOut' }}
          viewport={{ once: true }}
          id='about'
          className="mb-20"
        >
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-xl border border-purple-500/30 bg-[#15112b] flex items-center justify-center">
              <FaGem className="text-purple-400 text-xl" />
            </div>

            <div>
              <h2 className="text-5xl font-bold text-purple-500">
                About Me
              </h2>

              <div className="flex mt-3">
                <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
             initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease:'easeOut' }}
            viewport={{ once: false, amount:0.2 }}
          >

            <h3 className="text-4xl font-bold text-white mb-6">
              My Journey
            </h3>

            <p className="text-gray-400 text-lg leading-8">
        I'm Anupama Maurya,a Computer Science student passionate about building modern,
        responsive and scalable web applications.
      </p>

      <p className="text-gray-400 text-lg leading-8 mt-6">
        I specialize in React, Node.js, MongoDB, JavaScript and enjoy
        contributing to open-source projects while continuously improving
        my development skills.
      </p>

            {/* Education Card */}

            <div className="mt-12 bg-[#111B3C] rounded-3xl border border-cyan-500/20 p-8">

  {/* Heading */}
  <div className="flex items-center gap-4 mb-8">


                <div className="w-12 h-12 rounded-xl bg-[#1b2345] flex items-center justify-center">
                  <FaGraduationCap className="text-purple-400 text-xl" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Education
                </h3>

              </div>

              {/* B.Tech */}

              <div className="border-l-4 border-purple-500 pl-5 mb-8">

                <h4 className="text-xl font-semibold text-white">
                  Bachelor of Technology
                </h4>

                <p className="text-purple-400">
                  Computer Science & Engineering
                </p>

                <p className="text-gray-400">
                  Dr. A.P.J. Abdul Kalam Technical University
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2024 – 2027
                </p>

              </div>

              {/* Diploma */}

              <div className="border-l-4 border-purple-400 pl-5 mb-8">

                <h4 className="text-xl font-semibold text-white">
                  Diploma
                </h4>

                <p className="text-purple-400">
                  Computer Science & Engineering
                </p>

                <p className="text-gray-400">
                  Government Polytechnic Rajgarh, Mirzapur
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2021 – 2024
                </p>

              </div>

              {/* 10th */}

              <div className="border-l-4 border-purple-300 pl-5">

                <h4 className="text-xl font-semibold text-white">
                  10th (UP Board)
                </h4>

                <p className="text-purple-300">
                  Science
                </p>

                <p className="text-gray-400">
                  Sw. Jatadhari M.I.C. Aahi Jamua, Mirzapur
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2020 – 2021
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease:'easeOut' }}
            viewport={{ once: false, amount:0.2 }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>

              <img
                src={profileImg}
                alt="Profile"
                className="relative w-420px rounded-3xl  "
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;