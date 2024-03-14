import { homeSection } from "./sidebar/homeSection.js";
import { yourProjectsSection } from "./sidebar/yourProjectsSection.js";

function navSidebar() {
    if (document.querySelector(".sidebar")) { // Test if sidebar already exists.
        document.querySelector(".sidebar").remove();
    }

    const body = document.querySelector("body");
    const navSidebar = document.createElement("nav");
    navSidebar.classList.add("sidebar");

    navSidebar.appendChild(homeSection());
    navSidebar.appendChild(yourProjectsSection());

    return navSidebar;
};

export { navSidebar };