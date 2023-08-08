import React from "../public/technologyIcons/react.png";
import SpotifyAPI from "../public/technologyIcons/spotifyAPI.png";
import MaterialUI from "../public/technologyIcons/materialUI.svg";
import Firebase from "../public/technologyIcons/firebase.png";
import RedditAPI from "../public/technologyIcons/redditAPI.png";
import JavaScript from "../public/technologyIcons/javascript.png";
import NodeJS from "../public/technologyIcons/nodejs.svg";
import Git from "../public/technologyIcons/git.png";
import AWSLambda from "../public/technologyIcons/awsLambda.png";
import Docker from "../public/technologyIcons/docker.png";
import Python from "../public/technologyIcons/python.svg";
import Swift from "../public/technologyIcons/swift.svg";
import AWSDynamoDB from "../public/technologyIcons/dynamoDB.png";
import AWSS3 from "../public/technologyIcons/awsS3.png";
import AWSSageMaker from "../public/technologyIcons/awsSageMaker.png";
import C from "../public/technologyIcons/c.png";
import TypeScript from "../public/technologyIcons/typescript.png";
import Java from "../public/technologyIcons/java.png";
import RubyOnRails from "../public/technologyIcons/rubyOnRails.svg";
import MongoDB from "../public/technologyIcons/mongoDB.png";
import NextJS from "../public/technologyIcons/nextJS.svg";
import Flutter from "../public/technologyIcons/flutter.svg";
import Golang from "../public/technologyIcons/go.svg";
import Kubernetes from "../public/technologyIcons/k8s.svg";
import Kafka from "../public/technologyIcons/kafka.svg";
import { StaticImageData } from "next/image";

type Technology = {
  displayName: string;
  imageReference: StaticImageData;
  timeExperienced: string;
  experienceType: string;
};

export const technologies: {
  [key: string]: Technology;
} = {
  javascript: {
    displayName: "JavaScript",
    imageReference: JavaScript,
    timeExperienced: "5 yrs.",
    experienceType: "Work Experience",
  },
  reactjs: {
    displayName: "React.js",
    imageReference: React,
    timeExperienced: "4 yrs.",
    experienceType: "Work Experience",
  },
  reactNative: {
    displayName: "React Native",
    imageReference: React,
    timeExperienced: "8 mos.",
    experienceType: "Work Experience",
  },
  materialUI: {
    displayName: "Material UI",
    imageReference: MaterialUI,
    timeExperienced: "2 mos.",
    experienceType: "Personal Projects",
  },
  spotifyAPI: {
    displayName: "Spotify API",
    imageReference: SpotifyAPI,
    timeExperienced: "1 yr, 6 mos.",
    experienceType: "Personal Projects",
  },
  firebase: {
    displayName: "Firebase",
    imageReference: Firebase,
    timeExperienced: "2 yrs.",
    experienceType: "Work Experience",
  },
  redditAPI: {
    displayName: "Reddit API",
    imageReference: RedditAPI,
    timeExperienced: "8 mos.",
    experienceType: "Personal Projects",
  },
  nodejs: {
    displayName: "Node.js",
    imageReference: NodeJS,
    timeExperienced: "4 yrs.",
    experienceType: "Work Experience",
  },
  git: {
    displayName: "Git",
    imageReference: Git,
    timeExperienced: "6 yrs.",
    experienceType: "Work Experience",
  },
  rubyOnRails: {
    displayName: "Ruby on Rails",
    imageReference: RubyOnRails,
    timeExperienced: "6 mos.",
    experienceType: "Work Experience",
  },
  awsLambda: {
    displayName: "AWS Lambda",
    imageReference: AWSLambda,
    timeExperienced: "1 mo.",
    experienceType: "Personal Projects",
  },
  docker: {
    displayName: "Docker",
    imageReference: Docker,
    timeExperienced: "3 yr.",
    experienceType: "Work Experience",
  },
  python: {
    displayName: "Python",
    imageReference: Python,
    timeExperienced: "5 yrs.",
    experienceType: "Work Experience",
  },
  swift: {
    displayName: "Swift",
    imageReference: Swift,
    timeExperienced: "2 mos.",
    experienceType: "Work Experience",
  },
  awsDynamoDB: {
    displayName: "DynamoDB",
    imageReference: AWSDynamoDB,
    timeExperienced: "1 mo.",
    experienceType: "Personal Projects",
  },
  awsS3: {
    displayName: "AWS S3",
    imageReference: AWSS3,
    timeExperienced: "1 yr.",
    experienceType: "Work Experience",
  },
  awsSageMaker: {
    displayName: "SageMaker",
    imageReference: AWSSageMaker,
    timeExperienced: "1 mo.",
    experienceType: "Work Experience",
  },
  c: {
    displayName: "C",
    imageReference: C,
    timeExperienced: "3 yrs.",
    experienceType: "School Projects",
  },
  typescript: {
    displayName: "TypeScript",
    imageReference: TypeScript,
    timeExperienced: "3 yr.",
    experienceType: "Work Experience",
  },
  java: {
    displayName: "Java",
    imageReference: Java,
    timeExperienced: "1 Yr.",
    experienceType: "Work Experience",
  },
  mongoDB: {
    displayName: "MongoDB",
    imageReference: MongoDB,
    timeExperienced: "2 yr.",
    experienceType: "Personal Projects",
  },
  nextJS: {
    displayName: "Next.js",
    imageReference: NextJS,
    timeExperienced: "8 mos.",
    experienceType: "Personal Projects",
  },
  flutter: {
    displayName: "Flutter",
    imageReference: Flutter,
    timeExperienced: "4 mos.",
    experienceType: "Work Experience",
  },
  golang: {
    displayName: "Go",
    imageReference: Golang,
    timeExperienced: "1 yr.",
    experienceType: "Work Experience",
  },
  kubernetes: {
    displayName: "Kubernetes",
    imageReference: Kubernetes,
    timeExperienced: "2 yrs.",
    experienceType: "Work Experience",
  },
  kafka: {
    displayName: "Kafka",
    imageReference: Kafka,
    timeExperienced: "1 yr.",
    experienceType: "Work Experience",
  },
};
