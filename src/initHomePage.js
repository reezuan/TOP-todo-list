import initHeader from "./initHeader.js";
import initNavSidebar from "./initNavSidebar.js";
import initContent from "./initContent.js";
import initFooter from "./initFooter.js";

function initHomePage() {
    const body = document.querySelector("body");

    body.appendChild(initHeader());
    body.appendChild(initNavSidebar());
    body.appendChild(initContent());
    body.appendChild(initFooter());
};

export { initHomePage };