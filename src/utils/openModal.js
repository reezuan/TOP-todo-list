function openModal(modal) {
    const overlay = document.querySelector(".overlay");

    if (modal == null) {
        return;
    } else {
        modal.classList.add("active");
        overlay.classList.add("active");
    }
}

export { openModal };