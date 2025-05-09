"use client";

import { Dispatch, SetStateAction } from "react";
import { Socials } from "@/data/socials";
import Image from "next/image";

interface MobileMenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ setIsMenuOpen }: MobileMenuProps) => {
  return (
    <div className="md:hidden absolute flex flex-col items-center h-full pt-[68px]  gap-4 p-4   bg-[#0300148e] backdrop-blur-md text-gray-200 left-0 right-0  z-[90]">
      <a
        href="#about-me"
        className="cursor-pointer "
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
          <a
            key={social.name}
            // href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
