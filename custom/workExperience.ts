import AuvikLogo from "../public/companyLogos/auvik.svg";
import InteracLogo from "../public/companyLogos/interac.svg";
import ApplyBoardLogo from "../public/companyLogos/applyboard.png";
import WSIBLogo from "../public/companyLogos/wsib.svg";
import CooperatorsLogo from "../public/companyLogos/cooperators.png";
import NumeratorLogo from "../public/companyLogos/numerator.png";
import { StaticImageData } from "next/image";

export type WorkObj = {
  jobTitle: string;
  company: string;
  location: string;
  timeFrame: string;
  companyImage: StaticImageData;
  highlights: string[];
};

export const workExperience: WorkObj[] = [
  {
    jobTitle: "Software Developer",
    company: "Auvik Networks",
    location: "Waterloo, ON",
    timeFrame: "May 2022 - Present",
    companyImage: AuvikLogo,
    highlights: [
      "Contributed significantly to a diverse array of backend services written in both Golang and Java, facilitating seamless data streaming to strategic partners and ensuring robust and reliable data delivery.",
      "Engineered frontend solutions with React and GraphQL, delivering a superior user experience to a vast user base of over 100,000 customers, effectively enhancing performance, responsiveness, and overall user satisfaction.",
      "Led cross-functional team testing sessions, driving collaboration and efficiency, while spearheading the development and implementation of an automated end-to-end testing service to enhance product quality and streamline testing processes.",
    ],
  },
  {
    jobTitle: "Innovation Lab Developer (Co-op)",
    company: "Interac",
    location: "Kitchener, ON",
    timeFrame: "Jan 2021 - Aug 2021",
    companyImage: InteracLogo,
    highlights: [
      "Developed a proof-of-concept QR payment solution designed to be used by millions of users on a daily basis",
      "Leveraged my critical-thinking skills to effectively suggest new ideas and solutions during team design-thinking sessions",
      "Presented various applications to dozens of stakeholders and company personnel on a regular basis in order to gauge interest and gather valuable feedback",
    ],
  },
  {
    jobTitle: "Full-Stack Developer (Co-op)",
    company: "ApplyBoard",
    location: "Kitchener, ON",
    timeFrame: "May 2020 - Aug 2020",
    companyImage: ApplyBoardLogo,
    highlights: [
      "Utilized my skills in Ruby on Rails to assist in developing the backend of the company's site, and leveraged my experience with test-driven development to ensure stable code quality",
      "Implemented frontend features on a site viewed by over 100,000 users by applying my React and JavaScript skills",
      "Developed microservice endpoints using a Python backend for an international grade conversion service",
    ],
  },
  {
    jobTitle: "Full-Stack Developer (Co-op)",
    company: "WSIB Innovation Lab",
    location: "Kitchener, ON",
    timeFrame: "Sep 2019 - Dec 2019",
    companyImage: WSIBLogo,
    highlights: [
      "Utilized object-oriented programming in Swift, as well as machine learning concepts, to develop an iOS application to determine when a worker is fatigued on the job",
      "Assisted in developing the Lab’s website using React, as well as a project portfolio used by upper-level executives",
      "Leveraged time-management and organizational skills to accelerate productivity on core research projects within a small team",
    ],
  },
  {
    jobTitle: "Jr. Systems Developer (Co-op)",
    company: "The Co-operators",
    location: "Guelph, ON",
    timeFrame: "May 2019 - Aug 2019",
    companyImage: CooperatorsLogo,
    highlights: [
      "Performed technical analysis and formulated design and logic for programs",
      "Assisted in planning and executing unit tests to verify that functionality and data integrity is maintained",
      "Provided status reports and escalated issues when necessary to lead resource",
    ],
  },
  {
    jobTitle: "Media Analyst Intern",
    company: "Numerator",
    location: "Mississauga, ON",
    timeFrame: "May 2018 - Aug 2018",
    companyImage: NumeratorLogo,
    highlights: [
      "Curated a preliminary digital website tracking universe consisting of over 1,000 websites",
      "Analyzed over 1,500 advertisement records in a database to check for miscut advertisements and ensure data integrity",
      "Cross-referenced advertising information to distinguish nationally run advertisements from locally run advertisements during a dispute between television broadcasting companies Univision and UniMas",
    ],
  },
];
