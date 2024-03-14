import { retrieveProjectsFromStorage } from "../../utils/retrieveProjectsFromStorage.js";
import { addProjectButton } from "./addProjectButton.js";
import { customProjectButton } from "./customProjectButton.js";

function yourProjectsSection() {
    // Section container
    const sectionContainer = document.createElement("div");

    // Container for section header
    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("section-header");
    sectionContainer.appendChild(sectionHeader);

    // Another container for the section header content
    const sectionHeaderContent = document.createElement("div");
    sectionHeaderContent.classList.add("section-header-content");
    sectionHeader.appendChild(sectionHeaderContent);

    // Section title & button to add project
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = "Your Projects";
    sectionHeaderContent.appendChild(sectionTitle);
    sectionHeaderContent.appendChild(addProjectButton());

    if (retrieveProjectsFromStorage()) {
        const allProjects = retrieveProjectsFromStorage();

        allProjects.forEach(Project => {
            sectionContainer.appendChild(customProjectButton(Project.id));
        });
    };

    return sectionContainer;
};

export { yourProjectsSection };