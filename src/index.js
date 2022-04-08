const defaultTasks = ["Homework", "Shopping", "Learning CS", "Create a todo list"]


document.addEventListener("DOMContentLoaded", function (event) {
  let taskList = document.getElementById("task-list")

  defaultTasks.forEach(task => {


    const listItem = document.createElement("div")
    listItem.innerHTML = `<li class="list-group-item">
        <div class="form-check d-flex align-items-center justify-content-between">
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
      
            <label class="form-check-label" for="flexCheckDefault"> ${task} </label>
          </div>
          <div class="button-group">
            <button type="button" class="btn btn-warning">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button type="button" class="btn btn-danger px-3">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </li>`

    taskList.appendChild(listItem)
  })
});
