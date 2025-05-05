const HeroBgVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="rotate-180 top-[-41%] left-0 z-[-100] absolute w-full h-full object-cover"
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
  );
};

export default HeroBgVideo;
