import React from "react";
import landingImage from "../public/LandingImage.jpg";
import DownArrow from "../public/downArrow.svg";
import Image from "next/image";
import styles from "./LandingImage.module.css";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const LandingImage: React.FC = () => {
  return (
    <div className={styles.landingImageContainer}>
      <Image
        src={landingImage}
        alt="Picture of me in front of water."
        className={styles.landingImage}
      />
      <div className={styles.landingImageOverlay}>
        <div className={styles.landingImageText}>
          <div
            className={`${styles.landingImageOverlayHeader} ${greatVibes.className}`}
          >
            Hey there!
          </div>
          <div className={styles.landingImageOverlaySubheader}>
            My name&apos;s Liam, and welcome to my website!
          </div>
        </div>
        <Link href="#about-container" className={styles.bouncingDownArrowLink}>
          <Image
            className={styles.bouncingDownArrow}
            src={DownArrow}
            alt="Downward facing arrow."
          />
        </Link>
      </div>
    </div>
  );
};

export default LandingImage;
