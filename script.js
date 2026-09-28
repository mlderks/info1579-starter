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
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
const courseModules = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8', 'Module 9', 'Module 10'];
const completedModules = ['Module 1', 'Module 2', 'Module 3'];
const myName = 'Megan Derks';
let totalModules = 10;
let isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
let welcomeMessage = `Hi, my name is ${myName}. Welcome to my website!`;

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let hoursPerWeek = 6;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let dailyStudyHours = hoursPerWeek / 7;
let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = hoursPerWeek / 6;
let adjustedDailyMinutes = adjustedDailyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
let modulesRemaining = totalModules - completedModules.length;
let hoursRemaining = hoursPerWeek * modulesRemaining;

// calculate percent complete
function calculatePercentComplete(completed, total) {
  let coursePercentComplete;
  return coursePercentComplete = (completed / total) * 100;
}

const percentComplete = calculatePercentComplete(completedModules.length, courseModules.length);

// calculate study hours
function calculateStudyHours(modules, hoursPerModule = 6) {
  let studyHours;
  return studyHours = modules * hoursPerModule;
}

const totalStudyHours = calculateStudyHours(courseModules.length);

let percentRemaining = (hoursRemaining / totalStudyHours) * 100;

// find current progress
const getCourseProgress = function(percentRemaining) {
  if (percentRemaining == 0) {
  return 'Finished!';
}
else if (percentRemaining >= 1 && percentRemaining <= 24.99) {
  return 'Almost Finished!';
}
else if (percentRemaining >= 25 && percentRemaining <= 74.99) {
  return 'Making Progress';
}
else if (percentRemaining >= 75 && percentRemaining <= 100) {
  return 'Just Getting Started';
}
else {
  return 'Invalid entry.';
}
};

// find my grade
const getCourseGrade = percentComplete => {
if (percentComplete >= 90 && percentComplete <= 100) {
  return 'A';
}
else if (percentComplete >= 80 && percentComplete <= 89.99) {
  return 'B';
}
else if (percentComplete >= 70 && percentComplete <= 79.99) {
  return 'C';
}
else if (percentComplete >= 60 && percentComplete <= 69.99) {
  return 'D';
}
else if (percentComplete < 60 && percentComplete >= 0) {
  return 'F';
}
else {
  return 'Invalid entry.';
}
};

// display course modules
const displayModules = modules => {
  for (let i = 0; i < courseModules.length; i++) {
    display(`Module ${i + 1}`, modules[i]);
  }
};

// display completed modules
const displayCompletedModules = (...modules) => {
  return modules.join(", ");
};

const completedModulesList = displayCompletedModules(...completedModules);

// find what my study week looks like
let studyDay;
if (percentRemaining == 0) {
  studyDay = 'Complete';
} 
else {
  studyDay = prompt("Enter what day of the week today is (Ex: Monday) to find today's study plan: ");
}

// get study plan
const getStudyPlan = studyDay => {
  let studyPlan;
  switch (studyDay) {
  case 'Monday':
  studyPlan = `Finishing up today. Finish working on programming activity for ${adjustedDailyMinutes.toFixed(2)} minutes today.`
  break;
  case 'Tuesday':
  studyPlan = `Reading day today. Read learning materials for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
  break;
  case 'Wednesday':
  studyPlan = 'Rest day today. Yay!'
  break;
  case 'Thursday':
  studyPlan = `Study day today. Study for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
  break;
  case 'Friday':
  studyPlan = `Catch up today. Finish studying learning materials or start working on labs for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
  break;
  case 'Saturday':
  studyPlan = `Lab day today. Work on labs for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
  break;
  case 'Sunday':
  studyPlan = `Applied programming activity day today. Work on programming activity for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
  break;
  case 'Complete':
  studyPlan = 'Course Completed!';
  break;
  default:
  studyPlan = 'Invalid entry.'
}
return studyPlan;
};

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
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

// TODO: Display your results with a % sign
let formattedPercentComplete = `${percentComplete.toFixed(2)}%`;
display("Percent Complete", formattedPercentComplete);
let formattedPercentRemaining = `${percentRemaining.toFixed(2)}%`;
display("Percent Remaining", formattedPercentRemaining);

// Display progress, grade, and study plan for the day
display("Current Progress", getCourseProgress(percentRemaining));
display("Course Grade", getCourseGrade(percentComplete));
display("Today is", studyDay);
display("Today's study plan is", getStudyPlan(studyDay));