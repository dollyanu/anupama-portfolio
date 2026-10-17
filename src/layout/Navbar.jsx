import { useState } from "react";
import logo from "../assets/logo.jpg";
import {
  FaHome,
  FaUserCircle,
  FaBriefcase,
  FaProjectDiagram,
  FaCheckCircle,
  FaCertificate,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />, link: "#home" },
    { name: "About", icon: <FaUserCircle />, link: "#about" },
    { name: "Experience", icon: <FaBriefcase />, link: "#experience" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "#projects" },
    { name: "Skills", icon: <FaCheckCircle />, link: "#skills" },
    { name: "Certifications", icon: <FaCertificate />, link: "#certifications" },
    { name: "Contact", icon: <FaEnvelope />, link: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-dark-100/90 backdrop-blur-sm py-2 px-6 shadow-lg z-50">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
  href="#home"
  className="text-3xl font-bold tracking-wider text-white"
>
  A<span className="text-purple-400">M</span>
</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className=" relative flex items-center gap-2 hover:text-purple group transition duration-300"
              >
                {item.icon}
                {item.name}
                 <span
      className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-purple transition-all duration-300 group-hover:w-full`}
    ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#101735]">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className=" relativeflex items-center gap-3 px-6 py-4 text-white hover:bg-purple group transition"
              onClick={() => setOpen(false)}             
            >
              {item.icon}
              {item.name}
              <span
      className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-purple transition-all duration-300 group-hover:w-full`}
    ></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;