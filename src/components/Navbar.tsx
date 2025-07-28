import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useGSAP(() => {
    gsap.from(".navlinks", {
      opacity: 0,
    });

    gsap.from(".navlinks div, .navlinks div ul li", {
      stagger: 0.1,
      y: -100,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="navlinks bg-white/10 backdrop-blur-xl absolute top-0 left-0 z-100 text-white flex justify-between items-center px-6 py-2 w-full">
      <div className={`w-[9vw] sm:w-[2vw] ${isMobileMenuOpen ? "hidden" : "flex"}`}>
        <Link to="/">
          <img className="w-full cursor-pointer" src="/assets/logo2.png" alt="Logo" />
        </Link>
      </div>

      <div className={`md:flex ${isMobileMenuOpen ? "flex" : "hidden"} md:items-center md:h-full`}>
        <ul className="py-3 md:py-0 flex items-center gap-8">
          <li>
            <Link className="hover:text-gray-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/contact">
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden flex items-center text-2xl cursor-pointer" onClick={toggleMobileMenu}>
        ☰
      </div>
    </div>
  );
};
export default Navbar;
