import { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "./projectsData";

export default function ProjectsBoard() {
  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-5 bg-light">
      <div className="container" style={{ height: "calc(100vh - 66px)" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">All Projects</h2>
          <p className="lead text-muted">Browse all our works by category.</p>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${
                selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="row g-4">
          {filtered.map((project) => (
            <div key={project.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link
                to={`/projects/${project.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={project.image}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="text-muted">{project.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
