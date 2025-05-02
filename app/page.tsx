import Encryption from "@/components/Main/Encryption";
import Hero from "@/components/Main/Hero";
import Skills from "@/components/Main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <Skills />
        <Encryption />
      </div>
    </main>
  );
}
