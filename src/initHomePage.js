import initHeader from "./initHeader.js";
import initNavSidebar from "./initNavSidebar.js";
import initContent from "./initContent.js";
import initFooter from "./initFooter.js";
import { Project } from "./Project.js";
import { Task } from "./Task.js";

function initHomePage() {
    const body = document.querySelector("body");

    const testProject = new Project("Test Project", "black", false);
    const testTask1 = new Task("Sample Task 1", "This is the first test task.", new Date(), "High");
    const testTask2 = new Task("Sample Task 2", "This is the second test task.", new Date(), "Low");

    testTask1.addLabel("Test label 1");
    testTask1.addLabel("Test label 2");

    testTask2.addLabel("Test label 1");
    testTask2.addLabel("Test label 2");
    
    testProject.addTask(testTask1);
    testProject.addTask(testTask2);

    console.log(testTask1);
    console.log(testProject);

    body.appendChild(initHeader());
    body.appendChild(initNavSidebar());
    body.appendChild(initContent(testProject));
    body.appendChild(initFooter());
};

export { initHomePage };