import PartyMixIcon from "../public/partyMixIcon.svg";
import OneWordStoriesIcon from "../public/oneWordStoriesIcon.svg";
import MusicpediaIcon from "../public/musicpediaIcon.svg";
import SmashAPIIcon from "../public/smashAPIIcon.svg";
import CardsIcon from "../public/cardsIcon.png";
import TrainTrackIcon from "../public/trainTrackIcon.png";
import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  date: string;
  technologies: string[];
  url: string;
  repoURL: string;
  backendRepoURL?: string;
  colour: string;
  icon: StaticImageData;
  sections: Section[];
};

type Section = {
  header: string;
  bodyParagraphs: string[];
};

export const projects: {
  [key: string]: Project;
} = {
  trainTrack: {
    name: "Train Track",
    date: "Summer 2020 - Summer 2021",
    technologies: ["reactjs", "mongoDB", "nextJS", "nodejs", "git"],
    url: "https://traintrack.ca/",
    repoURL: "https://github.com/liamcr/train-track-frontend",
    backendRepoURL: "https://github.com/liamcr/train-track-backend",
    colour: "hsl(204, 100%, 50%)",
    icon: TrainTrackIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          "Train track is a social-networking platform with a focus on sharing workouts. The website uses React with Next.js on the frontend, utilizing server-side rendering to yield faster load-times and better SEO. The backend uses Mongo DB to keep track of all workouts, exercises, and users, along with an Express API to connect it to the frontend. The site allows users to keep track of their workouts, and follow their friends to stay updated on their workouts. If you're impressed with a friend's workout, you can like and comment on it to show your support. Click the \"live demo\" button below to check it out!",
        ],
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "Although working out and exercising is often an individual experience, there are still large social factors to it that I thought could be explored in a project. For example, if I get a personal record that I've been trying to achieve for a long time, the first thing I want to do is tell my friends about it. On the same note, it's always really exciting to hear about one of your friends accomplishing something that they're proud of.",
          "With that in mind I thought it would be a good idea to develop some sort of social network that made it easier for people to share their accomplishments pertaining to working out. I took a lot of inspiration from the structure of Strava, but rather than focusing solely on cardio, I generalized it to include support for most other forms of exercise.",
        ],
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This was my first experience developing a fleshed-out backend for a side project (i.e. creating a well thought-out database schema and attaching a custom-built API to it), so there was a lot to be learned in that regard. I was introduced to the MERN stack (MongoDB, Express, React, Node) just before starting development on the project, so my database of choice was Mongo DB. I've had experiences with NoSQL databases in the past, so I didn't have too much difficulty picking up on it, but there was still much to learn, specifically in connecting it to an Express API.",
          "This project was also my first experience developing an API using Express, which required me to learn a lot about using proper HTTP methods for each endpoint, writing idiomatic endpoint URLs, and writing efficient backend code. All of those are essential for developing a good API, and it has really helped me round out my full-stack development skills.",
          "On the frontend I also had my first experience with Next.js, and server-side rendering in general. This was certainly the technology that I had the least familiarity with on this project, and there were a few concepts that took a while to fully understand. For example, learning and choosing between the different data-fetching strategies, or differentiating between the API calls that should be done client-side vs the API calls that should be done server-side.",
          "Eventually everything clicked, and going forward I think server-side rendering will be my strategy of choice for my web projects.",
        ],
      },
    ],
  },
  crocketsClassicCards: {
    name: "Crocket's Classic Cards",
    date: "Spring 2020",
    technologies: ["reactNative", "firebase", "javascript", "nodejs", "git"],
    url: "https://play.google.com/store/apps/details?id=com.crocketsclassiccards",
    repoURL: "https://github.com/liamcr/cards-app",
    colour: "hsl(336, 100%, 50%)",
    icon: CardsIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          'Crocket\'s Classic Cards is an app that lets you play classic card games with friends without the need for a physical deck of cards. Currently, the app includes Go Fish, Crazy Eights, and President. The app uses the Firebase Android SDK to manage up to 10,000 games at once and provides each one with real-time updates so users can see the most up-to-date state of their game at all times. The app is live on the Google Play store, so click the "Live Demo" button below to download the app and play cards with your friends!',
        ],
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "This idea stems from the repeated experience of wanting to play cards with friends but not having a deck of cards to play with. A turn-based game using real-time updates was something I had wanted to do for quite some time, and a card game app seemed like a great way to execute that. The project began as an idea for an open-ended assignment for my Mobile Computing course, but I took it on as a side project because of my interest in the concept, in addition to the fact that I was interested in having an app on an app store.",
        ],
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This was my first venture in the world of app development, so there was certainly a lot to learn there. I used React Native to shorten the learning curve since I've had a lot of experience with React in the past. I also hadn't had any experience using Firebase's real-time updates, so some work had to be done on my part to understand the concepts and find out the best way to implement them. Moving beyond strictly technical skills, I learned the process of publishing and maintaining an app on the Google Play store.",
          "This is all in addition to the official card game rules I had to learn, which were more complicated and inconsistent than you might think!",
        ],
      },
    ],
  },
  smashAPI: {
    name: "Smash API",
    date: "Winter 2020",
    technologies: ["awsLambda", "python", "awsDynamoDB", "awsS3", "git"],
    url: "https://master.d1d2v8r7w4rv6r.amplifyapp.com/",
    repoURL: "https://github.com/liamcr/smash-api-documentation-site",
    colour: "hsl(0, 100%, 63%)",
    icon: SmashAPIIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          'The Smash API is a consumption-only (i.e. only GET requests are available) API that can be used to access data related to the video game "Super Smash Bros. Ultimate". The API includes four key endpoints: /characters, /items, /stages, and /moves. Make a request to the /characters endpoint to receive data about a character, including their name, what video game series they\'re originally from, and various other gameplay attributes. Make a request to the /stages endpoint to retrieve data about any given stage, such as its name, and what game series the stage is inspired by. Check out the docs by clicking the "Live Demo" button below to explore more of what the API has to offer.',
        ],
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          'This was an idea that came up while playing around with the Pokemon consumption-only API (Visit pokeapi.co to learn more). It was an interesting idea, and I also wanted to gain some more backend experience, so it seemed like a great idea for a side project. After talking about it with some classmates of mine, we decided that we could build a similar system for "Super Smash Bros. Ultimate".',
        ],
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "After doing some research regarding the viability of creating an API, I decided AWS's API Gateway was the easiest way to build a public API. AWS was something that I had limited experience with, so I had to learn what services would be the best suited for the project, and how to connect them all together. The cloud structure I decided upon was API Gateway to receive the requests, AWS Lambda to take the request and query the database, and DynamoDB to store the data. We also had images (such as character sprites) stored in S3 buckets. All-in-all everything worked together well, and I learned a lot through my first project using cloud infrastructure.",
        ],
      },
    ],
  },
  musicpedia: {
    name: "Musicpedia",
    date: "Winter 2020",
    technologies: [
      "javascript",
      "reactjs",
      "materialUI",
      "spotifyAPI",
      "nodejs",
      "git",
    ],
    url: "https://musicpedia-app.web.app/",
    repoURL: "https://github.com/liamcr/musicpedia",
    colour: "hsl(301, 46%, 57%)",
    icon: MusicpediaIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          "Musicpedia is a one-stop-shop for all things music. Using Spotify's web API, the app allows the user to find information about any artist, album, or track. You can explore an artist's top tracks, or all of their albums. You can dive deeper into each album, analyzing their popularity and their track list. What's more, for each track you can find out its audio features (key, tempo, etc.) and some general info (duration, popularity, etc.). Spotify's API is also used to perform audio analysis on the track, splitting it into sections (chorus, verse, etc.) for you to listen to. A Spotify account is required to use this app.",
        ],
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "The idea for this project came about when I was looking through Spotify's web API documentation. I utilized the Spotify API when developing my project 'Party Mix', but I realized that there was so much more to the API than what I had used. The two most interesting things to me were the audio features and audio analysis capabilities. I found myself searching around for the IDs of my favourite songs so that I could get an analysis of them, and thought that it would be convenient if there was an easy-to-use front-end application for these endpoints.",
          "At the end of the day, this was a project made to meet a very specific goal of mine, and although the project isn't solving a huge problem, I still find myself coming back to it months later to find information about the newest songs and albums.",
        ],
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This project as a whole really strengthened my knowledge of React.js past just the basics. I learned how to properly send and receive HTTP requests within a React app using axios. On top of that, this was the first project I had developed that uses routing.",
          "It was also interesting to learn how to use Material-UI. It's a widely used React UI framework, and it gave me the important experience of reading about and implementing a popular third-party library.",
        ],
      },
    ],
  },
  oneWordStories: {
    name: "One Word Stories",
    date: "Summer 2019",
    technologies: [
      "javascript",
      "reactjs",
      "firebase",
      "redditAPI",
      "nodejs",
      "git",
    ],
    url: "https://jwieler.github.io/oneWordStories/",
    repoURL: "https://github.com/jwieler/oneWordStories",
    colour: "hsl(198, 100%, 29%)",
    icon: OneWordStoriesIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          "One Word Stories is an app that allows you to collaboratively write short stories. The idea is that users take turns adding one word to a story, with each person taking the story slightly in the direction they want it to go. As a result, some funny and interesting stories are made. When first opening the site, you're able to read some of the stories that have been marked as 'completed' by a user. Stories can be sorted by a voting system, which is done in the background using Reddit's API. You have the option to either begin a story by providing a title and the first word, or continue a story by adding a word to an ongoing one.",
        ],
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "This was an idea that came about when a friend made a C program before a lecture that took inputs one word at a time. We passed his computer around among our group of friends and wrote short stories one word at a time. We thought it was a fun idea, and wanted to create a website that allowed you to play this game with others around the world.",
          "We also wanted to give users the ability to browse other stories that they may not have gotten the chance to contribute to. We decided to store all finished stories on a subreddit, and create our own front-end for it. This way, users can not only read other stories, but vote on them, and sort by popularity.",
        ],
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This entire project was a big learning experience for me, as it was the first time I had used React in a big way. Throughout the development process, I learned and improved on my skills of isolating sections into components, and managing state across them.",
          "This project also marks my first experience with Firebase. We used Firebase as the backend tool to store the stories that hadn't been marked as 'completed' yet. Reading/writing data, as well as understanding how to use a document storage system, were all concepts that I had to learn and become comfortable with.",
          "Lastly, I had to learn how to make requests to Reddit's REST API. Reading from and writing to a subreddit, as well as authenticating with Reddit were the two key concepts I had to understand.",
        ],
      },
    ],
  },
  partyMix: {
    name: "Party Mix",
    date: "Summer 2018",
    technologies: ["javascript", "spotifyAPI"],
    url: "https://party-mix.000webhostapp.com/",
    repoURL: "https://github.com/liamcr/party-mix",
    colour: "hsl(141, 73%, 42%)",
    icon: PartyMixIcon,
    sections: [
      {
        header: "About the Project",
        bodyParagraphs: [
          "Party Mix is an app that allows you to collaboratively create Spotify playlists with friends (regardless of whether they have a Spotify account or not!). As the DJ of whatever social event you're attending, you have the ability to open up any existing playlist (or a brand new one) to collaboration with others at the event. As long as someone has the code that is provided when a playlist is opened for collaboration, they can add a song to it. The playlist's owner can set some restrictions on their playlists as well, including limiting users to a maximum number of added songs, not allowing explicit music, and more!",
        ],
      },
      {
        header: "Behind the Idea",
        bodyParagraphs: [
          "This idea came about from a get-together with some friends. One of my friends was in charge of the music selection, and he ended up spending the night focussed on what song he should put on next. To solve this problem, the clear solution was to find a way to allow everyone to have an input on what music gets played. Spotify allows users to make collaborative playlists, but only those with Spotify accounts have the ability to add songs. The Party Mix idea allows a group of people to make a playlist together, and only one of them needs a Spotify account.",
        ],
      },
      {
        header: "What I Learned",
        bodyParagraphs: [
          "This project was a huge learning experience for me, as it was the first experience I had with JavaScript. I learned how to properly write event-driven JavaScipt, and learned how to use jQuery and AJAX to perform API requests.",
          "This was also the first time I had used an API, so I had to spend some time learning what an API was, and how to properly send requests to it. In terms of Spotify's API in particular, I had to learn how to authenticate users with it, and how to add songs to a playlist.",
          "Each playlist needed to be put in some type of permanent storage so that other users could push data to them. As a result, I needed to learn how to use and manage a SQL database. In order to connect it to my JavaScript, I learned the basics of PHP to create a bridge between my front-end and back-end.",
        ],
      },
    ],
  },
};
