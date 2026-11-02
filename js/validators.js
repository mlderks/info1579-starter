import { 
  getCourseGrade,
  getCourseProgress,
  getStudyPlan,
} from "./calculations.js";

// validating inputs
export const validateInputs = (studentName, completedModules, studyDay, courseModules) => {
  // store any validation errors in this array
  const errors = [];
  // validation statements below
  if (studentName.trim() === "") {
    errors.push(`<li>Please enter a name.</li>`);
  }
  if (completedModules < 0 || completedModules > 10) {
    errors.push(`<li>Completed modules must be between 0 and 10.</li>`);
  }
  if (studyDay === "") {
    errors.push(`<li>Please select a study day.</li>`);
  }
  // if errors were found, stop and report them
  if (errors.length > 0) {
    throw new Error(errors.join(""));
  }
};

// unit testing
export const runUnitTests = () => {
  // unit tests for each letter grade
  console.assert(getCourseGrade(94) === 'A', "Grade A test failed");
  console.assert(getCourseGrade(82) === 'B', "Grade B test failed");
  console.assert(getCourseGrade(70) === 'C', "Grade C test failed");
  console.assert(getCourseGrade(68) === 'D', "Grade D test failed");
  console.assert(getCourseGrade(40) === 'F', "Grade F test failed");

  // unit tests for course progress
  console.assert(getCourseProgress(0) === 'Finished!', "Course progress of 'finished' test failed");
  console.assert(getCourseProgress(100) === 'Just Getting Started', "Course progress of 'just getting started' test failed");
  console.assert(getCourseProgress(50) === 'Making Progress', "Course progress of 'making progress' test failed");
  console.assert(getCourseProgress(14) === 'Almost Finished!', "Course progress of 'almost finished' test failed");

  // unit test for study plan
  console.assert(getStudyPlan('Wednesday') === 'Rest day today. Yay!', "Get study plan for Wednesday test failed");
};
