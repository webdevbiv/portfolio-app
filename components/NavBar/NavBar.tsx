"use client";

import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Container from "../Container/Container";
import NavDesk from "./NavDesk";
import NavDeskSocials from "./NavDeskSocials";
import NavLogo from "./NavLogo";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container className="fixed w-full top-0  shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-100">
      <div className="flex justify-between items-center w-full h-full">
        {/* Logo */}
        <NavLogo />
        {/* Desktop Nav */}
        <NavDesk />
        {/* Desktop Socials */}
        <NavDeskSocials />
        {/* Mobile Menu Button */}
        <div className=" flex items-center md:hidden ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <IoMdClose size={40} className="text-gray-200" />
            ) : (
              <IoMdMenu size={40} className="text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </Container>
  );
};

export default Navbar;
