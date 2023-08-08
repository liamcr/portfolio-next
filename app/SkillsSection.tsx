import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import styles from "./SkillsSection.module.css";
import SkillCard from "./SkillCard";

const SkillsSection: React.FC = () => {
  const skillIDs = [
    "javascript",
    "reactjs",
    "typescript",
    "golang",
    "nodejs",
    "kubernetes",
    "git",
    "nextJS",
    "kafka",
    "mongoDB",
  ];

  return (
    <div className={styles.skillsContainer} id="skills-container">
      <SectionHeader content="My Skills" />
    </div>
  );
};

export default SkillsSection;
