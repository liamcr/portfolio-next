import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import LandingImage from "./LandingImage";
import ProjectSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function Home() {
  return (
    <>
      <LandingImage />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
