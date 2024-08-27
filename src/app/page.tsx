// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
import Testimonial from "./testimonial";
import { ProjectShowcase } from "./project-showcase";
import { TechStack } from "./tech-stack";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <ProjectShowcase />
      <TechStack />
      <InformationSection />
      <Footer />
    </>
  );
}
