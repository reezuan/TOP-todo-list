import { TodayIcon } from "../assets/index.js";
import { mainContent } from "../components/mainContent.js";
import { TasksToday } from "../classes/TasksToday.js";

function todayButton() {
    const body = document.querySelector("body");
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("project-list");
    
    // Button icon
    const buttonIcon = new Image();
    buttonIcon.src = TodayIcon;
    buttonIcon.classList.add("nav-icon");

    // Button text
    const buttonText = document.createElement("p");
    buttonText.textContent = "Today";
    buttonText.classList.add("button-title");

    buttonContainer.appendChild(buttonIcon);
    buttonContainer.appendChild(buttonText);

    buttonContainer.addEventListener("click", () => {
        const todayProject = new TasksToday("Today");
        body.appendChild(mainContent(todayProject));
    });

    return buttonContainer;
}

export { todayButton };