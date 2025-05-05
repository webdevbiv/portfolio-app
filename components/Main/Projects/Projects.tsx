import ProjectsBgVideo from "./ProjectsBgVideo";
import ProjectsCard from "./ProjectsCard";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <ProjectsBgVideo />
      <div className="container">
        <div className="flex flex-col items-center justify-center my-[68px] ">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-[68px]">
            My Projects
          </h1>
          <div className="h-full w-full flex flex-col md:flex-row gap-10">
            <ProjectsCard
              src="/NextWebsite.png"
              title="Modern Next.js Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ProjectCard
              src="/CardImage.png"
              title="Interactive Website Cards"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
