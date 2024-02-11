import { ToDoItem } from "./ToDoItem.js";
import { ToDoList } from "./ToDoList.js";

const allLists = [];
const testList = new ToDoList("This is a test list");
const testList2 = new ToDoList("This is the 2nd test list");
let testItemToDelete;
allLists.push(testList);
allLists.push(testList2);
console.log(allLists);

// Delete later
const documentBody = document.querySelector("body");
const datePicker = document.createElement("input");
const toDoItemCreator = document.createElement("button");
const toDoItemDeleter = document.createElement("button");

datePicker.setAttribute("type", "datetime-local");
documentBody.appendChild(datePicker);

datePicker.addEventListener("input", () => {
    console.log(datePicker.value);
});

toDoItemCreator.addEventListener("click", () => {
    const testItem = new ToDoItem("test item", "this is a test item", datePicker.value, "veli high");
    testItemToDelete = testItem;

    testList.addToDoItem(testItem);
    testList2.addToDoItem(testItem);
    console.log(allLists);
});

toDoItemDeleter.addEventListener("click", () => {
    testItemToDelete.deleteToDoItem(allLists);

    console.log(allLists);
});

toDoItemCreator.textContent = "Make a to-do object!!!!";
toDoItemDeleter.textContent = "Delete the test item!!!";
documentBody.appendChild(toDoItemCreator);
documentBody.appendChild(toDoItemDeleter);
// Delete later