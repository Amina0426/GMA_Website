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
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
        <div className="row">
          {/* Left Column (About + Links) */}
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold text-uppercase">GM Associates</h5>
            <p>
              GM Associates specializes in structural design, architectural
              planning, retrofitting, and renovation services. We combine
              creativity with technical precision to deliver safe, efficient,
              and visually inspiring spaces. Our goal is to provide reliable
              engineering solutions that enhance durability, functionality, and
              aesthetic value for every project we undertake.
            </p>

            <h5 className="fw-bold text-uppercase mt-4">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white-50 mb-5 text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-white-50 mb-5 text-decoration-none"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-white-50 mb-5 text-decoration-none"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white-50 mb-5 text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column (Contact + Social) */}
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li className="text-white-50">#8-2-610/A/401,4th Floor</li>
              <li className="text-white-50">
                Silver Towers Banjara, Road #11, Banjara Hills
              </li>
              <li className="text-white-50">Hyderabad - 500034, Telangana</li>
              <li className="text-white-50">Email: muneer@rimmec.com</li>
              <li className="text-white-50">Phone: +91 95504 15657</li>
            </ul>

            <h5 className="fw-bold text-uppercase mt-4">Follow Us</h5>
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
