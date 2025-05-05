const SkillsBgVideo = () => {
  return (
    <div className="w-full h-full absolute  z-[-100] opacity-50">
      <div className="w-full h-full  opacity-40 absolute flex items-center justify-center bg-cover">
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
