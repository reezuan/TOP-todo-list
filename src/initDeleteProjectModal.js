import closeModal from "./closeModal.js";
import initNavSidebar from "./initNavSidebar.js";

export default function initDeleteProjectModal(Project) {
    if (document.querySelector("#delete-project-modal") != null) { // Test if modal already exists.
        document.querySelector("#delete-project-modal").remove();
    };
    
    // "Delete Project" modal
    const deleteProjectModal = document.createElement("div");
    deleteProjectModal.setAttribute("id", "delete-project-modal");
    deleteProjectModal.classList.add("modal");

    // Modal text
    const modalText = document.createElement("p");
    modalText.innerHTML = `Are you sure you want to delete <b>${Project.title}</b>?`;
    deleteProjectModal.appendChild(modalText);

    // "Cancel" button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    deleteProjectModal.appendChild(cancelButton);

    cancelButton.addEventListener("click", () => {
        closeModal(cancelButton.closest(".modal"));
    });

    // "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteProjectModal.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        const body = document.querySelector("body");
        closeModal(deleteButton.closest(".modal"));
        Project.delete();
        body.appendChild(initNavSidebar());
    });

    return deleteProjectModal;
}