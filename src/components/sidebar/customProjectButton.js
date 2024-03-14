import { CustomProjectIcon, RenameIcon, DeleteIcon } from "../../assets/index.js";
import { renameProjectModal } from "../renameProjectModal.js";
import { deleteProjectModal } from "../deleteProjectModal.js";
import { mainContent } from "../mainContent.js";
import { openModal } from "../../utils/openModal.js";
import { getProject } from "../../utils/getProject.js";

function customProjectButton(projectId) {
    const body = document.querySelector("body");
    const Project = getProject(projectId);
    
    // Button container
    const projectButtonContainer = document.createElement("button");
    projectButtonContainer.classList.add("project-list");
    projectButtonContainer.setAttribute("id", Project.id);

    projectButtonContainer.addEventListener("click", () => {
        body.appendChild(mainContent(Project));
    });

    projectButtonContainer.addEventListener("mouseenter", (event) => {
        const activeProject = event.target;
        const actionButtonContainer = activeProject.querySelector(".action-buttons");
        actionButtonContainer.style.opacity = "1";
    });

    projectButtonContainer.addEventListener("mouseleave", (event) => {
        const activeProject = event.target;
        const actionButtonContainer = activeProject.querySelector(".action-buttons");
        actionButtonContainer.style.opacity = "0";
    });

    // Button icon
    const projectButtonIcon = new Image();
    projectButtonIcon.src = CustomProjectIcon;
    projectButtonIcon.classList.add("nav-icon");

    // Button text (project title)
    const projectButtonTitle = document.createElement("p");
    projectButtonTitle.textContent = Project.title;
    projectButtonTitle.classList.add("button-title");
    
    // 'Rename' button
    const renameProjectButton = document.createElement("button");
    const renameProjectIcon = new Image();
    renameProjectIcon.src = RenameIcon;
    renameProjectIcon.classList.add("nav-icon");
    renameProjectButton.appendChild(renameProjectIcon);
    renameProjectButton.addEventListener("click", () => {
        body.appendChild(renameProjectModal(Project));
        openModal(document.querySelector("#rename-project-modal"));
    });
    
    // 'Delete' button
    const deleteProjectButton = document.createElement("button");
    const deleteProjectIcon = new Image();
    deleteProjectIcon.src = DeleteIcon;
    deleteProjectIcon.classList.add("nav-icon");
    deleteProjectButton.appendChild(deleteProjectIcon);
    deleteProjectButton.addEventListener("click", () => {
        body.appendChild(deleteProjectModal(Project.id));
        openModal(document.querySelector("#delete-project-modal"));
    });

    // Container for rename & delete buttons
    const projectActions = document.createElement("div");
    projectActions.classList.add("action-buttons");
    projectActions.style.setProperty("margin-left", "auto");
    projectActions.appendChild(renameProjectButton);
    projectActions.appendChild(deleteProjectButton);

    projectButtonContainer.appendChild(projectButtonIcon);
    projectButtonContainer.appendChild(projectButtonTitle);
    projectButtonContainer.appendChild(projectActions);

    return projectButtonContainer;
}

export { customProjectButton };