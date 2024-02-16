import CollapseMenuIcon from "./assets/collapse.png";
import RevealMenuIcon from "./assets/reveal-menu.png";
import HomeIcon from "./assets/home.png";
import SiteLogo from "./assets/site-logo.png";

export default function initHeader() {
    const header = document.createElement("header");
    
    const collapseMenuIcon = new Image();
    const revealMenuIcon = new Image();
    const homeIcon = new Image();
    collapseMenuIcon.src = CollapseMenuIcon;
    revealMenuIcon.src = RevealMenuIcon;
    homeIcon.src = HomeIcon;

    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(collapseMenuIcon);
    buttonContainer.appendChild(homeIcon);

    const siteLogo = new Image();
    siteLogo.src = SiteLogo;
    siteLogo.classList.add("site-logo");

    const darkModeToggle = document.createElement("button");
    darkModeToggle.classList.add("dark-mode-toggle");

    header.appendChild(buttonContainer);
    header.appendChild(siteLogo);
    header.appendChild(darkModeToggle);

    return header;
}