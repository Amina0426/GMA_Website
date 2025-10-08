import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #f0f4f8, #e6eef3)",
      }}
    >
      <div
        className="p-5 rounded-4 shadow"
        style={{
          width: "380px",
          backgroundColor: "#fff",
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold" style={{ color: "#0099ee" }}>
            GM Associates Admin
          </h3>
          <p className="text-muted small mb-0">
            Sign in with your admin credentials
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="text-danger small mb-3 text-center">{error}</div>
          )}

          <button
            type="submit"
            className="btn w-100 fw-semibold"
            style={{
              backgroundColor: "#0099ee",
              color: "#fff",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#007acc")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0099ee")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
