

function createTask() {


  if (enterTask.value === '') {
    alert("Task cannot be blank ☹️");
  } else {
    let li = document.createElement("li");
    li.innerHTML = enterTask.value;
    taskList.appendChild(li);
  }


}





const enterTask = document.getElementById("input-area");
const taskList = document.getElementById("task-list");






