import { Socials } from "@/data/socials";
import Image from "next/image";

const NavDeskSocials = () => {
  return (
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
  );
};

export default NavDeskSocials;
