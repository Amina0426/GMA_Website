import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import AddEditProject from "./AddEditProject"; // the form component
import { Button } from "react-bootstrap";

export default function AdminProjectsBoard() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProject, setEditProject] = useState(null);

  // Fetch projects in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        const proj = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(proj);
      },
      (error) => console.error("Error fetching projects:", error)
    );
    return () => unsubscribe();
  }, []);

  const handleEdit = (project) => {
    setEditProject(project);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteDoc(doc(db, "projects", id));
    }
  };

  const handleAddNew = () => {
    setEditProject(null);
    setShowForm(true);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">My Projects</h2>
        <Button variant="primary" onClick={handleAddNew}>
          + Add New Project
        </Button>
      </div>

      {/* Add/Edit form */}
      {showForm && (
        <AddEditProject
          project={editProject}
          onClose={() => setShowForm(false)}
        />
      )}

      {projects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        <div className="row g-4 mt-2">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                {project.images && project.images[0] && (
                  <img
                    src={project.images[0]}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={project.title}
                  />
                )}
                <div className="card-body">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="text-muted">{project.description}</p>
                  <p>
                    <strong>Category:</strong> {project.category}
                  </p>
                  <div className="d-flex gap-2 mt-2">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleEdit(project)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
