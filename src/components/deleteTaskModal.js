function deleteTaskModal(taskId) {
    const deleteTaskModal = document.createElement("div");
    deleteTaskModal.setAttribute("id", "delete-task-modal");
    deleteTaskModal.classList.add("modal");

    return deleteTaskModal;
};

export { deleteTaskModal };