"use client";

import React, { useState, useEffect } from "react";
import Socialicon from "./Socialicon";
import { motion } from "framer-motion";
import Link from "next/link"; // Importa el componente Link
import LogoSVG from "../common/LogoSVG";
import { BsFillTelephoneFill } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY == 0) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full h-[19vh]  z-50 bg-black bg-opacity-70 flex justify-between items-center px-3 md:p-12 md:px-8 lg:p-12 text-white transition-transform duration-300 ease-in-out
     ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Logo */}
      <div className=' '>
        <LogoSVG className=''  heightMobile="15vh" heightTablet="15vh" heightDesktop="18vh" />
      </div>

      {/* Burger Button */}
      <div className="flex items-end justify-center relative left-[0.5vw] xs:left-[15.5vw] ">
        <button
          className="block lg:hidden p-4 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          ) : (
            // Burger icon
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <motion.ul
        className={`relative lg:left-[7vw] 2xl:left-6 px-2 lg:px-0 lg:flex lg:justify-center text-md lg:bg-transparent bg-black bg-opacity-70
        lg:translate-y-0 transition-transform transform ease-in-out duration-500 gap-8
        ${
          isOpen
            ? "translate-y-[128px] translate-x-[-18vw] sm:translate-x-[-8vw]"
            : "translate-y-[-600vh] translate-x-[-40px]"
        }  `}
      >
        <li>
          <Link
            href="/"
            className=" block  py-2 text-center hover:text-custom-red"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/restaurant"
            className="block  py-2 text-center hover:text-custom-red"
          >
            Restaurant
          </Link>
        </li>
        <li>
          <Link
            href="/cabanas"
            className="block text-center py-2 hover:text-custom-red"
          >
            Cabañas
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 text-center hover:text-custom-red"
          >
            Sobre Nosotros
          </Link>
        </li>
      </motion.ul>

      {/* Botones contacto y rss */}
      <div className="flex items-center justify-center gap-5">

          {/* botones contacto */}
        <div className="relative  right-[21vw] xs:left-[0] flex flex-col items-center justify-center gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-2">
        <div className="">
          <motion.button
            className="flex items-center justify-center border text-custom-rojo bg-custom-crema font-bold py-2 px-4 rounded-[1rem] hover:bg-custom-crema transition-colors"
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              window.open(
                "https://wa.me/56957661602?text=Hola%21%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20El%20Restaurant%20y%20sus%20servicios.",
                "_blank"
              )
            }
          >
            <BsFillTelephoneFill className="mr-2" />{" "}
            {/* Ícono con margen a la derecha */}
            Restaurant
          </motion.button>
        </div>

        <div className="">
          <motion.button
            className="flex items-center justify-center border text-custom-rojo bg-custom-crema font-bold py-2 px-4 rounded-[1rem] hover:bg-custom-crema transition-colors "
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              window.open(
                "https://wa.me/56973990301?text=Hola%21%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20Cabañas.",
                "_blank"
              )
            }
          >
            <BsFillTelephoneFill className="mr-2" />{" "}
            {/* Ícono con margen a la derecha */}
            Cabañas
          </motion.button>
        </div>
        </div>

        <div className="hidden lg:block">
          <Socialicon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
