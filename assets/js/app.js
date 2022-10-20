/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */


function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    
}
saveTask()
function saveTask() {
    // creating eventListener for form
    let form = document.querySelector("#form");
    form.addEventListener('submit', (e) => {

        // stop reload of form
        e.preventDefault();

        // getting inputs from form // Recuperer task attributes a partir les champs input
        let taskTitle = document.getElementById('taskTitle').value;
        let taskType = document.querySelector('input[name="taskType"]:checked').value;
        let taskPriority = document.getElementById('taskPriority').value;
        let taskStatus = document.getElementById('taskStatus').value;
        let taskDate = document.getElementById('taskDate').value;
        let taskDescription = document.getElementById('taskDescription').value;
        // créez task object
        let task = {
            title: taskTitle,
            type: taskType,
            priority: taskPriority,
            status: taskStatus,
            date: taskDate,
            description: taskDescription,
        };
        // afficher object dans 
        console.log(task);

        // add task to tasks data // Ajoutez object au Array
        tasks.push(task);

        // empty inputs
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDate").value = "";
        document.getElementById("taskDescription").value = "";

        // refresh tasks
        reloadTasks();
    });
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
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
            onclick="update(${i})"
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
            onclick="update(${i})"
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
            onclick="update(${i})"
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
    console.log(tasks);
    // Remove tasks elements

    // Set Task count
    document.getElementById("to-do-tasks-count").innerText = toDoCount;
    document.getElementById("in-progress-tasks-count").innerText = inProgressCount;
    document.getElementById("done-tasks-count").innerText = doneCount;
    
}