import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rotate-180 top-[-41%] left-0 z-[-100] absolute w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
};
export default Hero;
