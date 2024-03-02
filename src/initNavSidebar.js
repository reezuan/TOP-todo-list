import AllTasks from "./assets/inboxes.png";
import Today from "./assets/calendar-day.png";
import ThisWeek from "./assets/calendar-week.png";
import CustomProject from "./assets/to-do.png";
import Plus from "./assets/plus.png";
import Rename from "./assets/edit-text.png";
import Delete from "./assets/trash-can.png";
import retrieveProjectsFromStorage from "./retrieveProjectsFromStorage.js";
import openModal from "./openModal.js";
import initRenameProjectModal from "./initRenameProjectModal.js";
import initDeleteProjectModal from "./initDeleteProjectModal.js";

export default function initNavSidebar() {
    if (document.querySelector(".sidebar")) { // Test if sidebar already exists.
        document.querySelector(".sidebar").remove();
    }

    const body = document.querySelector("body");
    const deleteProjectModal = document.querySelector("#delete-project-modal");
    
    const navSidebar = document.createElement("nav");
    navSidebar.classList.add("sidebar");

    // "Home" section
    const homeSection = document.createElement("div");

    const homeSectionHeader = document.createElement("div");
    homeSectionHeader.classList.add("section-header");
    homeSection.appendChild(homeSectionHeader);

    const homeHeaderContent = document.createElement("div");
    homeHeaderContent.classList.add("section-header-content");
    homeSectionHeader.appendChild(homeHeaderContent);
    
    const homeSectionTitle = document.createElement("h2");
    homeSectionTitle.textContent = "Home";
    homeHeaderContent.appendChild(homeSectionTitle);
    homeSectionHeader.appendChild(homeHeaderContent);
    
    homeSection.appendChild(homeSectionHeader);

    const homeProjectsTitles = ["All tasks", "Today", "This week"];
    const homeProjectsIcons = [AllTasks, Today, ThisWeek];
    
    for (let i = 0; i < homeProjectsTitles.length; i++) {
        const projectButtonContainer = document.createElement("button");
        projectButtonContainer.classList.add("project-list");
        
        const projectButtonIcon = new Image();
        projectButtonIcon.src = homeProjectsIcons[i];
        projectButtonIcon.classList.add("nav-icon");

        const projectButtonTitle = document.createElement("p");
        projectButtonTitle.textContent = `${homeProjectsTitles[i]}`;
        projectButtonTitle.classList.add("button-title");

        projectButtonContainer.appendChild(projectButtonIcon);
        projectButtonContainer.appendChild(projectButtonTitle);

        homeSection.appendChild(projectButtonContainer);
    };

    // "Your Projects" section
    const yourProjectsSection = document.createElement("div");

    const yourProjectsSectionHeader = document.createElement("div");
    yourProjectsSectionHeader.classList.add("section-header");

    const yourProjectsHeaderContent = document.createElement("div");
    yourProjectsHeaderContent.classList.add("section-header-content");
    yourProjectsSectionHeader.appendChild(yourProjectsHeaderContent);

    const yourProjectsSectionTitle = document.createElement("h2");
    yourProjectsSectionTitle.textContent = "Your Projects";
    yourProjectsHeaderContent.appendChild(yourProjectsSectionTitle);

    // "Add project" button
    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("data-modal-target", "#add-project-modal");
    const addProjectIcon = new Image();
    addProjectIcon.src = Plus;

    addProjectButton.addEventListener("click", () => {
        const addProjectModal = document.querySelector("#add-project-modal");
        openModal(addProjectModal);
    });
    
    addProjectButton.appendChild(addProjectIcon);
    yourProjectsHeaderContent.appendChild(addProjectButton);
    
    yourProjectsSection.appendChild(yourProjectsSectionHeader);

    if (retrieveProjectsFromStorage()) {
        const allProjects = retrieveProjectsFromStorage();

        allProjects.forEach(Project => {
            const projectButtonContainer = document.createElement("button");
            projectButtonContainer.classList.add("project-list");

            const projectButtonIcon = new Image();
            projectButtonIcon.src = CustomProject;
            projectButtonIcon.classList.add("nav-icon");

            const projectButtonTitle = document.createElement("p");
            projectButtonTitle.textContent = Project.title;
            projectButtonTitle.classList.add("button-title");

            // Container for rename & delete buttons
            const projectActions = document.createElement("div");
            projectActions.classList.add("action-buttons");
            projectActions.style.setProperty("margin-left", "auto");
            
            // 'Rename' button
            const renameProjectButton = document.createElement("button");
            const renameProjectIcon = new Image();
            renameProjectIcon.src = Rename;
            renameProjectIcon.classList.add("nav-icon");
            renameProjectButton.appendChild(renameProjectIcon);
            renameProjectButton.addEventListener("click", () => {
                body.appendChild(initRenameProjectModal(Project));
                openModal(document.querySelector("#rename-project-modal"));
            });
            projectActions.appendChild(renameProjectButton);
            
            // 'Delete' button
            const deleteProjectButton = document.createElement("button");
            const deleteProjectIcon = new Image();
            deleteProjectIcon.src = Delete;
            deleteProjectIcon.classList.add("nav-icon");
            deleteProjectButton.appendChild(deleteProjectIcon);
            deleteProjectButton.addEventListener("click", () => {
                body.appendChild(initDeleteProjectModal(Project));
                openModal(document.querySelector("#delete-project-modal"));
            });
            projectActions.appendChild(deleteProjectButton);

            yourProjectsSection.appendChild(projectButtonContainer);

            projectButtonContainer.appendChild(projectButtonIcon);
            projectButtonContainer.appendChild(projectButtonTitle);
            projectButtonContainer.appendChild(projectActions);
        });
    };

    navSidebar.appendChild(homeSection);
    navSidebar.appendChild(yourProjectsSection);

    return navSidebar;
}