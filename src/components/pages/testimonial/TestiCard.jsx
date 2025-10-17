import React from "react";

// Function that returns the style element
const getCardStyles = () => (
  <style type="text/css">{`
    .testimonial-card {
        position: relative;
        overflow: hidden;
        border: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%;
    }
    .testimonial-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
    }
    .quote-icon {
        font-family: 'Georgia', serif;
        font-size: 6rem;
        position: absolute;
        top: -1.5rem;
        left: 1rem;
        color: rgba(0, 0, 0, 0.08);
        z-index: 1;
        animation: float 5s ease-in-out infinite;
    }
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }
    .card-content {
        position: relative;
        z-index: 2;
    }
    .star-display .star {
         color: #e4e5e9;
         font-size: 1rem;
    }
    .star-display .star.filled {
        color: #ffc107;
    }
  `}</style>
);

export default function TestiCard({ name, review, stars }) {
  return (
    <>
      {getCardStyles()}
      <div className="card shadow-sm testimonial-card">
        <div className="card-body p-4">
          <div className="quote-icon">“</div>
          <div className="card-content">
            <p className="card-text">
              <em>"{review}"</em>
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <small className="fw-bold text-primary">- {name}</small>
              <div className="star-display">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < stars ? "filled" : ""}`}>
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
