import initHeader from "./initHeader.js";
import initNavSidebar from "./initNavSidebar.js";
import initContent from "./initContent.js";
import initOverlay from "./initOverlay.js";
import initAddProjectModal from "./initAddProjectModal.js";
import initFooter from "./initFooter.js";

function initHomePage() {
    const body = document.querySelector("body");

    body.appendChild(initHeader());
    body.appendChild(initNavSidebar());
    body.appendChild(initContent());
    body.appendChild(initFooter());
    body.appendChild(initOverlay());
    body.appendChild(initAddProjectModal());
};

export { initHomePage };