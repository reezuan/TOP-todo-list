import AllTasks from "./inboxes.png";
import Today from "./calendar-day.png";
import ThisWeek from "./calendar-week.png";

export default function initNavSidebar() {
    const navSidebar = document.createElement("nav");
    navSidebar.classList.add("sidebar");

    // "Home" section
    const homeSection = document.createElement("div");
    
    const homeSectionHeader = document.createElement("h2");
    homeSectionHeader.textContent = "Home";
    homeSection.appendChild(homeSectionHeader);

    const homeListsTitles = ["All tasks", "Today", "This week"];
    const homeListsIcons = [AllTasks, Today, ThisWeek];
    
    for (let i = 0; i < homeListsTitles.length; i++) {
        const listButtonContainer = document.createElement("button");
        listButtonContainer.classList.add("task-list");
        
        const listButtonIcon = new Image();
        listButtonIcon.src = homeListsIcons[i];
        listButtonIcon.classList.add("nav-icon");

        const listButtonTitle = document.createElement("p");
        listButtonTitle.textContent = `${homeListsTitles[i]}`;
        listButtonTitle.classList.add("button-title");

        listButtonContainer.appendChild(listButtonIcon);
        listButtonContainer.appendChild(listButtonTitle);

        homeSection.appendChild(listButtonContainer);
    };

    // "Your Lists" section
    const yourListsSection = document.createElement("div");

    

    navSidebar.appendChild(homeSection);
    navSidebar.appendChild(yourListsSection);

    return navSidebar;
}