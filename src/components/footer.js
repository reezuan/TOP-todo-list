import { GitHubLogo } from "../assets/index.js";

function footer() {
    const footer = document.createElement("footer");

    const profileLink = document.createElement("a");
    profileLink.setAttribute("href", "https://github.com/reezuan");
    profileLink.setAttribute("target", "_blank");
    profileLink.setAttribute("rel", "noopener noreferrer");

    const profileName = document.createElement("p");
    profileName.textContent = "Made by reezuan";
    profileLink.appendChild(profileName);
    
    const gitHubLogo = new Image();
    gitHubLogo.src = GitHubLogo;
    gitHubLogo.setAttribute("alt", "Github logo");
    profileLink.appendChild(gitHubLogo);

    footer.appendChild(profileLink);

    return footer;
}

export { footer };