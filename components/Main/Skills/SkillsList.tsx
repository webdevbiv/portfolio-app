"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Tooltip } from "react-tooltip";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_text: string;
}

const SkillsList = ({ src, width, height, index, skill_text }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3 * index;

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : ""}
        variants={imageVariants}
        custom={index}
        transition={{ delay: animationDelay }}
        data-tooltip-id={`tooltip-${index}-${skill_text}`}
        data-tooltip-content={skill_text}
        className="flex justify-center items-center group  cursor-pointer w-[80px] h-[80px]"
      >
        <Image src={src} width={width} height={height} alt={skill_text} />
      </motion.div>

      <Tooltip id={`tooltip-${index}-${skill_text}`} place="top" offset={-1} />
    </>
  );
};

export default SkillsList;
