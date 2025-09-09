export default function FlameBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/assets/flamebgimage.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
