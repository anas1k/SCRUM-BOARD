/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */


function createTask() {
    // initialiser task form
    document.getElementById("form").reset();
    
    // Afficher le boutton save
    document.getElementById("save").style.display = "block";
    document.getElementById("editTask").style.display = "none";
    
    // Ouvrir modal form
    $("#taskModal").modal("show");
}
function saveTask() {

        // getting inputs from form // Recuperer task attributes a partir les champs input
        let taskTitle = document.getElementById('taskTitle').value,
            taskPriority = document.getElementById('taskPriority').value,
            taskStatus = document.getElementById('taskStatus').value,
            taskDate = document.getElementById('taskDate').value,
            taskDescription = document.getElementById('taskDescription').value;
        let taskType = document.querySelector('input[name="taskType"]:checked').value;
        // créez task object
        let task = {
            title: taskTitle,
            type: taskType,
            priority: taskPriority,
            status: taskStatus,
            date: taskDate,
            description: taskDescription,
        };

        // add task to tasks data // Ajoutez object au Array
        tasks.push(task);

        // empty inputs
        document.getElementById("form").reset();
        $("#taskModal").modal("hide");

        // refresh tasks
        reloadTasks();

}

function getTask(index) {

    // Save Button show 
    document.getElementById("save").style.display = "none";
    document.getElementById("editTask").style.display = "block";

    // Initialisez task form
    $("#taskModal").modal("show");
    // Affichez updates
    document.getElementById("taskTitle").value = tasks[index].title;
    if (tasks[index].type == "Bug") {
        document.getElementById("bug").checked = true
    } else {
        document.getElementById("feature").checked = true
    }
    // document.querySelector('input[name="typeType"]:checked').value = tasks[index].type;
    document.getElementById("taskPriority").value = tasks[index].priority;
    document.getElementById("taskStatus").value = tasks[index].status;
    document.getElementById("taskDate").value = tasks[index].date;
    document.getElementById("taskDescription").value = tasks[index].description;
    document.getElementById("id").value = index;

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS
    let taskTitle = document.getElementById('taskTitle').value,
        taskPriority = document.getElementById('taskPriority').value,
        taskStatus = document.getElementById('taskStatus').value,
        taskDate = document.getElementById('taskDate').value,
        taskDescription = document.getElementById('taskDescription').value;
    let taskType = document.querySelector('input[name="taskType"]:checked').value;
    // créez task object
    let task = {
        title: taskTitle,
        type: taskType,
        priority: taskPriority,
        status: taskStatus,
        date: taskDate,
        description: taskDescription,
    };
    // Remplacer ancienne task par nouvelle task
    let index = document.getElementById("id").value;
    tasks[index]=task;
    // Fermer Modal form
    $("#taskModal").modal("hide");
    // Refresh tasks
    reloadTasks();
}

function deleteTask() {
    // Get index of task in the array
    let index = document.getElementById("id").value;
    // Remove task from array by index splice function
    tasks.splice(index, 1);
    // close modal form
    $("#taskModal").modal("hide");
    // refresh tasks
    reloadTasks();
}



function initTaskForm() {

    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {

    // empty tasks boxs 
    document.querySelector("#toDo-tasks").innerHTML = "";
    document.querySelector("#inProgress-tasks").innerHTML = "";
    document.querySelector("#done-tasks").innerHTML = "";
    
    // declaring task containers
    let toDo = document.querySelector("#toDo-tasks"),
        inProgress = document.querySelector("#inProgress-tasks"),
        done = document.querySelector("#done-tasks");

    // diplay all tasks available in data file 
    let i = 0, toDoCount = 0, inProgressCount = 0, doneCount = 0;
    tasks.forEach((task) =>{
        if(task.status === "To Do"){
            toDoCount ++;
            toDo.innerHTML +=
            `<button
            onclick="getTask(${i})"
                class="d-flex list-group-item w-100 pb-2 py-2 px-1">
                <div class="m-3">
                    <i
                        class="fa-lg fa-regular fa-circle-question green"></i>
                </div>
                <div class="text-start">
                    <div class="fw-bolder" >
                        ${task.title}
                    </div>
                    <div class="description-max-width">
                        <div
                            class="fw-light text-secondary">
                            ${task.date}
                        </div>
                        <div
                            class="text-truncate fw-light">
                            ${task.description}
                        </div>
                    </div>
                    <div class="button">
                        <span
                            class="btn btn-primary px-1 py-0">
                            ${task.priority}
                            </span>
                        <span
                            class="btn btn-gray-300 text-black px-1 py-0"
                            >${task.type}</span>
                    </div>
                </div>
            </button>`
        }
         else if (task.status === "In Progress"){
            inProgressCount++;
            inProgress.innerHTML +=
            `<button
            onclick="getTask(${i})"
                class="d-flex list-group-item w-100 pb-2 py-2 px-1">
                <div class="m-3 rotate">
                    <i
                        class="fa-lg fa-solid fa-circle-notch green"></i>
                </div>
                <div class="text-start">
                    <div class="fw-bolder" >
                        ${task.title}
                    </div>
                    <div class="description-max-width">
                        <div
                            class="fw-light text-secondary">
                            ${task.date}
                        </div>
                        <div
                            class="text-truncate fw-light">
                            ${task.description}
                        </div>
                    </div>
                    <div class="button">
                        <span
                            class="btn btn-primary px-1 py-0"
                            >
                            ${task.priority}
                            </span
                        >
                        <span
                            class="btn btn-gray-300 text-black px-1 py-0"
                            >${task.type}</span
                        >
                    </div>
                </div>
            </button>`
            }
         else if (task.status === "Done"){
            doneCount++;
            done.innerHTML +=
            `<button
            onclick="getTask(${i})"
                class="d-flex list-group-item w-100 pb-2 py-2 px-1">
                <div class="m-3">
                    <i
                        class="fa-lg fa-regular fa-circle-question green green"></i>
                </div>
                <div class="text-start">
                    <div class="fw-bolder" >
                        ${task.title}
                    </div>
                    <div class="description-max-width">
                        <div
                            class="fw-light text-secondary">
                            ${task.date}
                        </div>
                        <div
                            class="text-truncate fw-light">
                            ${task.description}
                        </div>
                    </div>
                    <div class="button">
                        <span
                            class="btn btn-primary px-1 py-0"
                            >
                            ${task.priority}
                            </span
                        >
                        <span
                            class="btn btn-gray-300 text-black px-1 py-0"
                            >${task.type}</span
                        >
                    </div>
                </div>
            </button>`
            }
    i++;
});
    // Set Task count
    document.getElementById("to-do-tasks-count").innerText = toDoCount;
    document.getElementById("in-progress-tasks-count").innerText = inProgressCount;
    document.getElementById("done-tasks-count").innerText = doneCount;
    
}