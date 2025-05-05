const SkillsBgVideo = () => {
  return (
    <div className="w-full h-full absolute">
      <div className="w-full h-full z-[-10] opacity-40 absolute flex items-center justify-center bg-cover">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/cards-video.webm"
        />
      </div>
    </div>
  );
};
export default SkillsBgVideo;
