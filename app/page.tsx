import Footer from "@/components/Main/Footer/Footer";
import Hero from "@/components/Main/Hero/Hero";
import Projects from "@/components/Main/Projects/Projects";
import Skills from "@/components/Main/Skills/Skills";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
