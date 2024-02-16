const removeTaskFromProject = {
    removeTask(Task) {
        let itemIndex = this.tasks.findIndex(item => item.id == Task.id);

        if (itemIndex != -1) {
            this.tasks.splice(itemIndex, 1);
        };
    }
}

export { removeTaskFromProject };