"use client";

import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Socials } from "@/constants";
import Image from "next/image";
import Container from "../Container/Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container className="fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-100">
      <div className="flex flex-row items-center justify-between h-full">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            WebDevBIV
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 md:gap-12 h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className=" flex items-center md:hidden ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoMdClose size={30} className="text-gray-200" />
            ) : (
              <IoMdMenu size={30} className="text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-[#030014CC] backdrop-blur-md text-gray-200 absolute  left-0 right-0 z-100">
          <a
            href="#about-me"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <div className="flex gap-4">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
