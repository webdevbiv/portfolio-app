const ProjectsBgVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-100] opacity-60">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="w-[180%] h-[180%] object-cover absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/Encryption.webm"
      />
    </div>
  );
};

export default ProjectsBgVideo;
