import { allTasksButton } from "../allTasksButton.js";
import { todayButton } from "../todayButton.js";
import { thisWeekButton } from "../thisWeekButton.js";

function homeSection() {
    const sectionContainer = document.createElement("div");

    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("section-header");
    sectionContainer.appendChild(sectionHeader);

    const headerContent = document.createElement("div");
    headerContent.classList.add("section-header-content");
    sectionHeader.appendChild(headerContent);

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "Home";
    headerContent.appendChild(sectionTitle);

    sectionContainer.appendChild(allTasksButton());
    sectionContainer.appendChild(todayButton());
    sectionContainer.appendChild(thisWeekButton());

    return sectionContainer;
};

export { homeSection };