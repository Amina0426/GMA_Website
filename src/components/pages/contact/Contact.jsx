import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    startDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true); // hide form and show success message
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  };
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
                <strong>Address:</strong>
                <br />
                GM Associates
                <br />
                #8-2-610/A/401,4th Floor
                <br />
                Silver Towers Banjara, Road #11, Banjara Hills
                <br />
                Hyderabad - 500034, Telangana
                <br />
              </p>
              <p>
                <strong>Phone/WhatsApp:</strong> +91 95504 15657
              </p>
              <p>
                <strong>Email:</strong> muneer@rimmec.com
              </p>
            </div>
          </div>

          {/* Right Column: Booking / Service Form */}
          <div className="col-lg-7 col-md-10 col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                {submitted ? (
                  <div className="text-center">
                    <h5>Thank you!</h5>
                    <p>
                      Your message has been sent successfully. We will contact
                      you via email or WhatsApp for further details.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="fw-bold mb-4">Book a Service</h3>
                    <form onSubmit={handleSubmit}>
                      {/* Name */}
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
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
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
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
                          name="phone"
                          className="form-control"
                          placeholder="+91 123 456 7890"
                          value={formData.phone}
                          onChange={handleChange}
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
                          name="company"
                          className="form-control"
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Project Type */}
                      <div className="mb-3">
                        <label htmlFor="projectType" className="form-label">
                          Project Type / Service
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          className="form-select"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                        >
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
                          name="startDate"
                          className="form-control"
                          value={formData.startDate}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Message */}
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">
                          Message / Project Details
                        </label>
                        <textarea
                          name="message"
                          className="form-control"
                          rows="5"
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={handleChange}
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
