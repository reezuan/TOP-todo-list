import CollapseMenuIcon from "./collapse.png";
import RevealMenuIcon from "./reveal-menu.png";
import HomeIcon from "./home.png";

export default function initHeader() {
    const header = document.createElement("header");
    
    const collapseMenuIcon = new Image();
    collapseMenuIcon.src = CollapseMenuIcon;

    const revealMenuIcon = new Image();
    revealMenuIcon.src = RevealMenuIcon;

    const homeIcon = new Image();
    homeIcon.src = HomeIcon;

    return header;
}