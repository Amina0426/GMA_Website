export default function About() {
  const imageFrameContainerStyle = {
    position: "relative",
    height: "400px", // container height
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  const imageFrameBaseStyle = {
    position: "absolute",
    width: "40%", // smaller size
    paddingBottom: "40%", // keeps square aspect ratio
    backgroundColor: "#e9ecef",
    border: "2px solid #000", // like frames in the pic
    borderRadius: "12px", // slightly rounded corners
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 0.3s ease-in-out",
  };

  // Frame 1 (top-left)
  const imageFrame1Style = {
    ...imageFrameBaseStyle,
    backgroundImage:
      "url(https://placehold.co/400x400/343A40/FFFFFF?text=Project+1)",
    top: "0%",
    left: "25%", // move left
    zIndex: "3",
  };

  // Frame 2 (middle-right)
  const imageFrame2Style = {
    ...imageFrameBaseStyle,
    backgroundImage:
      "url(https://placehold.co/400x400/6C757D/FFFFFF?text=Project+2)",
    top: "30%",
    left: "50%", // center
    zIndex: "2",
  };

  // Frame 3 (bottom-left)
  const imageFrame3Style = {
    ...imageFrameBaseStyle,
    backgroundImage:
      "url(https://placehold.co/400x400/ADB5BD/FFFFFF?text=Project+3)",
    top: "60%",
    left: "25%", // back to left
    zIndex: "1",
  };

  return (
    <section id="about" className="py-5" style={{ backgroundColor: "snow" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-3">
              Building the Future, Restoring the Past
            </h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </p>
            <p>
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
              semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
            <button className="btn btn-primary btn-lg mt-3">
              Learn More About Us
            </button>
          </div>

          <div className="col-lg-5">
            <div
              style={imageFrameContainerStyle}
              className="image-hover-container"
            >
              <div style={imageFrame1Style}></div>
              <div style={imageFrame2Style}></div>
              <div style={imageFrame3Style}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
