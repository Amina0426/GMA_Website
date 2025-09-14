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
        <div className="text-center mb-5">
          <h2 className="fs-2 fw-bold">Who We Are</h2>
          <p className="lead text-muted">
            Delivering structural engineering with precision and purpose.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2 className="display-7 fw-bold mb-3">
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
              nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deleniti doloribus commodi dicta,
              expedita natus animi? Cumque nemo, quibusdam doloremque
              consectetur tenetur laborum delectus omnis, tempora voluptate
              recusandae totam. Earum, sint. Corporis consectetur nihil quos
              dicta. Odit voluptatibus error magnam. Neque repellendus inventore
              modi debitis laboriosam ipsa ducimus quasi expedita iusto animi
              nulla optio totam fugit consequuntur incidunt, blanditiis nemo!
              Mollitia? Deserunt obcaecati quod ex esse, commodi eligendi quasi
              enim doloribus ab quo itaque animi porro debitis accusantium
              maiores sed. Soluta, velit? Perferendis suscipit cumque hic
              necessitatibus aliquam impedit incidunt eveniet! Blanditiis non
              earum corrupti. Necessitatibus porro soluta doloribus! Possimus
              modi culpa a incidunt fugiat molestiae animi excepturi maxime
              enim, eligendi nesciunt fuga dolores blanditiis? Aliquam vero
              harum eveniet alias rerum. Magni sed ipsa, assumenda, esse
              eligendi at odio nihil accusantium itaque, sit pariatur rem
              ducimus aperiam temporibus. Molestiae magni nulla nesciunt odit
              officiis exercitationem reprehenderit minima cum repellendus,
              reiciendis nam!
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
      </div>
    </section>
  );
}
