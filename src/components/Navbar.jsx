import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BgImage from '../assets/bg.png';
import Logo from '../assets/logo.png';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Navbar Background Image */}
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full px-8 md:px-16 lg:px-32 py-4 flex items-center justify-between flex-nowrap z-50 transition-all duration-300 ${
          scrolled ? "bg-black/60 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </div>

        <div className="flex-1"></div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-24">
          {["/", "/about", "/team", "/projects"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                `text-white transition ${
                  isActive
                    ? "underline underline-offset-8 decoration-green-500"
                    : "hover:underline hover:underline-offset-8 hover:decoration-green-500"
                }`
              }
            >
              {path === "/" ? "HOME" : path.substring(1).toUpperCase()}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden z-20"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <div
            className={`absolute top-0 left-0 w-full h-screen 
                flex flex-col items-center justify-center space-y-8 text-2xl z-40 
                transition-opacity duration-300 ease-in-out 
                backdrop-blur-md bg-black/70
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
        >
        {/* Close Button inside Mobile Menu */}
        <button
            onClick={closeMenu}
            className="absolute top-8 right-8 md:right-16 lg:right-32 text-white"
        >
            <X size={32} />
        </button>

        {["/", "/about", "/team", "/projects"].map((path, idx) => (
            <NavLink
            key={idx}
            to={path}
            className={({ isActive }) =>
                `text-white transition ${
                isActive
                    ? "underline underline-offset-8 decoration-green-500"
                    : "hover:underline hover:underline-offset-8 hover:decoration-green-500"
                }`
            }
            onClick={closeMenu}
            >
            {path === "/" ? "HOME" : path.substring(1).toUpperCase()}
            </NavLink>
        ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
