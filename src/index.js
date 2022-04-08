
// Add the LI element from the task-list
function removeTask(event) {
  event.parentNode.parentNode.parentNode.remove();
}

function checkTask (event) {
  // Get the checkbox
  let checkBox = event;
  let textStyle = event.parentElement.children[1].style;
  // If the checkbox is checked, line-through effect
  if (checkBox.checked == true) {
    
    textStyle.textDecoration = "line-through";
  } else {
    textStyle.textDecoration = "";
  }
}



// Adding a Task (li element) to the task-list
function addTask() {
  let taskList = document.getElementById("task-list");

  var li = document.createElement("div");

  li.innerHTML = `<li class="list-group-item">
  <div
    class="form-check d-flex align-items-center justify-content-between"
  >
    <div>
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />

      <label class="form-check-label" for="flexCheckDefault">
        task
      </label>
    </div>

    <div class="button-group">
      <button type="button" class="btn btn-warning">
        <i class="fa-solid fa-pen"></i>
      </button>

      <button
        type="button"
        class="btn btn-danger px-3"
        onclick="removeTask(this)"
      >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
</li>`;

  taskList.appendChild(li);
}

