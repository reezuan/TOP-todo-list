import closeModal from "./closeModal.js";
import { createProject } from "./createProject.js";
import initNavSidebar from "./initNavSidebar.js";

export default function initAddProjectModal() {
    // "Add Project" modal
    const addProjectModal = document.createElement("div");
    addProjectModal.setAttribute("id", "add-project-modal");
    addProjectModal.classList.add("modal");

    // Form title
    const formHeader = document.createElement("h2");
    formHeader.textContent = "Add a new project";
    addProjectModal.appendChild(formHeader);

    // Form
    const addProjectForm = document.createElement("form");
    addProjectModal.appendChild(addProjectForm);

    // New project title input
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "project-title");
    addProjectForm.appendChild(titleLabel);
    
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "project-title");
    titleInput.setAttribute("name", "project-title");
    addProjectForm.appendChild(titleInput);

    // "Cancel" button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("type", "button");
    addProjectForm.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
        closeModal(addProjectForm.closest(".modal"));
        addProjectForm.reset();
    });

    // "Create project" button
    const createProjectButton = document.createElement("button");
    createProjectButton.textContent = "Create project";
    createProjectButton.setAttribute("type", "submit");
    addProjectForm.appendChild(createProjectButton);

    addProjectForm.addEventListener("submit", (event) => {
        let newProjectTitle = document.querySelector("#project-title");
        const body = document.querySelector("body");
        
        event.preventDefault();
        createProject(newProjectTitle.value);
        closeModal(addProjectForm.closest(".modal"));
        addProjectForm.reset();

        body.appendChild(initNavSidebar());
    });

    return addProjectModal;
}