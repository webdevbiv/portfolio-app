import { Socials } from "@/data/socials";
import Image from "next/image";

const MobileMenu = ({ setIsMenuOpen }: { setIsMenuOpen: any }) => {
  return (
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
  );
};
export default MobileMenu;
