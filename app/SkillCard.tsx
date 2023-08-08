import React from "react";
import { technologies } from "../custom/technologies";
import styles from "./SkillCard.module.css";
import Image from "next/image";

type SkillCardProps = {
  skillID: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skillID }) => {
  return (
    <div className={styles.skillCardContainer}>
      <div className={styles.skillIconContainer}>
        <Image
          src={technologies[skillID]?.imageReference}
          alt="Skill icon"
          className={styles.skillCardIcon}
        />
      </div>
      <div className={styles.skillCardHeader}>
        {technologies[skillID]?.displayName}
      </div>
      <div className={styles.skillCardExperience}>
        {technologies[skillID]?.timeExperienced}
      </div>
      <div className={styles.skillCardTypeExperience}>
        {technologies[skillID]?.experienceType}
      </div>
    </div>
  );
};

export default SkillCard;
