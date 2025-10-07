export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-start justify-content-center">
          {/* Left Column Image Placeholder */}
          <div
            className="col-lg-5 d-none d-lg-flex position-relative flex-column justify-content-center"
            style={{
              top: "10vh",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "300px", // adjust height as needed
                backgroundColor: "#343A40",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "1.5rem",
                borderRadius: "0.5rem",
              }}
            >
              Image Placeholder
            </div>

            {/* Contact Info can go below this */}
            <div className="mt-3">
              <h3 className="fw-bold mb-3">Contact Us</h3>
              <p>
                <strong>Address:</strong> 123 Structural St., Builder City,
                India
              </p>
              <p>
                <strong>Phone:</strong> +91 123 456 7890
              </p>
              <p>
                <strong>Email:</strong> info@structuraldesign.com
              </p>
              <p>
                <strong>WhatsApp:</strong> +91 987 654 3210
              </p>
            </div>
          </div>

          {/* Right Column: Booking / Service Form */}
          <div className="col-lg-7 col-md-10 col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <h3 className="fw-bold mb-4">Book a Service</h3>
                <form>
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="+91 123 456 7890"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="mb-3">
                    <label htmlFor="company" className="form-label">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="mb-3">
                    <label htmlFor="projectType" className="form-label">
                      Project Type / Service
                    </label>
                    <select className="form-select" id="projectType" required>
                      <option value="">Select one...</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="structuralDesign">
                        Structural Design
                      </option>
                      <option value="consultancy">Consultancy</option>
                    </select>
                  </div>

                  {/* Expected Start Date */}
                  <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">
                      Expected Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="startDate"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Message / Project Details
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{
                        backgroundColor: "#0099ee",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                      Submit Booking
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
