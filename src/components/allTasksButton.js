import { AllTasksIcon } from "../assets/index.js";
import { mainContent } from "../components/mainContent.js";

function allTasksButton() {
    const body = document.querySelector("body");
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("project-list");
    
    // Button icon
    const buttonIcon = new Image();
    buttonIcon.src = AllTasksIcon;
    buttonIcon.classList.add("nav-icon");

    // Button text
    const buttonText = document.createElement("p");
    buttonText.textContent = "All tasks";
    buttonText.classList.add("button-title");

    buttonContainer.appendChild(buttonIcon);
    buttonContainer.appendChild(buttonText);

    buttonContainer.addEventListener("click", () => {
        body.appendChild(mainContent());
    });

    return buttonContainer;
}

export { allTasksButton };