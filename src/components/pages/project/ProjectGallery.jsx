import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectsData = [
  {
    title: "Skyline Tower",
    image: "/images/project1.jpg",
    description: "50-story modern commercial building.",
  },
  {
    title: "Bridge Connect",
    image: "/images/project2.jpg",
    description: "State-of-the-art suspension bridge.",
  },
  {
    title: "Green Eco Village",
    image: "/images/project3.jpg",
    description: "Sustainable residential community.",
  },
  {
    title: "Urban Plaza",
    image: "/images/project4.jpg",
    description: "Modern urban mixed-use development.",
  },
];

export default function ProjectsGallery() {
  const galleryRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (gallery) gallery.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const arrowBaseStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.8rem",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  };

  return (
    <section id="projects" className="py-5 bg-white position-relative">
      <div className="container position-relative">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Projects</h2>
          <p className="lead text-muted">
            Some of our recent structural engineering and construction works.
          </p>
        </div>

        {/* Projects Gallery */}
        <div
          className="d-flex overflow-auto"
          ref={galleryRef}
          style={{
            gap: "1rem",
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="card flex-shrink-0 shadow-sm border-0"
              style={{ minWidth: "300px", cursor: "pointer" }}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Arrows */}
        {canScrollLeft && (
          <button
            style={{ ...arrowBaseStyle, left: "-20px" }}
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}
        {canScrollRight && (
          <button
            style={{ ...arrowBaseStyle, right: "-20px" }}
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}
