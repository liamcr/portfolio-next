"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { Button, Grid } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import MailOutline from "@mui/icons-material/MailOutline";
import OpenInNew from "@mui/icons-material/OpenInNew";
import styles from "./ContactSection.module.css";

const ContactSection: React.FC = () => {
  return (
    <div className={styles.contactContainer} id="contact-container">
      <SectionHeader content="Get in Touch!" />
      <div className={styles.contactContentContainer}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={12}>
            <div className={styles.contactOption}>
              <div className={styles.contactHeader}>Shoot me an email!</div>
              <Button color="primary" href="mailto:liamcrocket@gmail.com">
                <MailOutline />
                <div className={styles.contactButtonText}>
                  {"liamcrocket@gmail.com"}
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <div className={styles.contactOption}>
              <div className={styles.contactHeader}>Connect on LinkedIn!</div>
              <Button
                color="primary"
                href="https://www.linkedin.com/in/william-crocket/"
                target="_blank"
                endIcon={<OpenInNew />}
              >
                <LinkedIn />
                <div className={styles.contactButtonText}>{"Liam Crocket"}</div>
              </Button>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <div className={styles.contactOption}>
              <div className={styles.contactHeader}>Check out my GitHub!</div>
              <Button
                color="primary"
                href="https://github.com/liamcr"
                target="_blank"
                endIcon={<OpenInNew />}
              >
                <GitHub />
                <div className={styles.contactButtonText}>{"Liam Crocket"}</div>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactSection;
