import Contact from "../contact/Contact";
import ProjectGallery from "../project/ProjectGallery";
import Testimonial from "../testimonial/Testimonial";
import About from "./About";
import Hero from "./Hero";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectGallery />
      <Testimonial />
      <Contact />
    </>
  );
}
