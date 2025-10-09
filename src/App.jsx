import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Body from "./components/layout/Body";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/Admin/PrivateRoute";
import Dashboard from "./components/Admin/Dashboard";
import ProjectsBoardAdmin from "./components/Admin/ProjectBoardAdmin";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div style={{ paddingTop: !isAdminRoute ? "66px" : "0" }}>
        <Routes>
          {/* Public site routes */}
          <Route path="/*" element={<Body />} />

          {/* Admin routes */}
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/admin/projects" element={<ProjectsBoardAdmin />} />
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
