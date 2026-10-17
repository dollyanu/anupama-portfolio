import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0d152b]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease:'easeOut' }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-[#141b3d] flex items-center justify-center shadow-lg">
              <FaCode className="text-purple-400 text-2xl" />
            </div>

            <h2 className="text-5xl font-bold bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

          </div>

          <div className="mt-5 w-28 h-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500"></div>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease:'easeOut' }}
            viewport={{ once: false, amount:0.2 }}
              className="bg-[#111B3C] rounded-3xl p-8 shadow-lg border border-purple-500/20 hover:border-purple-500 transition-all duration-300 cursor-pointer"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-xl bg-[#1B2245] flex items-center justify-center"
                >
                  <skill.icon className="text-purple-400 text-2xl" />
                </motion.div>

                <h3 className="text-2xl font-semibold text-white">
                  {skill.title}
                </h3>

              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">

                {skill.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#1B2245]
                      text-gray-300
                      text-sm
                      font-medium
                      cursor-pointer
                      hover:bg-purple-500
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {tag}
                  </motion.span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;