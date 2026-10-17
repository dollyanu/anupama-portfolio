import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-22 bg-[#0d152b]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl border border-purple-500/30 bg-[#141b3d] flex items-center justify-center">
              <FaEnvelope className="text-purple-400 text-2xl" />
            </div>

            <h2 className="text-5xl font-bold bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>

          </div>

          <div className="mt-4 ml-2 w-28 h-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500"></div>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl">
           I am passionate about creating modern, high-quality web applications and am currently looking for a full-time role where I can contribute, learn, and make a meaningful impact.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-[#111B3C] rounded-3xl border border-purple-500/20 hover:border-purple-600 p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left */}
            <div>

              <h3 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">

                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-xl bg-[#1b2245] flex justify-center items-center">
                    <FaEnvelope className="text-purple-400 text-xl" />
                  </div>

                  <div>
                    <p className="text-gray-400">Email</p>

                    <a
                      href="mailto:mauryanupama1411@gmail.com"
                      className="text-white hover:text-purple-400"
                    >
                      mauryanupama1411@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-xl bg-[#1b2245] flex justify-center items-center">
                    <FaMapMarkerAlt className="text-purple-400" />
                  </div>

                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">Mirzapur, Uttar Pradesh</p>
                  </div>
                </div>

              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href="https://github.com/dollyanu"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-xl bg-[#1b2245] hover:bg-purple-600 transition duration-300 flex items-center justify-center"
                >
                  <FaGithub className="text-white text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/anupama-maurya"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-xl bg-[#1b2245] hover:bg-purple-600 transition duration-300 flex items-center justify-center"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>

              </div>

            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">

              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="text-gray-400 leading-8">
                Whether you're looking for a frontend developer, full-stack
                developer, or someone to collaborate on innovative projects,
                I'm always excited to discuss new opportunities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="mailto:mauryanupama1411@gmail.com"
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold flex items-center gap-3 transition duration-300"
                >
                  <FaPaperPlane />
                  Send Email
                </a>

                <a
                  href="https://www.linkedin.com/in/anupama-maurya"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 border border-purple-500 hover:bg-purple-600 rounded-xl text-white transition duration-300"
                >
                  Connect on LinkedIn
                </a>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;