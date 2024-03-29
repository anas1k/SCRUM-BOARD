/**
 * In this file app.js you will find all CRUD functions name.
 *
 */

function createTask() {
    // initialiser task form
    document.getElementById('form').reset();

    // Afficher le boutton save
    document.getElementById('saveTask').style.display = 'block';
    document.getElementById('editTask').style.display = 'none';
    // add class list

    // Ouvrir modal form
    $('#taskModal').modal('show');
}

// declaring validation inputs and spans
let Title = document.getElementById('TitleInput'),
    Description = document.getElementById('DescriptionInput'),
    TitleSpan = document.getElementById('ValidateTilte'),
    DescriptionSpan = document.getElementById('ValidateDescription');

// event listener for saveValidation
$('#saveTask').on('click', function (ee) {
    if (Title.value == '' || !/^[a-z A-Z]{5,}$/.test(Title.value)) {
        ee.preventDefault();

        Description.setAttribute('style', 'color:black; border: 1px #ced4da solid ;');
        DescriptionSpan.innerText = '';

        Title.setAttribute('style', 'color:red; border: 1px red solid ;');
        TitleSpan.innerText = 'Veuillez entrer un nom valide ! verifiez que le nom contient au minimum 5 caractéres et sans caractéres speciaux!!';
        TitleSpan.setAttribute('style', 'color:red;font-size:10px;');
    } else if (Description.value == '' || !/^[a-z A-Z.:,]{5,}$/.test(Description.value)) {
        ee.preventDefault();

        Title.setAttribute('style', 'color:black; border: 1px #ced4da solid ;');
        TitleSpan.innerText = '';

        Description.setAttribute('style', 'color:red; border: 1px red solid ;');
        DescriptionSpan.innerText = 'Veuillez entrer une description valide ! verifiez que la description contient au minimum 5 caractéres!!';
        DescriptionSpan.setAttribute('style', 'color:red;font-size:10px;');
    }
});

// event listener for updateValidation
$('#updateTask').on('click', function (ee) {
    if (Title.value == '' || !/^[a-z A-Z]{5,}$/.test(Title.value)) {
        ee.preventDefault();

        Description.setAttribute('style', 'color:black; border: 1px #ced4da solid ;');
        DescriptionSpan.innerText = '';

        Title.setAttribute('style', 'color:red; border: 1px red solid ;');
        TitleSpan.innerText = 'Veuillez entrer un nom valide ! verifiez que le nom contient au minimum 5 caractéres et sans caractéres speciaux!!';
        TitleSpan.setAttribute('style', 'color:red;font-size:10px;');
    } else if (Description.value == '' || !/^[a-z A-Z.:,/]{5,}$/.test(Description.value)) {
        ee.preventDefault();

        Title.setAttribute('style', 'color:black; border: 1px #ced4da solid ;');
        TitleSpan.innerText = '';

        Description.setAttribute('style', 'color:red; border: 1px red solid ;');
        DescriptionSpan.innerText = 'Veuillez entrer un nom valide ! verifiez que le nom contient au minimum 5 caractéres!!';
        DescriptionSpan.setAttribute('style', 'color:red;font-size:10px;');
    }
});

function saveTask() {
    // getting inputs from form / Recuperer task attributes a partir les champs input
    /* let taskTitle = document.getElementById('taskTitle').value,
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
        }; */
    // add task to tasks data / Ajoutez object au Array
    /* tasks.push(task); */
    // empty inputs
    /* document.getElementById("form").reset(); */
    /* $("#taskModal").modal("hide"); */
    // refresh tasks
    /* reloadTasks(); */
}

