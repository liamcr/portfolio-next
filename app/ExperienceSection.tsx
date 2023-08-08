import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./ExperienceSection.module.css";

const ExperienceSection: React.FC = () => {
  return (
    <div className={styles.experienceContainer} id="experience-container">
      <SectionHeader content="My Work Experience" />
    </div>
  );
};

export default ExperienceSection;
