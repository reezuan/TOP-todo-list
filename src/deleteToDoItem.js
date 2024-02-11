const deleteToDoItem = {
    deleteToDoItem(toDoLists) {
        toDoLists.forEach(toDoList => {
            let itemIndex = toDoList.toDoItems.findIndex(item => item.id == this.id);

            if (itemIndex != -1) {
                toDoList.toDoItems.splice(itemIndex, 1);
            };
        });
    }
};

export { deleteToDoItem };