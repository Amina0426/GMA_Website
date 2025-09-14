export default function Hero() {
  const heroStyle = {
    height: "calc(100vh - 66px)",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    color: "black", // changed default text color
  };

  const videoStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: "0",
    transform: "translate(-50%, -50%)",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "0",
  };

  const scrollButtonStyle = {
    position: "relative",
    zIndex: "1",
    bottom: "5vh",
    backgroundColor: "black",
    border: "2px solid black",
    color: "white",
    borderRadius: "8px", // rectangular with slightly rounded corners
    padding: "0.6rem 1.5rem", // enough padding for text
    fontSize: "1rem",
    cursor: "pointer",
    transition: "none",
    minWidth: "150px", // ensures text doesn’t overflow
    textAlign: "center",
  };

  const handleScrollDown = () => {
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
        <source src="/videos/gma_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Company Name and Tagline */}
      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "black", // changed to black
          zIndex: 2,
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>Structura Inc.in</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
          Building Tomorrow, Today
        </p>
      </div>

      {/* Scroll Down Button */}
      <button
        style={{
          ...scrollButtonStyle,
          padding: "0.6rem 1.2rem",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        Learn More ↓
      </button>
    </section>
  );
}
