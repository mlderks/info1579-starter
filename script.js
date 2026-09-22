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
let completedModules = ['Module 1', 'Module 2'];
const myName = 'Megan Derks';
let totalModules = 10;
let isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
let welcomeMessage = `Hi, my name is ${myName}. Welcome to my website!`;

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
let hoursPerWeek = 6;
let totalStudyHours = totalModules * hoursPerWeek;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
let dailyStudyHours = hoursPerWeek / 7;
let dailyStudyMinutes = dailyStudyHours * 60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
let adjustedDailyHours = hoursPerWeek / 6;
let adjustedDailyMinutes = adjustedDailyHours * 60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
completedModules = Number(prompt("Enter the number of completed modules (1-10): "));
let hoursCompleted = hoursPerWeek * completedModules;
let percentComplete = (hoursCompleted / totalStudyHours) * 100;
let modulesRemaining = totalModules - completedModules;
let hoursRemaining = hoursPerWeek * modulesRemaining;
let percentRemaining = (hoursRemaining / totalStudyHours) * 100;

// Module 2 code below

// find current progress
let courseProgress;
if (percentRemaining == 0) {
  courseProgress = 'Finished!';
}
else if (percentRemaining >= 1 && percentRemaining <= 24.99) {
  courseProgress = 'Almost Finished!';
}
else if (percentRemaining >= 25 && percentRemaining <= 74.99) {
  courseProgress = 'Making Progress';
}
else if (percentRemaining >= 75 && percentRemaining <= 100) {
  courseProgress = 'Just Getting Started';
}
else {
  courseProgress = 'Invalid entry.';
}

// find my grade
let courseGrade;
if (percentComplete >= 90 && percentComplete <= 100) {
  courseGrade = 'A';
}
else if (percentComplete >= 80 && percentComplete <= 89.99) {
  courseGrade = 'B';
}
else if (percentComplete >= 70 && percentComplete <= 79.99) {
  courseGrade = 'C';
}
else if (percentComplete >= 60 && percentComplete <= 69.99) {
  courseGrade = 'D';
}
else if (percentComplete < 60 && percentComplete >= 0) {
  courseGrade = 'F';
}
else {
  courseGrade = 'Invalid entry.';
}

// find what my study week looks like
let studyDay;
if (percentRemaining == 0) {
  studyDay = 'Complete';
} 
else {
  studyDay = prompt("Enter what day of the week today is (Ex: Monday) to find today's study plan: ");
}

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

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display("Welcome Message", welcomeMessage);
display("My Name", myName);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
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
display("Current Progress", courseProgress);
display("Course Grade", courseGrade);
display("Today is", studyDay);
display("Today's study plan is", studyPlan);