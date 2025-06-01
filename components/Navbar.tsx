"use client";

import React, { useState } from "react";
import NavIcon3 from "./NavIcon3";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full max-h-20 bg-[#FAF9F6] hover:border-b-3 hover:border-[#93b075] text-text transition-all duration-100 ease-in-out">
      <div className="max-w-5xl mx-auto">
        {/* Top row: always visible */}
        <div className="flex items-center justify-between px-12 mb-2">
          <img src="/logo.png" className="w-18" />
          <div className="md:hidden">
            <NavIcon3 isOpen={open} onClick={() => setOpen((o) => !o)} />
          </div>
        </div>
      </div>
      {/* Mobile menu: full-width, directly beneath the top row */}
      <div
        className="md:hidden rounded-sm overflow-hidden transition-all duration-300 ease-in-out bg-[#FAF9F6] w-full"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <ul className="flex flex-col items-center gap-2 pb-2">
          <li>
            <a
              href="/"
              className="block hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <hr className="w-64 border-t border-gray-300" />
          <li>
            <a
              href="/services"
              className="block hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <hr className="w-64 border-t border-gray-300" />
          <li>
            <a
              href="/about"
              className="block hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <hr className="w-64 border-t border-gray-300" />
          <li>
            <a
              href="/contact"
              className="block hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Desktop menu: inline while hidden on mobile */}
      <div className="hidden md:block">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="flex justify-center gap-10 pb-2">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-[16.5px] hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
