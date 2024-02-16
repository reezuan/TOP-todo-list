import AllTasks from "./assets/inboxes.png";
import Today from "./assets/calendar-day.png";
import ThisWeek from "./assets/calendar-week.png";
import CustomProject from "./assets/to-do.png";
import retrieveProjectsFromStorage from "./retrieveProjectsFromStorage.js";

export default function initNavSidebar() {
    const navSidebar = document.createElement("nav");
    navSidebar.classList.add("sidebar");

    // "Home" section
    const homeSection = document.createElement("div");
    
    const homeSectionHeader = document.createElement("h2");
    homeSectionHeader.textContent = "Home";
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

    const yourProjectsSectionHeader = document.createElement("h2");
    yourProjectsSectionHeader.textContent = "Your Projects";
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