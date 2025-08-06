/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Annavati Shreyas",
  title: "Hi all, I'm Shreyas",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1Ix683OTFhpP-_tXEZvEziFa6CLmeDT31", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/a-n-shreyas",
  linkedin: "https://linkedin.com/in/shreyas-murthy-60b45b1a9",
  gmail: "shreyasmurthy74@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
   title: "What I Do",
  subTitle: "A versatile Software Engineer with a passion for building scalable, user-centric solutions.",
  skills: [
    emoji(
    "⚡ Full-Stack Development using the MERN stack (React.js, Node.js, Express.js) "
    ),
    emoji(
    "⚡ Designing and implementing high-performance Machine Learning models in PyTorch for real-time data analysis "
    ),
    emoji(
    "⚡ Developing responsive and user-friendly front-end interfaces for web applications with React.js and TypeScript"
    ),
    emoji(
    "⚡ Building secure and scalable RESTful APIs with Node.js and Express.js"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
     {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Birmingham",
      logo: require("./assets/images/UobLogo.webp"),
      subHeader: "Master of Science in Advanced Computer Science",
      duration: "September 2024 - September 2025",
      desc: " ",
      descBullets: [
        "Major in Advanced Computer Science",
        "Completed a dissertation on 'Lightweight Transformer for Real-Time ICS Anomaly Detection'"
      ]
    },
    {
      schoolName: "Dayanada Sagar Academy of Technology and Management",
      logo: require("./assets/images/DSILogo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "August 2018 - July 2022",
      desc: " ",
      descBullets: [
        "Achieved a CGPA of 7.9",
        "Completed a final year project on 'Determination of Recipe by Analysis of Various Ingredients'"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full-Stack Development (MERN)", // Specific to your resume
      progressPercentage: "80%" // Reflects your strong experience with React.js, Node.js, and Express.js
    },
    {
      Stack: "Machine Learning / AI", // Highlights your specialization
      progressPercentage: "60%" // Reflects your advanced academic experience with PyTorch, Python
    },
    {
      Stack: "Programming Languages", // More specific than "Programming"
      progressPercentage: "80%" // Reflects your proficiency in Python, JavaScript, TypeScript
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      companylogo: require("./assets/images/accentureLogo.jpg"),
      date: "December 2022-September 2024",
      desc: "At Accenture, as an Associate Software Developer, I gained two years of industry experience building full-stack applications for the financial sector. I was a key part of a team working on a banking project for Security Bank Corporation, where I developed secure and scalable web applications. My responsibilities included designing and implementing responsive, user-friendly interfaces with React.js and TypeScript, which helped enhance the customer experience. I also developed and integrated RESTful APIs using Node.js and Express.js to ensure seamless data communication. I used Jest to conduct comprehensive unit testing, which was essential for ensuring the application's reliability and code quality. I worked effectively within a fast-paced Agile environment and collaborated with a cross-functional team.",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "HERE ARE A FEW PROJECTS THAT I HAVE WORKED ON",
projects: [
    {
      image: require("./assets/images/Transformer.png"),
      projectName: "Lightweight Transformer for Real-Time ICS Anomaly Detection",
      projectDesc: 
        "• Designed and implemented a lightweight Transformer model in PyTorch to detect cyberattacks in Industrial Control Systems (ICS) time-series data from the SWaT dataset.\n" +
        "• Engineered an end-to-end data pipeline for cleaning, feature selection, scaling, and windowing large-scale sensor data.\n" +
        "• Addressed severe class imbalance by implementing SMOTE, boosting the model’s attack detection Recall by over 20%.\n" +
        "• Achieved a state-of-the-art F1-Score of 0.935, significantly outperforming traditional LSTM and Autoencoder baselines in a rigorous comparative study.\n" +
        "• Validated the model's suitability for edge deployment by measuring CPU inference latency, achieving an average of 0.88 ms per sample.\n" +
        "• Technologies: Python, PyTorch, Pandas, NumPy, Scikit-learn, Git.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/a-n-shreyas/ics-anomaly-detection-transformer"
        }
      ]
    },
    {
      image: require("./assets/images/Recipe.png"),
      projectName: "Determination of Recipe by Analysis of Various Ingredients",
      projectDesc: 
        "• Developed a machine learning algorithm that processes text and image inputs of ingredients to recommend healthier recipe alternatives.\n" +
        "• Engineered a machine learning algorithm that analyzed over 1,500 food images and ingredient texts weekly, delivering tailored nutritional recommendations to users and fostering healthier eating habits in the community.\n" +
        "• Enhanced data consistency and classification accuracy, promoting healthier dietary habits among users.\n" +
        "• High-accuracy image recognition.\n" +
        "• Smart ingredient-based recipe recommendations.",
      footerLink: [
        {
          name: "Read More",
          url: "https://journal.ijresm.com/index.php/ijresm/article/view/1959"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "BirmingHack 1.0",
      subtitle:
        "Participated in BirmingHack 1.0, a 24-hour hackathon at the University of Birmingham, where I collaborated with a team to develop a web application that helps students manage study schedules and track academic progress. and won People's Choice Award.",
      image: require("./assets/images/birminghack.png"),
      imageAlt: "BirmingHack Logo",
      footerLink: [
        {
          name: "See Project",
          url: "https://devpost.com/software/studysync-enosua"
        },
      ]
    },
    {
      title: "BEAR Challenge",
      subtitle:
        "The BEAR Challenge was an incredible experience that provided hands-on experience in High Performance Computing (HPC), parallel processing, and the real-world application of compute clusters in research. As a member of the 'BugBusters' team, I was able to apply my technical skills to a series of complex and engaging challenges.",
      image: require("./assets/images/BEAR.png"),
      imageAlt: "BEAR Challenge Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1lg7pTpOXv13trN_nmcMdFDF0ULkplTIB/view?usp=drive_link"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in discussing a potential role? I'm actively seeking full-time opportunities and would be happy to share more about my experience developing scalable web applications and my academic specialization in machine learning. Please feel free to reach out!",
  number: "+91-7262899883",
  email_address: "shreyasmurthy74@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
