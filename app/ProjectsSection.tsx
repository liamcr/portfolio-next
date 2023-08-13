"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./ProjectsSection.module.css";
import { Button } from "@mui/material";
import { featuredProjects } from "../custom/featuredProjects";
import ProjectPreviewSection from "./ProjectPreviewSection";

const ProjectSection: React.FC = () => {
  const numProjects = featuredProjects.length;
  const [projectsShown, setProjectsShown] = useState(3);

  const onLoadMore = () => {
    setProjectsShown(Math.min(projectsShown + 3, numProjects));
  };

  return (
    <div className={styles.projectsContainer} id="projects-container">
      <SectionHeader content="My Projects" />
      <div className={styles.projectsContentContainer}>
        {featuredProjects.slice(0, projectsShown).map((projectObj, index) => (
          <ProjectPreviewSection
            key={index}
            projectObj={projectObj}
            imageOnLeft={index % 2 === 1}
          />
        ))}
        {projectsShown < numProjects && (
          <div className={styles.loadMoreContainer}>
            <Button color="primary" variant="outlined" onClick={onLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
