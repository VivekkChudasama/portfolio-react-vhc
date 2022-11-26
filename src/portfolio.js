/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Vivek Chudasama",
  title: "Hi all, I'm Vivek",
  subTitle: emoji(
    "A passionate web and mobile Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / React Native / Nodejs / NativeScript-Vue JS (Mobile) and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BotUM1yKNuXr2wv5FCTecPuiKMph3cTb/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VivekkChudasama",
  linkedin: "https://www.linkedin.com/in/vivekk-chudasama/",
  gmail: "chudasamavivekk0@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/chudasama.vivekk/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/VivekkChudasama/",
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Asian Institute of Engineering and Management",
      logo: require("./assets/images/aiem.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - July 2016",
      desc:
        "Passed the examination B.Tech in the month of July 2016 with A grade",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Darshan Institute of Engineering and Technology",
      logo: require("./assets/images/darshanlogo.png"),
      subHeader: "Diploma in Computer Science",
      duration: "September 2010 - May 2013",
      desc:
        "Computer engineer, also known as a software engineer, is responsible for designing, developing, testing and evaluating the software that make our computers work.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Truelancer",
      companylogo: require("./assets/images/true.png"),
      date: "July 2020 – Present",
      desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications.",
        "Gather specific requirements and suggest solutions.",
        "Should have a better knowledge of Redux.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Aecor Digital Pvt. Ltd",
      companylogo: require("./assets/images/AecorLogo.png"),
      date: "May 2019 – May 2020",
      desc: "I'm Mobile App Developer (Android & IOS).",
      descBullets: [
        "NativeScript-vue JS Mobile app development.",
        "Sports app development in latest technology.",
        "Liaise with the Product development team to plan new features.",
      ],
    },
    {
      role: "Freelancer || Self-employed",
      company: "Freelancer",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "January 2019 – April 2019",
      desc:
        "Providing technical support to customers, understanding the customer requirements, integrating system new module, conducting system performance testing with ERP System.I've conducted internal audit making sure the organization is compliant with the GDPR.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Talent Match",
      projectDesc: "FUTURE READY TALENT ACQUISITION",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.talentmatchglobal.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Simplifying eCommerce",
      projectDesc:
        "We Made It Easy To Start An Online Marketplace | Store | Website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shoppiko.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React JS Developer",
      subtitle:
        "React is a JavaScript library for building user interfaces and used to build single page applications (SPA).",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Achievements",
          url: "",
        },
      ],
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      subtitle:
        "The benchmark for AI is the human level concerning in teams of reasoning, speech, vision.",
      image: require("./assets/images/drsubhash.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1e2V1cAyuRN-emQCK0A6Y-Jnqdc_7Nd4T/view",
        },
        {
          name: "Achievements",
          url: "",
        },
      ],
    },

    {
      title: "Node JS Developer",
      subtitle:
        "Node.js is an open source server environment and Node.js allows you to run JavaScript on the server.",
      image: require("./assets/images/akashTechnolabs.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1zNA3AoOd2fCMLhHPSkOWtjSaG8-KogU9/view",
        },
        {
          name: "Achievements",
          url: "",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 8511 340 900",
  email_address: "chudasamavivekk0@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "sdfsdf davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
