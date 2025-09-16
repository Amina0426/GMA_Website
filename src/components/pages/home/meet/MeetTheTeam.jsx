import React, { useRef, useState, useEffect } from "react";
import "./meet.css";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Aisha Khan",
      role: "Lead Structural Engineer",
      img: "/images/team-1.jpg",
      bio: "10+ years designing resilient buildings and retrofits.",
    },
    {
      name: "Rahul Verma",
      role: "Project Manager",
      img: "/images/team-2.jpg",
      bio: "Coordinates multidisciplinary teams and client delivery.",
    },
    {
      name: "Priya Singh",
      role: "Seismic Specialist",
      img: "/images/team-3.jpg",
      bio: "Focus on seismic assessment & retrofit strategy.",
    },
    {
      name: "Omar Patel",
      role: "Site Inspector",
      img: "/images/team-4.jpg",
      bio: "On-site quality control & safety lead.",
    },
    {
      name: "Nina Rao",
      role: "Permits & Compliance",
      img: "/images/team-5.jpg",
      bio: "Handles approvals and regulatory compliance.",
    },
    {
      name: "Sameer Ali",
      role: "Foundation Engineer",
      img: "/images/team-6.jpg",
      bio: "Groundworks, soil reports and foundation design.",
    },
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollBy = (distance) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section id="team" className="py-5 bg-white">
      <div className="container position-relative">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-1">Meet the Team</h2>
          <p className="text-muted mb-0">The people building your projects.</p>
        </div>

        {/* Conditionally visible arrows */}
        {canScrollLeft && (
          <button
            className="team-scroll-btn team-scroll-left"
            aria-label="Scroll left"
            onClick={() => scrollBy(-300)}
          >
            ‹
          </button>
        )}
        {canScrollRight && (
          <button
            className="team-scroll-btn team-scroll-right"
            aria-label="Scroll right"
            onClick={() => scrollBy(300)}
          >
            ›
          </button>
        )}

        {/* Scrollable row */}
        <div className="team-row" ref={scrollRef}>
          {team.map((member, idx) => (
            <div key={idx} className="team-card-wrapper">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top team-card-img"
                />
                <div className="card-body">
                  <h5 className="card-title mb-1">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {member.role}
                  </h6>
                  <p className="card-text text-muted small mb-0">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
