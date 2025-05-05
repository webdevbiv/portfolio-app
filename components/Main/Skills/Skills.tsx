import SkillsList from "@/components/Main/Skills/SkillsList";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillsText from "./SkillsText";
import SkillsBgVideo from "./SkillsBgVideo";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container flex-col ">
        <div className="my-[68px] md:my-20">
          <SkillsText />
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Skill_data.map((image, index) => (
              <SkillsList
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Frontend_skill.map((image, index) => (
              <SkillsList
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Backend_skill.map((image, index) => (
              <SkillsList
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Full_stack.map((image, index) => (
              <SkillsList
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {Other_skill.map((image, index) => (
              <SkillsList
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
        <SkillsBgVideo />
      </div>
    </section>
  );
};
export default Skills;
