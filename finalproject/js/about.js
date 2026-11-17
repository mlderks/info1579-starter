// import 
import { getJoke, displayJoke} from "/js/api.js";

const aboutMeObject = {
    name: "Megan Derks",
    major: "Web Development Career Certificate",
    currentJob: "student",
    hobbies: [ "reading", "watching NCIS", "games", "going to national/state parks",],
    skills: [ "HTML", "CSS", "Bootstrap", "SCSS", "WordPress", "Figma", "Java",],
};

// get DOM element
const output = document.getElementById("output");
const readButton = document.getElementById("readButton");

// add spaces to hobbies and skills lists
const hobbiesWithSpaces = aboutMeObject.hobbies.map((x) => " " + x);

const skillsWithSpaces = aboutMeObject.skills.map((x) => " " + x);

// display about me object
const displayAboutMe = (aboutMeObject, output) => {
    output.innerHTML = `
    <div class="dashboard-card">
    <h2>About Me</h2>
    <p><strong>Name:</strong> ${aboutMeObject.name}</p>
    <p><strong>Major:</strong> ${aboutMeObject.major}</p>
    <p><strong>Current Job:</strong> ${aboutMeObject.currentJob}</p>
    <p><strong>Hobbies:</strong> ${hobbiesWithSpaces}</p>
    <p><strong>Skills:</strong> ${skillsWithSpaces}</p>
    </div>`;
};

// generate about me object
const generateAboutMe = () => {
    displayAboutMe(aboutMeObject, output);
};

// button click
readButton.addEventListener("click", generateAboutMe);

// joke
getJoke();
displayJoke();