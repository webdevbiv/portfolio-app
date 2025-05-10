import SkillsList from "@/components/Main/Skills/SkillsList";
import {
  Skills_libraries,
  Skills_style,
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
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="container flex-col ">
        <div className="mt-[68px] mb-10 md:mb-20">
          <SkillsText />
          <div className="[&>div:not(:last-child)]:mb-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.name}
                className="flex flex-row justify-around flex-wrap items-center gap-8"
              >
                {category.data.map((image, index) => (
                  <SkillsList
                    key={image.skill_name}
                    src={image.Image}
                    index={index + 1}
                    catIndex={catIndex}
                    skillText={image.skill_name}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <SkillsBgVideo />
      </div>
    </section>
  );
};

export default Skills;
