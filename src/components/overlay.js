import { closeModal } from "../utils/closeModal.js";

function overlay() {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.addEventListener("click", () => {
        const modals = document.querySelectorAll(".modal.active");
        modals.forEach(modal => {
            closeModal(modal);
        });
    });
    
    return overlay;
}

export { overlay };