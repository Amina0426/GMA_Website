export default function Hero() {
  const heroStyle = {
    // Set height to 100vh to take full viewport height
    height: "calc(100vh - 66px)",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end", // Align content to the bottom
    justifyContent: "center", // Center content horizontally
    color: "white",
  };

  const videoStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: "-1",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#343a40", // Fallback color
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
    zIndex: "0",
  };

  const scrollButtonStyle = {
    position: "relative",
    zIndex: "1",
    bottom: "5vh",
    background: "none",
    border: "2px solid white",
    color: "white",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  };

  const handleScrollDown = () => {
    // Scrolls the window down by the height of the viewport
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      <video autoPlay loop muted playsInline style={videoStyle}>
        {/* Using a placeholder video URL */}
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-computer-4467-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Scroll Down Button */}
      <button
        style={scrollButtonStyle}
        onClick={handleScrollDown}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "white";
        }}
        aria-label="Scroll down"
      >
        &darr;
      </button>
    </section>
  );
}
