"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import NavDesk from "./NavDesk";
import NavDeskSocials from "./NavDeskSocials";
import NavLogo from "./NavLogo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="fixed w-full top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100]">
        <div className="container flex justify-between items-center">
          <NavLogo />
          <NavDesk />
          <div className="flex items-center gap-4">
            <NavDeskSocials />
            <div className="md:hidden flex items-center ">
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
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-modal="true"
            role="dialog"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full  md:hidden flex flex-col pt-[68px] gap-4 p-4 bg-[#03001450] backdrop-blur-md z-[90]"
          >
            <MobileMenu setIsMenuOpen={setIsMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
