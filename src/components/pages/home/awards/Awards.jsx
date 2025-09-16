import React from "react";
import "./awards.css";

export default function Awards() {
  const awards = [
    {
      title: "Best Structural Design 2022",
      desc: "Recognized for excellence in innovative high-rise design.",
    },
    {
      title: "Green Construction Award",
      desc: "Awarded for sustainable materials and eco-friendly practices.",
    },
    {
      title: "Safety Excellence Award",
      desc: "Outstanding site safety protocols and zero incidents.",
    },
    {
      title: "Client Excellence Award",
      desc: "Top-rated project delivery and client satisfaction.",
    },
    {
      title: "Innovation in Engineering",
      desc: "Cutting-edge seismic retrofit techniques acknowledged.",
    },
    {
      title: "Lifetime Achievement",
      desc: "Honoring decades of leadership in construction.",
    },
  ];

  return (
    <section className="py-5 bg-light" id="awards">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold awards-heading">Awards & Achievements</h2>
          <p className="text-muted">Celebrating milestones of excellence</p>
        </div>

        <div className="row g-4">
          {awards.map((award, idx) => (
            <div key={idx} className="col-lg-6 d-flex">
              <div
                className={`award-card d-flex align-items-center ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Placeholder Image */}
                <div className="award-img"></div>

                {/* Text */}
                <div className="award-text ms-3 me-3">
                  <h5 className="fw-bold mb-1">{award.title}</h5>
                  <p className="text-muted small mb-0">{award.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
