import { AddIcon } from "../../assets/index.js";
import { openModal } from "../../utils/openModal.js";
import { addProjectModal } from "../addProjectModal.js";

function addProjectButton() {
    const button = document.createElement("button");
    button.setAttribute("data-modal-target", "#add-project-modal");
    
    const buttonIcon = new Image();
    buttonIcon.src = AddIcon;
    button.appendChild(buttonIcon);

    button.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.appendChild(addProjectModal());
        openModal(document.querySelector("#add-project-modal"));
    });

    return button;
};

export { addProjectButton };