import closeModal from "./closeModal.js";

export default function initOverlay() {
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