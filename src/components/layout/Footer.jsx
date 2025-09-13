export default function Footer() {
  const footerStyle = {
    position: "relative",
    background:
      "url('https://placehold.co/1920x1080/212529/FFFFFF?text=Building+Skyline')",
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
          {/* Column 1: About the Company */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Structural Designs Inc.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about" className="text-white-50 text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white-50 text-decoration-none"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white-50 text-decoration-none"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Contact</h5>
            <ul className="list-unstyled">
              <li className="text-white-50">123 Construction Ave, Suite 100</li>
              <li className="text-white-50">New York, NY 10001</li>
              <li className="text-white-50">Email: contact@structural.inc</li>
              <li className="text-white-50">Phone: (123) 456-7890</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-uppercase">Follow Us</h5>
            {/* Placeholder for social media icons */}
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
            &copy; {new Date().getFullYear()} Structural Designs Inc. All Rights
            Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
