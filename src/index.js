import ToDoItem from "./ToDoItem.js";
import { ToDoList } from "./ToDoList.js";

const testItem = new ToDoItem("test item", "this is a test item", "tomorrow", "veli high");
const testList = new ToDoList("This is a test list");

testList.addToDoItem(testItem);
console.log(testList);