//TODO: Include your multi-line comment header
/*
    Name: Megan Derks
    Date: 9-13-2026
    Assignment: script.js
    Quarter: INFO1579.WA
    Instructor: Kuisma
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
/*
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
*/
// END DO NOT MODIFY

// ADD YOUR CODE BELOW
import { courseModules } from "./data.js";

import {
  calculatePercentComplete,
  calculateStudyHours,
  getCourseGrade,
  getCourseProgress,
  getStudyPlan,
} from "./calculations.js";

import {
  validateInputs,
  runUnitTests,
} from "./validators.js";

import {
  resetDashboard,
  displayModules,
  displayRemainingModules,
  applyDashboardColor,
  displayDashboard,
} from "./dashboard.js";

import {
  displayJoke,
  displayQuote,
} from "./api.js";

// Get the DOM elements
let studentNameInput = document.getElementById("studentName");
let completedModulesInput = document.getElementById("completedModules");
let studyDayInput = document.getElementById("studyDay");
const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
let output = document.getElementById("output");

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)

// const completedModules = ['Module 1', 'Module 2', 'Module 3'];
// const myName = 'Megan Derks';
let totalModules = 10;
// let isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
// let welcomeMessage = `Hi, my name is ${myName}. Welcome to my website!`;

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let hoursPerWeek = 6;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
// let dailyStudyHours = hoursPerWeek / 7;
// let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = hoursPerWeek / 6;
export let adjustedDailyMinutes = adjustedDailyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
// let modulesRemaining = totalModules - completedModulesInput;
// let hoursRemaining = hoursPerWeek * modulesRemaining;

// const percentComplete = calculatePercentComplete(completedModules.length, courseModules.length);

// const totalStudyHours = calculateStudyHours(courseModules.length);

// let percentRemaining = (hoursRemaining / totalStudyHours) * 100;

// get user input 
const generateDashboard = () => {
 try {
  // retrieve inputs
  const studentName = studentNameInput.value;
  console.log("Student Name: ", studentName);
  const completedModules = Number(completedModulesInput.value);
  console.log("Completed Modules: ", completedModules);
  const studyDay = studyDayInput.value;
  console.log("Study Day: ", studyDay);
    // calculations
  const totalStudyHours = courseModules.reduce(
  (total, module) => total + module.hoursRequired,
  0
  );
  const percentComplete = calculatePercentComplete(completedModules, courseModules.length);
  console.log("Percent Complete: ", percentComplete);
  let modulesRemaining = totalModules - completedModules;
  let hoursRemaining = hoursPerWeek * modulesRemaining;
  let percentRemaining = (hoursRemaining / totalStudyHours) * 100;
  //let dailyStudyHours = hoursPerWeek / 7;
  //let dailyStudyMinutes = dailyStudyHours * 60;
  const grade = getCourseGrade(percentComplete);
  console.log("Grade: ", grade);
  const progress = getCourseProgress(percentRemaining);
  console.log("Progress: ", progress);
  const studyPlan = getStudyPlan(studyDay);
   // get module names
  const moduleNames = courseModules.map(
    (module) => module?.moduleName
  );
  console.log("Modules:", moduleNames);
  // find remaining modules
  const remainingModules = courseModules.filter(
    (module, index) => index >= completedModules
  );
  // calculate remaining study hours
 const remainingHours = remainingModules.reduce(
  (total, module) => total + module.hoursRequired,
  0
);
  // validate inputs
  validateInputs(studentName, completedModules, studyDay);
  // unit testing
  runUnitTests();
  // display dashboard
  displayDashboard(studentName, courseModules, completedModules, totalStudyHours, remainingHours, percentComplete, percentRemaining, grade, progress, studyDay, studyPlan, output);
  displayRemainingModules(remainingModules);
  applyDashboardColor(percentComplete, output);
 } catch (error) {
    output.innerHTML = `
    <div class = "dashboard-card">
    <h2>Error</h2>
    <ul>${error.message}</ul>
    </div>`;
    output.style.backgroundColor = "#f8d7da";
 }
};

// display completed modules
/*
const displayCompletedModules = (...modules) => {
  return modules.join(", ");
};
*/

// const completedModulesList = displayCompletedModules(...completedModules);

// find what my study week looks like
// let studyDay;
/*
if (percentRemaining == 0) {
  studyDay = 'Complete';
} 
else {
  studyDay = prompt("Enter what day of the week today is (Ex: Monday) to find today's study plan: ");
}
*/

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
/*
display("Welcome Message", welcomeMessage);
display("My Name", myName);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
displayModules(courseModules);
display("Completed Modules", completedModulesList);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)", adjustedDailyHours.toFixed(2));
display("Daily Study Minutes (with rest day)", adjustedDailyMinutes.toFixed(2));
*/

// TODO: Display your results with a % sign
/*
let formattedPercentComplete = `${percentComplete.toFixed(2)}%`;
display("Percent Complete", formattedPercentComplete);
let formattedPercentRemaining = `${percentRemaining.toFixed(2)}%`;
display("Percent Remaining", formattedPercentRemaining);
*/

// Display progress, grade, and study plan for the day
/*
display("Current Progress", getCourseProgress(percentRemaining));
display("Course Grade", getCourseGrade(percentComplete));
display("Today is", studyDay);
display("Today's study plan is", getStudyPlan(studyDay));
*/

// Handling the button click
generateButton.addEventListener("click", generateDashboard);
resetButton.addEventListener("click", () => resetDashboard(studentNameInput, completedModulesInput, studyDayInput, output));

displayJoke();
displayQuote();