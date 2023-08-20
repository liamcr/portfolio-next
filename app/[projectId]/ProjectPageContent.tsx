import React from "react";
import TechnologyPreview from "../TechnologyPreview";
import { Button, useMediaQuery } from "@mui/material";
import OpenInNew from "@mui/icons-material/OpenInNew";
import { Project } from "../../custom/projects";
import styles from "./ProjectPageContent.module.css";
import Image from "next/image";

type ProjectPageContentProps = {
  project: Project;
};

const ProjectPageContent: React.FC<ProjectPageContentProps> = ({ project }) => {
  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  return (
    <div className={styles.projectPageContentContainer}>
      <Image
        src={project.icon}
        alt="Project Icon"
        className={styles.projectIcon}
      />
      <div className={styles.projectPageHeader}>{project.name}</div>
      <div className={styles.projectPageSubtitle}>{project.date}</div>
      <div className={styles.projectPreviewTechnologiesContainer}>
        {project.technologies
          .slice(0, isSmallScreen ? 2 : undefined)
          .map((technology, index) => (
            <TechnologyPreview key={index} technologyID={technology} />
          ))}
      </div>
      {project.sections.map((section, index) => (
        <div className={styles.projectSection} key={index}>
          <div className={styles.projectSectionHeader}>{section.header}</div>
          <div className={styles.projectSectionBody}>
            {section.bodyParagraphs.map((paragraph, index) => (
              <div className={styles.projectSectionBodyParagraph} key={index}>
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className={styles.projectButtons}>
        <Button
          color="primary"
          href={project.url}
          target="_blank"
          endIcon={<OpenInNew />}
        >
          Live Demo
        </Button>
        <Button
          color="primary"
          href={project.repoURL}
          target="_blank"
          endIcon={<OpenInNew />}
        >
          {project.backendRepoURL !== undefined
            ? "Visit Frontend Repo"
            : "Visit Repo"}
        </Button>
        {project.backendRepoURL && (
          <Button
            color="primary"
            href={project.backendRepoURL ? project.backendRepoURL : "#"}
            target="_blank"
            endIcon={<OpenInNew />}
          >
            Visit Backend Repo
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectPageContent;
