import Location from "./Location";

export default function Footer() {
  const footerStyle = {
    position: "relative",
    background: "url('/images/footer.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    color: "white",
    padding: "4rem 0",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <footer style={footerStyle}>
      <div style={overlayStyle}></div>
      <div className="container" style={contentStyle}>
        <div className="row gy-4 align-items-start">
          {/* Left Column (About + Links) */}
          <div className="col-md-6 text-md-start text-center">
            <h5 className="text-white fw-bold text-uppercase mb-3">
              GM Associates
            </h5>
            <p className="text-white-50">
              GM Associates specializes in structural design, architectural
              planning, retrofitting, and renovation services. We combine
              creativity with technical precision to deliver safe, efficient,
              and visually inspiring spaces. Our goal is to provide reliable
              engineering solutions that enhance durability, functionality, and
              aesthetic value for every project we undertake.
            </p>

            <h5 className=" text-white fw-semibold text-uppercase mt-4">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-white text-decoration-none hover-link"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/#services"
                  className="text-white text-decoration-none hover-link"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/projects"
                  className="text-white text-decoration-none hover-link"
                >
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-white text-decoration-none hover-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column (Contact + Social) */}
          <div className="col-md-6 text-md-end text-center">
            <h5 className="fw-bold text-uppercase text-white">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-1 fs-6 fw-bold text-white">Address: </li>
              <li className="my-2">
                <Location />
              </li>
              <li className="text-white-50">#8-2-610/A/401</li>
              <li className="text-white-50">
                4th Floor, Silver Towers Banjara
              </li>
              <li className="text-white-50">Rd No 11, Banjara Hills</li>
              <li className="text-white-50">Hyderabad - 500034, Telangana</li>
              <li className="mt-3 text-white-50">Email: muneer@rimmec.com</li>
              <li className="text-white-50">Phone: +91 95504 15657</li>
            </ul>

            <h5 className="fw-bold fs-6 text-white text-uppercase mt-4">
              Follow Us
            </h5>
            <a href="#" className="text-white-50 me-2 text-decoration-none">
              [LinkedIn]
            </a>
            <a href="#" className="text-white-50 me-2 text-decoration-none">
              [Facebook]
            </a>
            <a href="#" className="text-white-50 text-decoration-none">
              [Twitter]
            </a>
          </div>
        </div>

        <div className="text-center text-white-50 pt-4 mt-4 border-top border-secondary">
          <small>
            &copy; {new Date().getFullYear()} GM Associates All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
