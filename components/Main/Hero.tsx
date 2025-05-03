import HeroContent from "../Sub/HeroContent";

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full">
      <div className="relative flex flex-col h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rotate-180 top-[-340px] left-0 z-[-100] absolute w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <HeroContent />
      </div>
    </section>
  );
};
export default Hero;
