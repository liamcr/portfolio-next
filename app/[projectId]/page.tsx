"use client";

import { useRouter } from "next/navigation";
import { projects } from "../../custom/projects";
import ProjectPageContent from "./ProjectPageContent";
import styles from "./page.module.css";

export default function Project({ params }: any) {
  const router = useRouter();
  const projectId: string = params.projectId;

  const project = projects[projectId];

  if (!project) {
    router.push("/");
  }

  return (
    <div className={styles.projectPageContainer}>
      <div className={styles.stripedBackdrop}>
        <div
          className={styles.backdropOverlay}
          style={{ backgroundColor: project.colour, opacity: 0.7 }}
        ></div>
      </div>
      <ProjectPageContent project={project} />
    </div>
  );
}
