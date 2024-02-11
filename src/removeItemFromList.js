const removeItemFromList = {
    removeItemFromList(toDoItem) {
        let itemIndex = this.toDoItems.findIndex(item => item.id == toDoItem.id);

        if (itemIndex != -1) {
            this.toDoItems.splice(itemIndex, 1);
        };
    }
}

export { removeItemFromList };