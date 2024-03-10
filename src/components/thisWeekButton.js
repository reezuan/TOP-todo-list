import { WeekIcon } from "../assets/index.js";
import { mainContent } from "../components/mainContent.js";
import { TasksThisWeek } from "../classes/TasksThisWeek.js";

function thisWeekButton() {
    const body = document.querySelector("body");
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("project-list");
    
    // Button icon
    const buttonIcon = new Image();
    buttonIcon.src = WeekIcon;
    buttonIcon.classList.add("nav-icon");

    // Button text
    const buttonText = document.createElement("p");
    buttonText.textContent = "This week";
    buttonText.classList.add("button-title");

    buttonContainer.appendChild(buttonIcon);
    buttonContainer.appendChild(buttonText);

    buttonContainer.addEventListener("click", () => {
        const thisWeekProject = new TasksThisWeek();
        body.appendChild(mainContent(thisWeekProject));
    });

    return buttonContainer;
}

export { thisWeekButton };