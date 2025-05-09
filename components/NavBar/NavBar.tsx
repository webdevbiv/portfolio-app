"use client";

import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NavDesk from "./NavDesk";
import NavDeskSocials from "./NavDeskSocials";
import NavLogo from "./NavLogo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  hidden: { x: "100%" }, // start fully offscreen to the right
  visible: { x: 0 }, // slide into place
  exit: { x: "100%" }, // slide back out to the right
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div>
        <div className="fixed w-full top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  z-[100]">
          <div className="container">
            <NavLogo />
            <NavDesk />
            <NavDeskSocials />
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <IoMdClose size={40} className="text-gray-200" />
                ) : (
                  <IoMdMenu size={40} className="text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <MobileMenu setIsMenuOpen={setIsMenuOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
