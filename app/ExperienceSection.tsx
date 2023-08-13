import React from "react";
import SectionHeader from "./SectionHeader";
import { workExperience } from "../custom/workExperience";
import styles from "./ExperienceSection.module.css";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection: React.FC = () => {
  return (
    <div className={styles.experienceContainer} id="experience-container">
      <SectionHeader content="My Work Experience" />
      <div className={styles.experienceContentContainer}>
        {workExperience.map((workObj, index) => (
          <ExperienceCard workObj={workObj} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
