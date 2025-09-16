import Contact from "../contact/Contact";
import ProjectGallery from "../project/ProjectGallery";
import Testimonial from "../testimonial/Testimonial";
import About from "./About";
import Hero from "./Hero/Hero";
import Services from "../services/Services";
import MeetTheTeam from "./meet/MeetTheTeam";
import Awards from "./awards/Awards";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MeetTheTeam />
      <Services />
      <ProjectGallery />
      <Awards />
      <Testimonial />
      <Contact />
    </>
  );
}
