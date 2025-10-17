import Contact from "../contact/Contact";
import ProjectGallery from "../project/ProjectGallery";
import Testimonial from "../testimonial/Testimonial";
import About from "./About";
import Hero from "./Hero/Hero";
import Services from "../services/Services";
import MeetTheTeam from "./meet/MeetTheTeam";
import Awards from "./awards/Awards";
import SlideUp from "../../layout/SlideUp";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FAQ from "./faq/FAQ";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return (
    <>
      <Hero />
      <About />
      <MeetTheTeam />
      <Services />
      <ProjectGallery />
      <Testimonial />
      <FAQ />
    </>
  );
}
