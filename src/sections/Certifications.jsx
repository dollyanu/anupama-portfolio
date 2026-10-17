import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { certifications } from "../assets/assets";

const Certification = () => {
  return (
    <section id="certifications" className="py-10 bg-[#0d152b]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="mb-14"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl border border-purple-500/30 bg-[#141b3d] flex items-center justify-center">
              <FaCertificate className="text-purple-400 text-2xl" />
            </div>

            <h2 className="text-5xl font-bold bg-linear-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
          </div>

          <div className="mt-5 w-28 h-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500"></div>

          <p className="text-gray-400 mt-4 text-lg">
            Professional credentials and continuous learning journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: false }}
              className="bg-[#111B3C] rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            >

              {/* Image */}
              <div className="overflow-hidden h-50">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">

                <span className="inline-block px-5 py-2 rounded-full bg-[#60266d] text-purple-300 text-sm">
                  {certificate.date}
                </span>

                <h3 className="text-2xl font-bold text-white mt-4">
                  {certificate.title}
                </h3>

                <p className="text-purple-500 mt-2">
                  {certificate.issuer}
                </p>

                <p className="text-gray-400 mt-2 leading-7">
                  {certificate.description}
                </p>

                <div className="border-t border-gray-700 mt-4 pt-2">

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-[#5d206b] hover:bg-purple-600 text-purple-300 hover:text-white py-2 rounded-xl transition duration-300"
                  >
                    View Credential
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

export default Certification;