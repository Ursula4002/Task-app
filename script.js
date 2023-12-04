
const addTaskButton = document.getElementById("addTaskButton");
const task = document.getElementById("task");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = task.value;
    if (inputValue.length) {
        let newInputvalue = inputValue.replace(/\s+/g, " ");

        taskList.innerHTML += `<li>${newInputvalue.trim()}</li> `;
    }

});


const deleteButton = document.getElementById("deleteButton");
function deleteTask() {
    // const deleteButtonText = document.createTextNode("x");
    // deleteButton.appendChild(deleteButtonText);

    const deleteButton = document.createElement("button");
    const deleteButtonText = ("x");
    deleteButton.appendChild(deleteButtonText);
    taskList.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });
}

