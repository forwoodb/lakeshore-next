"use client";
import Image from "next/image";
import logo from "@/public/images/your-logo-white.webp";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    // <nav className="fixed w-full overflow-hidden bg-honolulu-blue">
    <nav className="fixed w-full overflow-hidden z-2 shadow-2xl">
      <div className="flex justify-between items-center w-[95%] h-20 m-auto">
        {/* <a href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={128}
            height={80}
            className="h-full"
          />
        </a> */}
        <div className="logo flex items-center w-64 h-16">
          <div className="rectangle absolute w-26 h-12 border-t border-b border-l border-white">
            <div className="line rectangle-sm h-4 border-r border-white"></div>
            <div className="rectangle-sm h-4"></div>
            <div className="line rectangle-sm h-3.5 border-r border-white"></div>
          </div>
          <div className="logo-text z-1 w-51 m-auto opacity-100 font-bold text-honolulu-blue">
            <span className="text-white">Lakeshore</span> Web Services
          </div>
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setIsActive(!isActive)}
          className={`my-auto mx-0 cursor-pointer md:hidden`}
        >
          <span
            className={`block w-8 h-1 m-1.5 bg-black ${isActive && styles.bar}`}
          ></span>
          <span
            className={`block w-8 h-1 m-1.5 bg-black ${isActive && styles.bar}`}
          ></span>
          <span
            className={`block w-8 h-1 m-1.5 bg-black ${isActive && styles.bar}`}
          ></span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center my-auto mx-0">
          <li className="p-4 pr-0 m-4 mr-0">
            <Link
              href={"/"}
              className="py-2 text-white hover:text-honolulu-blue hover:border-b-4 border-honolulu-blue"
            >
              Home
            </Link>
          </li>
          <li className="p-4 pr-0 m-4 mr-0">
            <Link
              href="#about"
              className="py-2 text-white hover:text-honolulu-blue hover:border-b-4 border-honolulu-blue"
            >
              About
            </Link>
          </li>
          <li className="p-4 pr-0 m-4 mr-0">
            <Link
              href={"contact"}
              className="py-2 text-white hover:text-honolulu-blue hover:border-b-4 border-honolulu-blue"
            >
              Contact
            </Link>
          </li>
          <li className="p-4 pr-0 m-4 mr-0 cursor-pointer">☀️</li>
        </ul>
        {/* Mobile/Tablet Menu */}
        <ul
          className={`fixed top-20 ${
            isActive ? "right-0 w-[50%] bg-white" : "hidden"
          }`}
        >
          <li className="py-4 px-2 text-center">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="py-4 px-2 text-center">
            <Link href="#about">About</Link>
          </li>
          <li className="py-4 px-2 text-center">
            <Link href={"contact"}>Contact</Link>
          </li>
          <li className="py-4 px-2 text-center cursor-pointer">☀️</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
