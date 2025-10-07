import SlideUp from "../../layout/SlideUp";

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
    backgroundImage: "url('/images/img-1.jpg')",
    top: "0%",
    left: "25%", // move left
    zIndex: "3",
  };

  // Frame 2 (middle-right)
  const imageFrame2Style = {
    ...imageFrameBaseStyle,
    backgroundImage: "url('/images/img-2.jpg')",
    top: "30%",
    left: "50%", // center
    zIndex: "2",
  };

  // Frame 3 (bottom-left)
  const imageFrame3Style = {
    ...imageFrameBaseStyle,
    backgroundImage: "url('/images/img-3.jpg')",
    top: "60%",
    left: "25%", // back to left
    zIndex: "1",
  };

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <SlideUp>
          <div className="text-center mb-5">
            <h2 className="fs-2 fw-bold">Who We Are</h2>
            <p className="lead text-muted">
              Crafting spaces that inspire, with precision, innovation, and
              integrity.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 className="display-7 fw-bold mb-3">
                Designing Dreams, Building Legacies
              </h2>
              <p className="lead text-muted">
                Founded in 2011 as RIMM and reimagined as GM Associates in 2020,
                we deliver architectural brilliance, structural excellence, and
                seamless project execution. From modern designs to expert
                renovations, we turn visions into reality while ensuring every
                detail is perfect.
              </p>
              <p>
                Our expertise spans residential, commercial, and industrial
                projects. We don’t just provide plans; we oversee construction,
                ensuring safety, quality, and efficiency from blueprint to final
                brick. Every structure we create reflects our commitment to
                innovation, durability, and aesthetic harmony.
                <br />
                <br />
                At GM Associates, trust is our foundation. We collaborate
                closely with clients, turning ideas into functional, beautiful,
                and sustainable spaces. Our team’s passion for excellence drives
                every project, delivering results that inspire confidence and
                exceed expectations.
                <br />
                <br />
                Whether it’s a new build, a renovation, or a restoration, we
                combine cutting-edge design, meticulous planning, and hands-on
                oversight to create spaces that stand the test of time. Explore
                our work and experience the difference of a company where
                creativity meets reliability, and visions become reality.
              </p>
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
        </SlideUp>
      </div>
    </section>
  );
}
