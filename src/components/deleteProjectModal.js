import { AllTasks } from "../classes/AllTasks.js";
import { navSidebar } from "./navSidebar.js";
import { mainContent } from "./mainContent.js";
import { closeModal } from "../utils/closeModal.js";
import { getProject } from "../utils/getProject.js";
import { deleteProjectTasks } from "../utils/deleteProjectTasks.js";
import { deleteProject } from "../utils/deleteProject.js";

function deleteProjectModal(projectId) {
    if (document.querySelector("#delete-project-modal") != null) { // Test if modal already exists.
        document.querySelector("#delete-project-modal").remove();
    };

    const Project = getProject(projectId);
    
    // Modal
    const deleteProjectModal = document.createElement("div");
    deleteProjectModal.setAttribute("id", "delete-project-modal");
    deleteProjectModal.classList.add("modal");

    // Modal text
    const modalText = document.createElement("p");
    modalText.innerHTML = `Are you sure you want to delete <b>${Project.title}</b>?`;
    deleteProjectModal.appendChild(modalText);

    // "Cancel" button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    deleteProjectModal.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
        closeModal(cancelButton.closest(".modal"));
        cancelButton.closest(".modal").remove();
    });

    // "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteProjectModal.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        closeModal(deleteButton.closest(".modal"));
        deleteButton.closest(".modal").remove();

        deleteProjectTasks(projectId);
        deleteProject(projectId);

        const body = document.querySelector("body");
        body.appendChild(navSidebar());
        body.appendChild(mainContent(new AllTasks()));
    });

    return deleteProjectModal;
}

export { deleteProjectModal };