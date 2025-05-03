const NavDesk = () => {
  return (
    <div className="hidden md:flex items-center gap-5 md:gap-12 border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
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
  );
};

export default NavDesk;
