"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const SkillsText = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-11">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[12px] px-[10px] mb-6 border border-[#7042f88b] bg-[#03001481]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Next js 13
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium  text-center mb-6"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200   text-center"
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
};
export default SkillsText;