function getTask(element, id) {
    // Save Button show
    document.getElementById('saveTask').style.display = 'none';
    document.getElementById('editTask').style.display = 'block';

    // resets previous validation
    /*  Title.setAttribute("style", "");
    Description.setAttribute("style", "");
    DescriptionSpan.innerText = "";
    TitleSpan.innerText = "";
 */

    // Initialisez task form
    $('#taskModal').modal('show');

    //Getting info already printed by PHP thats clicked on and printing it to the same modal used by addTask
    document.getElementById('TitleInput').value = document.querySelector(`#taskTitle${id}`).innerText;

    if (document.querySelector(`#taskType${id}`).innerText == 'Bug') {
        document.getElementById('bug').checked = true;
    } else {
        document.getElementById('feature').checked = true;
    }

    document.getElementById('StatusInput').value = document.querySelector(`#taskStatus${id}`).innerText;

    if (document.querySelector(`#taskPriority${id}`).innerText == 'Low') {
        document.getElementById('PriorityInput').value = 1;
    } else if (document.querySelector(`#taskPriority${id}`).innerText == 'Medium') {
        document.getElementById('PriorityInput').value = 2;
    } else if (document.querySelector(`#taskPriority${id}`).innerText == 'High') {
        document.getElementById('PriorityInput').value = 3;
    } else {
        document.getElementById('PriorityInput').value = 4;
    }

    document.getElementById('DateInput').value = document.querySelector(`#DateTaskForm${id}`).innerText;
    document.getElementById('DescriptionInput').value = document.querySelector(`#taskDescription${id}`).innerText;
    document.getElementById('IdInput').value = id;

    // Delete action confirmation using SweetAlert2 combined with Ajax
    $('#deleteValidation').click(function (e) {
        // prevent Reload of page
        e.preventDefault();

        // SweetAlert2 pop up
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            // after confirmation is succesfull
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
                // using ajax to send data withut refresh
                $.ajax({
                    url: 'scripts.php',
                    type: 'POST',
                    data: { deleteTaskFrom: id },
                    dataType: 'html',
                    success: function () {
                        // modifiers for task counters to subtract without refresh
                        if (element.querySelector(`#taskStatus${id}`).innerText == 1) {
                            document.getElementById('to-do-tasks-count').innerText = parseInt(document.getElementById('to-do-tasks-count').innerText) - 1;
                        } else if (element.querySelector(`#taskStatus${id}`).innerText == 2) {
                            document.getElementById('in-progress-tasks-count').innerText = parseInt(document.getElementById('in-progress-tasks-count').innerText) - 1;
                        } else {
                            document.getElementById('done-tasks-count').innerText = parseInt(document.getElementById('done-tasks-count').innerText) - 1;
                        }

                        // removing the deleted element from DOM
                        element.remove();
                        // hiding the modal after the confirmation
                        $('#taskModal').modal('hide');
                    },
                });
            }
        });
    });

    // Affichez updates
    /*  document.getElementById("taskTitle").value = tasks[index].title;
    if (tasks[index].type == "Bug") {
        document.getElementById("bug").checked = true
    } else {
        document.getElementById("feature").checked = true
    }
    document.getElementById("taskPriority").value = tasks[index].priority;
    document.getElementById("taskStatus").value = tasks[index].status;
    document.getElementById("taskDate").value = tasks[index].date;
    document.getElementById("taskDescription").value = tasks[index].description; */

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete
    /* document.getElementById("id").value = index; */
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS
    /* let taskTitle = document.getElementById('taskTitle').value,
        taskPriority = document.getElementById('taskPriority').value,
        taskStatus = document.getElementById('taskStatus').value,
        taskDate = document.getElementById('taskDate').value,
        taskDescription = document.getElementById('taskDescription').value;
    let taskType = document.querySelector('input[name="taskType"]:checked').value;*/
    // créez task object
    /* let task = {
        title: taskTitle,
        type: taskType,
        priority: taskPriority,
        status: taskStatus,
        date: taskDate,
        description: taskDescription,
    }; */
    // Remplacer ancienne task par nouvelle task
    /* let index = document.getElementById("id").value;
    tasks[index]=task; */
    // Fermer Modal form
    /* $("#taskModal").modal("hide"); */
    // Refresh tasks
    /* reloadTasks(); */
}

function deleteTask() {
    // Get index of task in the array
    /* let index = document.getElementById("id").value; */
    // Remove task from array by index splice function
    /* tasks.splice(index, 1); */
    // close modal form
    /* $("#taskModal").modal("hide"); */
    // refresh tasks
    /* reloadTasks(); */
}

function initTaskForm() {
    // Clear task form from data
    // Hide all action buttons
}

function reloadTasks() {
    // empty tasks boxs
    /* document.querySelector("#toDo-tasks").innerHTML = "";
    document.querySelector("#inProgress-tasks").innerHTML = "";
    document.querySelector("#done-tasks").innerHTML = ""; */
    // declaring task containers
    /* let toDo = document.querySelector("#toDo-tasks"),
        inProgress = document.querySelector("#inProgress-tasks"),
        done = document.querySelector("#done-tasks"); */
    // diplay all tasks available in data file
    /* let i = 0, toDoCount = 0, inProgressCount = 0, doneCount = 0;
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
                            #${i+1} created in ${task.date}
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
                            #${i+1} created in ${task.date}
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
                            #${i+1} created in ${task.date}  
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
}); */
    // Set Task count
    /* document.getElementById("to-do-tasks-count").innerText = toDoCount;
    document.getElementById("in-progress-tasks-count").innerText = inProgressCount;
    document.getElementById("done-tasks-count").innerText = doneCount; */
}
