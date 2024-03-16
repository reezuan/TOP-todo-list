import { RenameIcon } from "../assets/index.js";
import { editTaskModal } from "./editTaskModal.js";
import { openModal } from "../utils/openModal.js";

function taskEditButton(taskId) {
    const buttonIcon = new Image();
    buttonIcon.src = RenameIcon;
    buttonIcon.classList.add("action-button");
    
    const button = document.createElement("button");
    button.appendChild(buttonIcon);

    button.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.appendChild(editTaskModal(taskId));
        openModal(document.querySelector("#edit-task-modal"));
    });

    return button;
}

export { taskEditButton };