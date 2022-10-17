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

    var from =document.querySelector("#from");
    form.addEventListener('submit', (e) => {
        // stop reload of from
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

    document.querySelector("#toDo-tasks").innerHTML = "";
    document.querySelector("#inProgress-tasks").innerHTML = "";
    document.querySelector("#done-tasks").innerHTML = "";
    

    allTasks.forEach(task) => {
        

    }

    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}