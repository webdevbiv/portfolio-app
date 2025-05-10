"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Tooltip } from "react-tooltip";

interface Props {
  src: string;
  catIndex: number; // index of the category (row)
  index: number; // index of the item inside category
  skillText: string;
}

const SkillsList = ({ src, index, catIndex, skillText }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const totalRowDuration = 0.7; // total animation duration for one row (adjust as needed)
  const staggerWithinRow = 0.1; // delay between items inside same row

  const categoryDelay = catIndex * totalRowDuration;
  const animationDelay = categoryDelay + index * staggerWithinRow;

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : ""}
        variants={imageVariants}
        transition={{ delay: animationDelay, duration: 0.5 }}
        data-tooltip-id={`tooltip-${catIndex}-${index}-${skillText}`}
        data-tooltip-content={skillText}
        aria-label={skillText}
        tabIndex={0}
        className="flex justify-center items-center  group  cursor-pointer w-[80px] h-[80px]"
      >
        <Image
          src={src}
          width={80}
          height={80}
          alt={skillText}
          className="skill-img"
        />
      </motion.div>

      <Tooltip
        id={`tooltip-${catIndex}-${index}-${skillText}`}
        place="top"
        offset={-1}
      />
    </>
  );
};

export default SkillsList;
