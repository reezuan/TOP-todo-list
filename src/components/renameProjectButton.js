import { renameProjectModal } from "../components/renameProjectModal.js";
import { RenameIcon } from "../assets/index.js";

function renameProjectButton(Project) {
    const buttonIcon = new Image();
    buttonIcon.src = RenameIcon;
    buttonIcon.classList.add("nav-icon");
    
    const buttonContainer = document.createElement("button");
    buttonContainer.appendChild(buttonIcon);
    
    buttonContainer.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.appendChild(renameProjectModal(Project));
        openModal(document.querySelector("#rename-project-modal"));
    });
}

export { renameProjectButton };