import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./ProjectsSection.module.css";

const ProjectSection: React.FC = () => {
  return (
    <div className={styles.projectsContainer} id="projects-container">
      <SectionHeader content="My Projects" />
    </div>
  );
};

export default ProjectSection;
