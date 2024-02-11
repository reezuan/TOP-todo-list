import ToDoItem from "./ToDoItem.js";
import { ToDoList } from "./ToDoList.js";

const testList = new ToDoList("This is a test list");

// Delete later
const documentBody = document.querySelector("body");
const datePicker = document.createElement("input");
const toDoItemCreator = document.createElement("button");

datePicker.setAttribute("type", "datetime-local");
documentBody.appendChild(datePicker);

datePicker.addEventListener("input", () => {
    console.log(datePicker.value);
});

toDoItemCreator.addEventListener("click", () => {
    const testItem = new ToDoItem("test item", "this is a test item", datePicker.value, "veli high");
    console.log(testItem);

    testList.addToDoItem(testItem);
    console.log(testList);
});

toDoItemCreator.textContent = "Make a to-do object!!!!";
documentBody.appendChild(toDoItemCreator);
// Delete later