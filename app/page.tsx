import Encryption from "@/components/Main/Encryption";
import Footer from "@/components/Main/Footer";
import Hero from "@/components/Main/Hero/Hero";
import Projects from "@/components/Main/Projects";
import Skills from "@/components/Main/Skills/Skills";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        {/* <Projects /> */}
        {/* <Footer /> */}
      </div>
    </main>
  );
}
