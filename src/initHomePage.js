import { GlobalToDoList } from "./GlobalToDoList.js";
import { ToDoList } from "./ToDoList.js";
import { ToDoItem } from "./ToDoItem.js";
import initHeader from "./initHeader.js";
import initNavSidebar from "./initNavSidebar.js";
import initContent from "./initContent.js";
import initFooter from "./initFooter.js";

function initHomePage() {
    const body = document.querySelector("body");

    body.appendChild(initHeader());
    body.appendChild(initNavSidebar());
    body.appendChild(initContent());
    body.appendChild(initFooter());

    // ---------------------------------------

    const globalToDoList = new GlobalToDoList("All tasks");

    const testList = new ToDoList("This is a test list");
    const testList2 = new ToDoList("This is the 2nd test list");

    const testItem1 = new ToDoItem("Test item 1", "This is a test item 1", new Date(), "HIGH SIAL");

    testList.addItemToList(testItem1);
    testItem1.associateList(testList);

    testList2.addItemToList(testItem1);
    testItem1.associateList(testList2);

    console.log(globalToDoList);
    console.log(testList);
    console.log(testList2);
    console.log(testItem1);
};

export { initHomePage };