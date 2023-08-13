import React from "react";
import { ProjectObj } from "../custom/featuredProjects";
import { Button } from "@mui/material";
import TechnologyPreview from "./TechnologyPreview";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import styles from "./ProjectPreviewSection.module.css";

type ProjectPreviewProps = {
  projectObj: ProjectObj;
  imageOnLeft: boolean;
};

const ProjectPreviewSection: React.FC<ProjectPreviewProps> = ({
  projectObj,
  imageOnLeft,
}) => {
  return (
    <div className={styles.projectPreviewContainer}>
      {imageOnLeft && (
        <div className={styles.projectPreviewImageContainer}>
          <Image
            className={styles.projectPreviewImage}
            src={projectObj.imageReference}
            alt={projectObj.title}
          />
        </div>
      )}
      <div
        className={styles.projectPreviewContent}
        style={{
          padding: `0 ${imageOnLeft ? "0" : "48px"} 0 ${
            imageOnLeft ? "48px" : "0"
          }`,
        }}
      >
        <div className={styles.projectPreviewHeader}>{projectObj.title}</div>
        <div className={styles.projectPreviewDate}>{projectObj.date}</div>
        <div className={styles.projectPreviewTechnologiesContainer}>
          {projectObj.technologies.map((technology, index) => (
            <TechnologyPreview key={index} technologyID={technology} />
          ))}
        </div>
        <div className={styles.projectPreviewDescription}>
          {projectObj.description}
        </div>
        <div className={styles.projectPreviewButtons}>
          <Button color="primary" href={projectObj.projectPageURL}>
            Learn More
          </Button>
          <Button
            color="primary"
            href={projectObj.url}
            target="_blank"
            endIcon={<OpenInNew />}
          >
            Live Demo
          </Button>
          <Button
            color="primary"
            href={projectObj.repoURL}
            target="_blank"
            endIcon={<OpenInNew />}
          >
            {projectObj.backendRepoURL ? "Visit Frontend Repo" : "Visit Repo"}
          </Button>
          {projectObj.backendRepoURL && (
            <Button
              color="primary"
              href={projectObj.backendRepoURL ? projectObj.backendRepoURL : "#"}
              target="_blank"
              endIcon={<OpenInNew />}
            >
              Visit Backend Repo
            </Button>
          )}
        </div>
      </div>
      {!imageOnLeft && (
        <div className={styles.projectPreviewImageContainer}>
          <Image
            className={styles.projectPreviewImage}
            src={projectObj.imageReference}
            alt={projectObj.title}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPreviewSection;
