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
let modulesCompleted = 2;
let hoursCompleted = hoursPerWeek * modulesCompleted;
let percentComplete = (hoursCompleted / totalStudyHours) * 100;
let modulesRemaining = totalModules - modulesCompleted;
let hoursRemaining = hoursPerWeek * modulesRemaining;
let percentRemaining = (hoursRemaining / totalStudyHours) * 100;

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
let label;
let value;
display("Welcome Message", welcomeMessage);
display("My Name", myName);
display("Enrolled", isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)", adjustedDailyHours);
display("Daily Study Minutes (with rest day)", adjustedDailyMinutes);

// TODO: Display your results with a % sign
let formattedPercentComplete = `${percentComplete}%`;
display("Percent Complete", formattedPercentComplete);
let formattedPercentRemaining = `${percentRemaining}%`;
display("Percent Remaining", formattedPercentRemaining);
