import React from "react";
import { technologies } from "../custom/technologies";
import styles from "./TechnologyPreview.module.css";
import Image from "next/image";

type TechnologyPreviewProps = {
  technologyID: string;
};

const TechnologyPreview: React.FC<TechnologyPreviewProps> = ({
  technologyID,
}) => {
  return (
    <div className={styles.technologyPreview}>
      <div className={styles.iconBackground}>
        <Image
          src={technologies[technologyID]?.imageReference}
          className={styles.technologyIcon}
          alt={`${technologies[technologyID].displayName} Icon`}
        />
      </div>
      <div className={styles.technologyName}>
        {technologies[technologyID]?.displayName}
      </div>
    </div>
  );
};

export default TechnologyPreview;
