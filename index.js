const taskArray = [
    // { nameOfTask: "fetch water", taskDescription: "from the well" },
    // { nameOfTask: "cook food", taskDescription: "Try cook rice" },
    // { nameOfTask: "cook meat", taskDescription: "Make it spicy" },
  ];
  
  window.addEventListener("DOMContentLoaded", (event) => {
    const taskName = document.getElementById("task-name");
    const taskDescription = document.getElementById("task-description");
    const addButton = document.getElementById("add-todo");
    const listContainer = document.getElementById("lists");
  
    const addTodo = () => {
      if (taskName.value === "" || taskDescription.value === "") {
        alert("Please fill in all fields!");
        return;
      }
  
      const newTask = {
        nameOfTask: taskName.value,
        taskDescription: taskDescription.value,
      };
  
      taskArray.push(newTask);
      taskName.value = "";
      taskDescription.value = "";
      displayTodo();
    };
  
    const deleteTodo = (index) => {
      taskArray.splice(index, 1);
      displayTodo();
    };
  
    const editTodo = (index) => {
      const taskInfoDiv = document.createElement("div");
      const updatedNameInput = document.createElement("input");
      const updatedDescriptionInput = document.createElement("input");
      const saveBtn = document.createElement("button");
  
      updatedNameInput.value = taskArray[index].nameOfTask;
      updatedDescriptionInput.value = taskArray[index].taskDescription;
  
      const inputStyle = "width: 150px; margin-left: 5px; margin-right: 5px;";
      updatedNameInput.setAttribute("style", inputStyle);
      updatedDescriptionInput.setAttribute("style", inputStyle);
  
      saveBtn.textContent = "Save";
      saveBtn.className = "save";
      saveBtn.addEventListener("click", () => saveEdit(index, updatedNameInput.value, updatedDescriptionInput.value));
  
      taskInfoDiv.appendChild(updatedNameInput);
      taskInfoDiv.appendChild(updatedDescriptionInput);
      taskInfoDiv.appendChild(saveBtn);
  
      listContainer.replaceChild(taskInfoDiv, listContainer.childNodes[index]);
    };
  
    const saveEdit = (index, updatedName, updatedDescription) => {
      taskArray[index].nameOfTask = updatedName;
      taskArray[index].taskDescription = updatedDescription;
      displayTodo();
    };
  
    const displayTodo = () => {
      listContainer.innerHTML = "";
      taskArray.forEach((task, index) => {
        const itemDiv = document.createElement("div");
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");
  
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.addEventListener("click", () => editTodo(index));
  
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", () => deleteTodo(index));
  
        itemDiv.setAttribute("class", "item");
        li.setAttribute("class", "todo-item");
  
        const taskInfo = document.createElement("div");
        taskInfo.className = "task-info";
        taskInfo.innerHTML = `${task.nameOfTask} : ${task.taskDescription}`;
  
        itemDiv.appendChild(taskInfo);
        itemDiv.appendChild(editBtn);
        itemDiv.appendChild(deleteBtn);
        listContainer.appendChild(itemDiv);
      });
    };
  
    addButton.addEventListener("click", addTodo);
    displayTodo();
  });
  