export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get In Touch</h2>
          <p className="lead text-muted">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="row align-items-center justify-content-center">
          {/* Left Column: Image Placeholder (Visible on LG screens and up) */}
          {/* The d-none d-lg-block classes hide this div by default and only show it on large (lg) screens */}
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="https://placehold.co/600x450/343A40/FFFFFF?text=Our+Office"
              className="img-fluid rounded shadow-lg"
              alt="A placeholder for an image of the office or a featured project"
            />
          </div>

          {/* Right Column: Contact Form */}
          {/* This column takes up the full width on small screens, and half on large screens */}
          <div className="col-lg-6 col-md-10 col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <form>
                  {/* Name Input */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
