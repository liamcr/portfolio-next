import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./ContactSection.module.css";

const ContactSection: React.FC = () => {
  return (
    <div className={styles.contactContainer} id="contact-container">
      <SectionHeader content="Get in Touch!" />
    </div>
  );
};

export default ContactSection;
