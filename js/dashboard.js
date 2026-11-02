import { courseModules } from "./data.js";

// reset dashboard
export const resetDashboard = (studentNameInput, completedModulesInput, studyDayInput, output) => {
  console.log("Student Name: ", studentNameInput.value);
  console.log("Completed Modules: ", completedModulesInput.value);
  console.log("Study Day: ", studyDayInput.value);
  studentNameInput.value = "";
  studyDayInput.value = "";
  output.innerHTML = ``;
  completedModulesInput.value = 0;
  output.style.backgroundColor = "white";
};

// display course modules
export const displayModules = modules => {
  const list = document.createElement("ul");
  for (let i = 0; i < courseModules.length; i++) {
    // display(`Module ${i + 1}`, modules[i]);
    const listItem = document.createElement("li");
    listItem.textContent = modules[i]?.moduleName;
    list.appendChild(listItem);
  }
  return list;
};

// display remaining modules
export const displayRemainingModules = (remainingModules) => {
  document
    .getElementById("remainingModulesList")
    .appendChild(displayModules(remainingModules));
};

// Progress color
export const applyDashboardColor = (percentComplete, output) => {
  if (percentComplete >= 75) {
    output.style.backgroundColor = "lightgreen";
  } else if (percentComplete >= 25) {
    output.style.backgroundColor = "lightyellow";
  } else {
    output.style.backgroundColor = "lightcoral";
  }
};

// Generate dashboard summary
export const displayDashboard = (studentName, courseModules, completedModules, totalStudyHours, remainingHours, percentComplete, percentRemaining, grade, progress, studyDay, studyPlan, output) => {
  output.innerHTML = `
  <div class="dashboard-card">
  <h2>My Study Dashboard</h2>
  <p><strong>Name:</strong> ${studentName}</p>
  <p><strong>Total Modules:</strong> ${courseModules.length}</p>
  <p><strong>Completed Modules:</strong> ${completedModules}</p>
  <p><strong>Total Study Hours:</strong> ${totalStudyHours}</p>
  <p><strong>Remaining Study Hours:</strong> ${remainingHours}</p>
  <p><strong>Percent Complete:</strong> ${percentComplete.toFixed(0)}%</p>
  <p><strong>Percent Remaining:</strong> ${percentRemaining.toFixed(0)}%</p>
  <p><strong>Current Grade:</strong> ${grade}</p>
  <p><strong>Progress Status:</strong> ${progress}</p>
  <p><strong>Study Day:</strong> ${studyDay}</p>
  <p><strong>Today's Plan:</strong> ${studyPlan}</p>
  <p><strong>Remaining Modules:</strong></p>
  <div id="remainingModulesList"></div>
  </div>`;
};