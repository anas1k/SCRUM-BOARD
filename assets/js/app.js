/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

var allTasks =[];

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    
}

function saveTask() {

    var form =document.querySelector("#from");
    form.addEventListener('submit', (e) => {

        // stop reload of form
        e.preventDefault();

        // getting inputs from form 
        var taskTitle = document.getElementById('taskTitle').value;
        var taskType = document.getElementById('taskType').value;
        var taskPriority = document.getElementById('taskPriority').value;
        var taskStatus = document.getElementById('taskStatus').value;
        var taskDate = document.getElementById('taskDate').value;
        var taskDescription = document.getElementById('taskDescription').value;
        var task = {
            title: taskTitle,
            type: taskType,
            priority: taskPriority,
            status: taskStatus,
            date: taskDate,
            description: taskDescription,
        };

        // add task to Array allTasks
        allTasks.push(task);

        // empty inputs
        taskTitle.value = "";
        taskType.value = "";
        taskPriority.value = "";
        taskStatus.value = "";
        taskDate.value = "";
        taskDescription.value = "";

        initTaskForm();

    });

    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
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
    document.querySelector("#toDo-tasks").innerHTML = "";
    document.querySelector("#inProgress-tasks").innerHTML = "";
    document.querySelector("#done-tasks").innerHTML = "";
    
    let toDo = document.querySelector("#toDo-tasks"),
        inProgress = document.querySelector("#inProgress-tasks"),
        done = document.querySelector("#done-tasks");

    tasks.forEach((task) =>{
        if(task.status ==="To Do"){
            toDo.innerHTML +=
            `<button
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
         else if (task.status ==="In Progress"){
            inProgress.innerHTML +=
            `<button
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
         else if (task.status ==="Done"){
            done.innerHTML +=
            `<button
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
        
    });
        /* title.innerText = task.title;
            date.innerText = task.date;
            priority.innerText = task.priority;
            type.innerText = task.type;
            description.innerHTML = task.description;
           /*  toDoTasks.innerHTML += toDoBox.innerHTML; */

    // Remove tasks elements

    // Set Task count
}