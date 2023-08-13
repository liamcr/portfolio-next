import React from "react";
import { WorkObj } from "../custom/workExperience";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./ExperienceCard.module.css";
import Image from "next/image";

type ExperienceCardProps = {
  workObj: WorkObj;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ workObj }) => {
  return (
    <Accordion className={styles.panel}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div className={styles.experienceCardContainer}>
          <div className={styles.logoContainer}>
            <Image
              className={styles.companyLogo}
              src={workObj.companyImage}
              alt={`${workObj.company} logo`}
            />
          </div>
          <div className={styles.experienceHeaderInfo}>
            <div className={styles.jobTitle}>{workObj.jobTitle}</div>
            <div className={styles.company}>{workObj.company}</div>
            <div
              className={styles.locationAndDates}
            >{`${workObj.location} • ${workObj.timeFrame}`}</div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.experienceCardHighlightsContainer}>
          <div className={styles.experienceCardHighlightsHeader}>
            Highlights
          </div>
          {workObj.highlights.map((highlight, index) => (
            <div key={index} className={styles.experienceCardHighlight}>
              {highlight}
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExperienceCard;
