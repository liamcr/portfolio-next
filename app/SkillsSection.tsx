"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import styles from "./SkillsSection.module.css";
import SkillCard from "./SkillCard";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";

const SkillsSection: React.FC = () => {
  const skillIDs = [
    "javascript",
    "reactjs",
    "golang",
    "nodejs",
    "kubernetes",
    "git",
    "nextJS",
    "typescript",
    "kafka",
    "mongoDB",
  ];

  const largeScreen = useMediaQuery("(min-width:1050px)");
  const mediumScreen = useMediaQuery("(min-width:750px)");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: largeScreen ? 3 : mediumScreen ? 2 : 1,
    arrows: true,
    focusOnSelect: true,
  };

  return (
    <div className={styles.skillsContainer} id="skills-container">
      <SectionHeader content="My Skills" />
      <Slider {...settings}>
        {skillIDs.map((skillID, index) => (
          <SkillCard skillID={skillID} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default SkillsSection;
