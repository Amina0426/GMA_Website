import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function P1() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

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
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid mb-4 rounded shadow-sm"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
      )}
      <p className="lead">{project.details}</p>
    </div>
  );
}
