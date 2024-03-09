function closeModal(modal) {
    const overlay = document.querySelector(".overlay.active");
    
    if (modal == null) {
        return;
    } else {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
}

export { closeModal };