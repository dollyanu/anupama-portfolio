import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLocationDot } from "react-icons/fa6";
import { experiences } from "../assets/assets";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0d152b]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-14"
        >
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl border border-purple-500/30 bg-[#141b3d] flex items-center justify-center">
              <FaBriefcase className="text-purple-400 text-2xl" />
            </div>

            <h2 className="text-5xl font-bold bg-linear-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="mt-6 ml-2 w-28 h-1 rounded-full bg-linear-to-r from-purple-500 to-purple-700"></div>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className="bg-[#111B3C] rounded-3xl border border-purple-500/20 hover:border-purple-500 p-10 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300"
            >

              <div className="flex flex-col lg:flex-row justify-between ">

                {/* Left */}
                <div>

                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>

                  <h4 className="text-xl text-purple-400 font-semibold mt-2">
                    {exp.company}
                  </h4>

                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <FaLocationDot />
                    <span>{exp.location}</span>
                  </div>

                  <p className="italic text-gray-300 mt-4">
                    {exp.type}
                  </p>

                  <ul className="mt-8 space-y-1">
                   { exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-300 leading-8"
                      >
                        <span className="text-purple-400 mt-2">▪</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="px-5 py-2 rounded-full bg-[#1b2245] text-purple-300 hover:bg-purple-500 hover:text-white transition duration-300 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right */}
                <div className="flex lg:justify-end">

                  <div className="h-fit px-6 py-3 rounded-xl bg-[#1b2b50] text-white whitespace-nowrap">
                    {exp.duration}
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;