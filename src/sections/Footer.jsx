import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Gradient Line */}
      <div className="h-2px"></div>

      <footer className="bg-[#111B3C]">
        <div className="max-w-7xl mx-auto px-4 lg:px-4 py-6">

          {/* Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-18">

            {/* About */}
            <div>
              <h2 className="text-2xl font-bold text-purple-400">
                Anupama Maurya
              </h2>

              <p className="mt-4 text-gray-400 leading-8">
                Full Stack Developer passionate about building scalable,
                responsive, and user-friendly web applications using modern
                technologies and clean code.
              </p>
            </div>

            {/* Navigation */}
            <div  className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                Navigation
              </h3>

              <ul className="space-y-4">

                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300 "
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#experience"
                    className="text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300 "
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300 "
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300 "
                  >
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300 "
                  >
                    Contact
                  </a>
                </li>

              </ul>
            </div>

            {/* Connect */}
            <div  className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                Connect
              </h3>

              <div className="space-y-4">

                <a
                  href="https://github.com/dollyanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/anupama-maurya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </a>

                <a
                  href="mailto:mauryanupama1411@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-purple-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaEnvelope className="text-xl" />
                  Email
                </a>

              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                Core Skills
              </h3>

              <div className="flex flex-col gap-2">

                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "JavaScript",
                  "Tailwind CSS",
                  "Express.js",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className=" text-gray-400 text-sm inline-block "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-10"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-white">Anupama Maurya</span>. Crafted with{" "} using React.js,
              Tailwind CSS & Framer Motion.
            </p>

            <a
              href="#home"
              className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center text-white hover:text-white shadow-lg shadow-purple-700/60 transition-all duration-300"
            >
              <FaArrowUp size={22} />
            </a>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;