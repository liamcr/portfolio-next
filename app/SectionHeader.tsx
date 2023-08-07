import React from "react";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  content: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ content }) => {
  return <div className={styles.sectionHeader}>{content}</div>;
};

export default SectionHeader;
