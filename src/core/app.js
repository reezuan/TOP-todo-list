import { header } from "../components/header.js";
import { navSidebar } from "../components/navSidebar.js";
import { mainContent } from "../components/mainContent.js";
import { footer } from "../components/footer.js";
import { overlay } from "../components/overlay.js";
import { addProjectModal } from "../components/addProjectModal.js";
import { initProjectsStorage } from "../services/initProjectsStorage.js";
import { initTasksStorage } from "../services/initTasksStorage.js";
import "./style.css";

(function() {
    const body = document.querySelector("body");
    
    initTasksStorage();
    initProjectsStorage();

    body.appendChild(header());
    body.appendChild(navSidebar());
    body.appendChild(mainContent());
    body.appendChild(footer());
    body.appendChild(overlay());
    body.appendChild(addProjectModal());
})();