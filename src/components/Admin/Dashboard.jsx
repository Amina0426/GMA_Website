import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  // Fetch messages in real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  // Delete a message
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      await deleteDoc(doc(db, "messages", id));
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Admin Dashboard</h2>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => navigate("/")}
          >
            Back to Site
          </button>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="row g-3">
          {messages.map((msg) => (
            <div key={msg.id} className="col-lg-6 col-md-12">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{msg.name || "No Name"}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {msg.email || "No Email"}
                  </h6>

                  {msg.phone && (
                    <p>
                      <strong>Phone:</strong> {msg.phone}
                    </p>
                  )}
                  {msg.company && (
                    <p>
                      <strong>Company:</strong> {msg.company}
                    </p>
                  )}
                  {msg.projectType && (
                    <p>
                      <strong>Project Type:</strong> {msg.projectType}
                    </p>
                  )}
                  {msg.startDate && (
                    <p>
                      <strong>Expected Start Date:</strong> {msg.startDate}
                    </p>
                  )}
                  <p>
                    <strong>Message:</strong> {msg.message || "No Message"}
                  </p>

                  {msg.timestamp && (
                    <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                      Submitted on:{" "}
                      {new Date(msg.timestamp.seconds * 1000).toLocaleString()}
                    </p>
                  )}

                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => handleDelete(msg.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
