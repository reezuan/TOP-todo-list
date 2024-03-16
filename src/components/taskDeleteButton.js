import { DeleteIcon } from "../assets/index.js";
import { deleteTaskModal } from "./deleteTaskModal.js";
import { openModal } from "../utils/openModal.js";

function taskDeleteButton(taskId) {
    const buttonIcon = new Image();
    buttonIcon.src = DeleteIcon;
    buttonIcon.classList.add("action-button");
    
    const button = document.createElement("button");
    button.appendChild(buttonIcon);

    button.addEventListener("click", () => {
        const body = document.querySelector("body");
        body.appendChild(deleteTaskModal(taskId));
        openModal(document.querySelector("#delete-task-modal"));
    });

    return button;
}

export { taskDeleteButton };