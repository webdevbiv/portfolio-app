"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
const HeroContent = () => {
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center mt-40 w-full z-[20]"
      >
        <div className="h-full w-full justify-center items-center text-center md:text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box mb-6 mx-auto md:mx-0 py-[12px] px-[10px] border border-[#7042f88b] bg-[#03001481] "
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          {/* Tittle */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col mb-6  text-[2.5rem] md:text-6xl font-bold text-white md:max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience
            </span>
          </motion.div>

          {/* Text */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="mb-6 text-lg text-gray-400 md:max-w-[600px] "
          >
            I&apos;m a self-taught developer with a passion for creating
            visually appealing and user-friendly websites. With a strong
            foundation in HTML, CSS, and JavaScript, I have honed my skills in
            creating responsive and interactive web applications. My expertise
            extends to front-end frameworks like React and Next.js, allowing me
            to build dynamic and interactive user interfaces. Additionally, I
            have experience with back-end technologies such as Node.js and
            Express.js, enabling me to develop robust and scalable server-side
            solutions. With a keen eye for design and a commitment to delivering
            high-quality solutions, I am dedicated to delivering exceptional
            user experiences.
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            href="#projects"
            className="button-primary mx-auto md:mx-0  py-2 px-12  text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn more!
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
