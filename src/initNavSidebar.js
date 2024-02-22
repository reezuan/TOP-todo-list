import AllTasks from "./assets/inboxes.png";
import Today from "./assets/calendar-day.png";
import ThisWeek from "./assets/calendar-week.png";
import CustomProject from "./assets/to-do.png";
import Plus from "./assets/plus.png";
import retrieveProjectsFromStorage from "./retrieveProjectsFromStorage.js";
import saveProjectToStorage from "./saveProjectToStorage.js";

export default function initNavSidebar() {
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

    const addProjectButton = document.createElement("button");
    const addProjectIcon = new Image();
    addProjectIcon.src = Plus;
    addProjectButton.appendChild(addProjectIcon);
    yourProjectsHeaderContent.appendChild(addProjectButton);
    
    yourProjectsSection.appendChild(yourProjectsSectionHeader);

    if (retrieveProjectsFromStorage()) {
        const allProjects = retrieveProjectsFromStorage().map(item => {
            return item.title;
        });

        allProjects.forEach(projectTitle => {
            const projectButtonContainer = document.createElement("button");
            projectButtonContainer.classList.add("project-list");

            const projectButtonIcon = new Image();
            projectButtonIcon.src = CustomProject;
            projectButtonIcon.classList.add("nav-icon");

            const projectButtonTitle = document.createElement("p");
            projectButtonTitle.textContent = projectTitle;
            projectButtonTitle.classList.add("button-title");

            projectButtonContainer.appendChild(projectButtonIcon);
            projectButtonContainer.appendChild(projectButtonTitle);

            yourProjectsSection.appendChild(projectButtonContainer);
        });
    };

    navSidebar.appendChild(homeSection);
    navSidebar.appendChild(yourProjectsSection);

    return navSidebar;
}