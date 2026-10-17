import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0d152b]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-[#141b3d] flex items-center justify-center">
              <FaLaptopCode className="text-purple-400 text-2xl" />
            </div>

            <h2 className="text-5xl font-bold bg-linear-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </h2>

          </div>

          <div className="mt-3 w-28 h-1 rounded-full bg-linear-to-r from-pink-400 to-purple-500"></div>

        </motion.div>

        {/* Project Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#111B3C] rounded-3xl border border-purple-500/20 hover:border-purple-600 overflow-hidden shadow-lg"
            >

              {/* Image */}

              <div className="overflow-hidden">

                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

              </div>

              {/* Content */}

              <div className="p-4">

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-4">
                  {project.description}
                </p>

                {/* Tech*/}

                <div className="flex flex-wrap gap-2 mb-4">

                  {project.tech.map((tag) => (

                    <span
                      key={tag}
                      className="px-3 py-2 rounded-full bg-[#1B2245] text-gray-300 text-sm hover:bg-purple-500 hover:text-white transition"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">
                  <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition duration-300"
>
  <FaExternalLinkAlt />
  Live
</a>

<a
  href={project.code}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-purple-400 text-white hover:border-purple-600 transition duration-300"
>
  <FaExternalLinkAlt />
  Code
</a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;