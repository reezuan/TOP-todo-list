let allTasks = [];

function saveTaskToStorage(Task) {
    console.log(allTasks);
    allTasks.push(Task);
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
};

export { saveTaskToStorage };