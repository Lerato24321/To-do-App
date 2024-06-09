const enterTask = document.getElementById("input-area");
const taskList = document.getElementById("task-list");

function createTask() {
  if (enterTask.value === "") {
    alert("Task cannot be blank ☹️ !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = enterTask.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = " \u00d7";
    li.appendChild(span);
  }
  enterTask.value = "";
  saveTask();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("marked");
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);


function saveTask() {
  localStorage.setItem ("data", taskList.innerHTML);
}
function displayTask() {
  taskList.innerHTML = localStorage.getItem ("data");
}
displayTask();