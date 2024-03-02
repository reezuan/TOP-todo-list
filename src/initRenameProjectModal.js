import closeModal from "./closeModal.js";
import initNavSidebar from "./initNavSidebar.js";
import getProject from "./getProject.js";
import { Project } from "./Project.js";

export default function initRenameProjectModal(Project) {
    if (document.querySelector("#rename-project-modal") != null) { // Test if modal already exists.
        document.querySelector("#rename-project-modal").remove();
    };
    
    // "Rename Project" modal
    const renameProjectModal = document.createElement("div");
    renameProjectModal.setAttribute("id", "rename-project-modal");
    renameProjectModal.classList.add("modal");

    // Form title
    const formHeader = document.createElement("h2");
    formHeader.textContent = "Rename project";
    renameProjectModal.appendChild(formHeader);

    // Form
    const renameProjectForm = document.createElement("form");
    renameProjectModal.appendChild(renameProjectForm);

    /* // [Hidden] Project ID
    const projectIdInput = document.createElement("input");
    projectIdInput.setAttribute("type", "hidden");
    projectIdInput.setAttribute("id", "project-id");
    projectIdInput.setAttribute("name", "project-id"); */

    // Rename title input
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "edited-title");
    renameProjectForm.appendChild(titleLabel);
    
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "edited-title");
    titleInput.setAttribute("name", "edited-title");
    renameProjectForm.appendChild(titleInput);

    // "Cancel" button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("type", "button");
    renameProjectForm.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
        closeModal(renameProjectForm.closest(".modal"));
        renameProjectForm.reset();
    });

    // "Save" button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.setAttribute("type", "submit");
    renameProjectForm.appendChild(saveButton);

    renameProjectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const editedProjectTitle = document.querySelector("#edited-title");
        /* const editedProjectId = document.querySelector("#project-id"); */
        const body = document.querySelector("body");
        const projectToEdit = getProject(Project.id);

        projectToEdit.rename(editedProjectTitle.value);
        
        closeModal(renameProjectForm.closest(".modal"));
        renameProjectForm.reset();

        body.appendChild(initNavSidebar());
    });

    return renameProjectModal;
}