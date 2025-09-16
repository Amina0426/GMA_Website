import "./hero.css";

export default function Hero() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-section">
      {/* Overlay */}
      <div className="video-overlay"></div>

      {/* Background Video */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/gma_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="animate-fade-in-up-1">Structura Inc.in</h1>
        <p className="animate-fade-in-up-2">Building Tomorrow, Today</p>
        <button
          className="scroll-button animate-fade-in-up-3"
          onClick={handleScrollDown}
        >
          Learn More ↓
        </button>
      </div>
    </section>
  );
}
