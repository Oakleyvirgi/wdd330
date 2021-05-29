import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

//Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    //Add listeners
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    });

    const clearItems = document.getElementById("clearItems");
    clearItems.addEventListener("click", (event) => {
        const list = toDoList.getList();
        if (list.length) {
            const confirmed = confirm("Are you sure you want to clear the entire list?");
            if (confirmed) {
                toDoList.clearList();
                updatePersistentData(toDoList.getList());
                refreshThePage();
            }
        }
    });

    // Procedural
    loadListObject();
    refreshThePage();
};

const loadListObject = () => {
    const storedList = localStorage.getItem("myToDoList");
    if (typeof storedList !== "string") return;
    const parsedList = JSON.parse(storedList);
    parsedList.forEach(itemObj => {
        const newToDoItem = createNewItem(itemObj._id, itemObj._item, itemObj._check)
        toDoList.addItemToList(newToDoItem);
    });
};

const refreshThePage = () => {
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
};

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
};

const renderList = (filter = 'all') => {
    const list = toDoList.getList();
    //If filter is all, no filter is done
    //If the filter is active, filter check = false
    //If the filter is completed, filter check = true
    let newRender = [];
    if (filter === "all") {
        newRender = list;
    } 
    else if (filter === 'active'){
        console.log("active");
        newRender = list.filter((item) =>  !item._check) ;
    }
    else if (filter === "complete") {
        console.log("complete");
        newRender = list.filter((item) => (item._check));
    }
    
    //if (filter === 'active') {
    //newRender = list.filter((item) => ); //filter
    //console.log(list);    } //else if (filter === 'left'){
    //one more filter    } //else {
    //console.newRender = list;    }

    const container = document.getElementById("listItems");
    container.innerHTML = "";
    newRender.forEach((item) => {
        buildListItem(item);
    });
};


const buildListItem = (item) => {
    const div = document.createElement("div");
    div.className = "item";
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = item.getCheck();
    check.id = item.getId();
    check.tabIndex = 0;
    addClickListenerToCheckbox(check);
    const label = document.createElement("label");
    label.htmlFor = item.getId();
    label.textContent = item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    //container.innerHTML = "";
    container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox) => {
    checkbox.addEventListener("click", (event) => {
        //toDoList.removeItemFromList(checkbox.id);
        toDoList.checkToDo(checkbox.id);
        updatePersistentData(toDoList.getList());
        // const removedText = getLabelText(checkbox.id);
        //updateScreenReaderConfirmation(removedText, "removed from list");
        //setTimeout(() => {
        //refreshThePage();
        //}, 1000);
    });
};

const getLabelText = (checkboxId) => {
    return document.getElementById(checkboxId).nextElementSibling.textContent;
};

const updatePersistentData = (listArray) => {
    localStorage.setItem("myToDoList", JSON.stringify(listArray));
};

const clearItemEntryField = () => {
    document.getElementById("newItem").value = "";
};

const setFocusOnItemEntry = () => {
    document.getElementById("newItem").focus();
};

const processSubmission = () => {
    const newEntryText = getNewEntry();
    if (!newEntryText.length) return;
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.addItemToList(toDoItem);
    updatePersistentData(toDoList.getList());
    //updateScreenReaderConfirmation(newEntryText, "added");
    refreshThePage();
};

const getNewEntry = () => {
    return document.getElementById("newItem").value.trim();
};

const calcNextItemId = () => {
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nextItemId = list[list.length - 1].getId() + 1;
    }
    return nextItemId;
};

const createNewItem = (itemId, itemText) => {
    const toDo = new ToDoItem();
    toDo.setId(itemId);
    toDo.setItem(itemText);
    return toDo;
};



/*const updateScreenReaderConfirmation = (newEntryText, actionVerb) => {
    document.getElementById("confirmation").textContent = `${newEntryText} ${actionVerb}.`;
};*/

//working on filter
const all = document.getElementById("all");

const left = document.getElementById("left");

const active = document.getElementById("active");

const completed = document.getElementById("completed");

all.addEventListener("click", () => {
    //Call render function and send a parameter
    renderList('all');
    //Telling the render function, what to render
});

active.addEventListener("click", () => {
    console.log("click");
    //Call render function and send a parameter
    renderList('active');
    //Telling the render function, what to render
});


completed.addEventListener("click", () => {
    //Call render function and send a parameter
    renderList('complete');
    //Telling the render function, what to render
});

/*filterList (all, left, active, completed); {
    toDoList.filter(filterCallback)
    .foreach(filterTodo =>
        appendChild(filterTodo, ToDoList))
};
*/