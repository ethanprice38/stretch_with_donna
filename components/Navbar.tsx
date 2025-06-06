"use client";

import React, { useState } from "react";
import NavIcon3 from "./NavIcon3";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full bg-[#FAF9F6] hover:border-b-3 hover:border-[#93b075] text-text text-[18px] transition-all duration-100 ease-in-out">
      <div className="max-w-5xl mx-auto relative px-12 py-2 flex items-center justify-between">
        <img src="/logo.png" className="w-18" />
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="block hover:cursor-pointer hover:underline hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="block hover:cursor-pointer hover:underline hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              offset={-90}
              className="block hover:cursor-pointer hover:underline hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block hover:cursor-pointer hover:underline hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block hover:cursor-pointer hover:underline hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile nav icon */}
        <div className="md:hidden">
          <NavIcon3 isOpen={open} onClick={() => setOpen((o) => !o)} />
        </div>
      </div>
      {/* Mobile menu container */}
      <div
        className="md:hidden rounded-sm overflow-hidden transition-all duration-300 ease-in-out bg-[#FAF9F6] w-full"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <ul className="flex flex-col items-center gap-2 pb-2">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block hover:underline hover:cursor-pointer hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              Home
            </Link>
          </li>
          <hr className="w-64 border-t border-gray-300" />
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="block hover:underline hover:cursor-pointer hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              Services
            </Link>
          </li>
          <hr className="w-64 border-t border-gray-300" />
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className="block hover:underline hover:cursor-pointer hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              Frequently Asked Questions
            </Link>
          </li>
          <hr className="w-64 border-t border-gray-300" />
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block hover:underline hover:cursor-pointer hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              About
            </Link>
          </li>
          <hr className="w-64 border-t border-gray-300" />
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block hover:underline hover:cursor-pointer hover:text-[18.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              onClick={() => setOpen((o) => !o)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
