import { useParams, Link } from "react-router-dom";
import projectsData from "./projectsData";

export default function P1() {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container py-5">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-primary mt-3">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/projects" className="btn btn-outline-secondary mb-3">
        ← Back to Projects
      </Link>
      <h2 className="fw-bold mb-3">{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className="img-fluid mb-4 rounded shadow-sm"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <p className="lead">{project.details}</p>
    </div>
  );
}
