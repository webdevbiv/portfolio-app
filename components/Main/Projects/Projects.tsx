import ProjectsCard from "./ProjectsCard";
import ProjectCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-[-10]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          src="/Encryption.webm"
        />
      </div>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
          </h1>
          <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
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
