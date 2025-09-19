import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import SP1 from "../pages/services/SP1";
import ProjectDisplay from "../pages/project/ProjectDisplay";
import P1 from "../pages/project/P1";
import Contact from "../pages/contact/Contact";
import ScrollToTop from "./ScrollTop";

export default function Body() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceId" element={<SP1 />} />
        <Route path="/projects" element={<ProjectDisplay />} />
        <Route path="/projects/:projectId" element={<P1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
