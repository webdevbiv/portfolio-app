import SkillsList from "@/components/Main/Skills/SkillsList";
import {
  Skills_libraries,
  Skills_style,
  Skills_tools,
  Skills_base,
  Skills_backend,
  Skills_bundlers,
} from "@/data/skills";
import SkillsText from "./SkillsText";
import SkillsBgVideo from "./SkillsBgVideo";

const skillCategories = [
  { name: "Base", data: Skills_base },
  { name: "Style", data: Skills_style },
  { name: "Libraries", data: Skills_libraries },
  { name: "Bundlers", data: Skills_bundlers },
  { name: "Backend", data: Skills_backend },
  { name: "Tools", data: Skills_tools },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="container flex-col ">
        <div className="my-[68px] md:my-20">
          <SkillsText />

          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className="flex flex-row justify-around flex-wrap mb-11  gap-10 items-center"
            >
              {category.data.map((image, index) => (
                <SkillsList
                  key={image.skill_name}
                  src={image.Image}
                  index={index + catIndex * 4} // unique index across categories
                  skill_text={image.skill_name}
                />
              ))}
            </div>
          ))}
        </div>

        <SkillsBgVideo />
      </div>
    </section>
  );
};

export default Skills;
