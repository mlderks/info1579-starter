import { adjustedDailyMinutes } from "./script.js";

// calculate percent complete
export function calculatePercentComplete(completed, total) {
  let coursePercentComplete;
  return (coursePercentComplete = (completed / total) * 100);
}

// calculate study hours
export function calculateStudyHours(modules, hoursPerModule = 6) {
  let studyHours;
  return (studyHours = modules * hoursPerModule);
}

// find my grade
export const getCourseGrade = (percentComplete) => {
  if (percentComplete >= 90 && percentComplete <= 100) {
    return "A";
  } else if (percentComplete >= 80 && percentComplete <= 89.99) {
    return "B";
  } else if (percentComplete >= 70 && percentComplete <= 79.99) {
    return "C";
  } else if (percentComplete >= 60 && percentComplete <= 69.99) {
    return "D";
  } else if (percentComplete < 60 && percentComplete >= 0) {
    return "F";
  } else {
    return "Invalid entry.";
  }
};

// find current progress
export const getCourseProgress = (percentRemaining) => {
  if (percentRemaining == 0) {
    return "Finished!";
  } else if (percentRemaining >= 1 && percentRemaining <= 24.99) {
    return "Almost Finished!";
  } else if (percentRemaining >= 25 && percentRemaining <= 74.99) {
    return "Making Progress";
  } else if (percentRemaining >= 75 && percentRemaining <= 100) {
    return "Just Getting Started";
  } else {
    return "Invalid entry.";
  }
};

// get study plan
export const getStudyPlan = (studyDay) => {
  let studyPlan;
  switch (studyDay) {
    case "Monday":
      studyPlan = `Finishing up today. Finish working on programming activity for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
      break;
    case "Tuesday":
      studyPlan = `Reading day today. Read learning materials for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
      break;
    case "Wednesday":
      studyPlan = "Rest day today. Yay!";
      break;
    case "Thursday":
      studyPlan = `Study day today. Study for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
      break;
    case "Friday":
      studyPlan = `Catch up today. Finish studying learning materials or start working on labs for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
      break;
    case "Saturday":
      studyPlan = `Lab day today. Work on labs for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
      break;
    case "Sunday":
      studyPlan = `Applied programming activity day today. Work on programming activity for ${adjustedDailyMinutes.toFixed(2)} minutes today.`;
      break;
    case "Complete":
      studyPlan = "Course Completed!";
      break;
    default:
      studyPlan = "Invalid entry.";
  }
  return studyPlan;
};
