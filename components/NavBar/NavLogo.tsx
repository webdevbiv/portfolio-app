import Image from "next/image";

const NavLogo = () => {
  return (
    <a href="#about-me" className="h-auto w-auto flex items-center  py-2">
      <Image
        src="/logo.png"
        alt="logo"
        priority
        width={50}
        height={50}
        className="cursor-pointer hover:animate-slowspin "
      />
      <span className="font-bold ml-[12px] hidden md:block text-gray-300">
        WebDevBIV
      </span>
    </a>
  );
};

export default NavLogo;
