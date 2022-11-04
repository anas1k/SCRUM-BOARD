<?php
    //include file where functions are defined
    include ('scripts.php');
    include('controller.php');
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>YouCode | Scrum Board</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />

        <!-- ================== BEGIN core-css ================== -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link href="assets/css/vendor.min.css" rel="stylesheet" />
        <link href="assets/css/default/app.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />

        <!-- ================== END core-css ================== -->
    </head>
    <body>
        <!-- BEGIN #app -->
        <div id="app" class="app-without-sidebar">
            <!-- BEGIN #content -->
            <div id="content" class="app-content main-style">
                <div class="nav justify-content-between align-items-center">
                    <div>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="javascript:;">Home</a>
                            </li>
                            <li class="breadcrumb-item text-secondary">Scrum Board</li>
                        </ol>
                        <!-- BEGIN page-header -->
                        <h1 class="page-header">Scrum Board</h1>
                        <!-- END page-header -->
                    </div>

                    <div class="text-end button">
                        <a class="btn rounded-pill btn-primary" onclick="createTask()" >
                            <i class="fa fa-plus fa-lg"></i>
                            Add Task
                        </a>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 mb-3 col-md-6">
                        <div class="card">
                            <div class="card-header bg-dark">
                                <h4 class="text-white pt-2">To do (<span id="to-do-tasks-count"><?php echo $toDoCount; ?></span>)</h4>
                            </div>
                            <div class="list-group list-group-flush" id="toDo-tasks">
                                <!-- TO DO TASKS HERE -->
                                <?php foreach ($allTasks as $tasks) { 
                                        if($tasks['nameStatus'] === "To Do"){
                                ?>
                                <button class="d-flex list-group-item w-100 py-2 px-1" onclick="getTask(this , '<?php echo $tasks['idTask']; ?>')" >
                                    <div class="m-3">
                                        <i class="fa-lg fa-regular fa-circle-question green"></i>
                                    </div>
                                    <div class="text-start mb-1">
                                        <div class="fw-bold fs-5" id="taskTitle<?= $tasks['idTask'] ?>" ><?php echo $tasks['titleTask']; ?></div>
                                        <div class="description-max-width">
                                            <div class="fw-light text-secondary" >#<?php echo $allTasksCount++ ." created in "?><span id="DateTaskForm<?= $tasks['idTask']; ?>"><?=$tasks['dateTask']; ?></span></div>
                                            <div class="text-truncate mb-1" id="taskDescription<?= $tasks['idTask'] ?>" ><?php echo $tasks['descriptionTask']; ?></div>
                                        </div>
                                        
                                            <span class=" badge bg-primary even-larger-badge" id="taskPriority<?= $tasks['idTask'] ?>" ><?php echo $tasks['namePriority']; ?></span>
                                            <span class="badge bg-secondary-100 even-larger-badge text-black" id="taskType<?= $tasks['idTask'] ?>"> <?php echo $tasks['nameType']; ?></span>
                                            <span style="display:none" id="taskStatus<?php echo $tasks['idTask']; ?>" ><?php echo $tasks['statusTask']; ?></span>
                                        
                                    </div>
                                </button>
                                <?php   } 
                                    } ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3 col-md-6">
                        <div class="card">
                            <div class="card-header bg-dark">
                                <h4 class="text-white pt-2">In Progress (<span id="in-progress-tasks-count"><?php echo $inProgressCount; ?></span>)</h4>
                            </div>
                            <div class="list-group list-group-flush" id="inProgress-tasks">
                                <!-- IN PROGRESS TASKS HERE -->
                                <?php foreach ($allTasks as $tasks) { 
                                    if($tasks['nameStatus'] === "In Progress"){?>
                                <button id="inProgress-box" class="d-flex list-group-item w-100 py-2 px-1" onclick="getTask(this , '<?php echo $tasks['idTask']; ?>')">
                                    <div class="m-3 rotate">
                                        <i class="fa-lg fa-solid fa-circle-notch green"></i>
                                    </div>
                                    <div class="text-start mb-1">
                                        <div class="fw-bold fs-5" id="taskTitle<?= $tasks['idTask'] ?>" ><?php echo $tasks['titleTask']; ?></div>
                                        <div class="description-max-width">
                                            <div class="fw-light text-secondary" >#<?php echo $allTasksCount++ ." created in "?><span id="DateTaskForm<?= $tasks['idTask']; ?>"><?=$tasks['dateTask']; ?></span></div>
                                            <div class="text-truncate mb-1" id="taskDescription<?= $tasks['idTask'] ?>"><?php echo $tasks['descriptionTask']; ?></div>
                                        </div>
                                        <span class="badge bg-primary even-larger-badge" id="taskPriority<?= $tasks['idTask'] ?>"><?php echo $tasks['namePriority']; ?></span>
                                        <span class="badge bg-secondary-100 even-larger-badge text-black" id="taskType<?= $tasks['idTask'] ?>"><?php echo $tasks['nameType']; ?></span>
                                        <span style="display:none" id="taskStatus<?php echo $tasks['idTask']; ?>" ><?php echo $tasks['statusTask']; ?></span>
                                    </div>
                                </button>
                                <?php   } 
                                    } ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3 col-md-6">
                        <div class="card">
                            <div class="card-header bg-dark">
                                <h4 class="text-white pt-2">Done (<span id="done-tasks-count"><?php echo $doneCount; ?></span>)</h4>
                            </div>
                            <div class="list-group list-group-flush" id="done-tasks">
                                <!-- DONE TASKS HERE -->
                                <?php foreach ($allTasks as $tasks) { 
                                        if($tasks['nameStatus'] === "Done"){
                                ?>
                                <button class="d-flex list-group-item w-100 py-2 px-1" onclick="getTask(this , '<?php echo $tasks['idTask']; ?>')">
                                    <div class="m-3">
                                        <i class="fa-lg fa-regular fa-circle-check green"></i>
                                    </div>
                                    <div class="text-start mb-1">
                                        <div class="fw-bold fs-5 text-break" id="taskTitle<?= $tasks['idTask']; ?>" ><?php echo $tasks['titleTask']; ?></div>
                                        <div class="description-max-width">
                                            <div class="fw-light text-secondary" >
                                                #<?php echo $allTasksCount++ ." created in ";?><span id="DateTaskForm<?= $tasks['idTask']; ?>"><?=$tasks['dateTask']; ?></span></div>
                                            <div class="text-truncate mb-1" id="taskDescription<?= $tasks['idTask']; ?>"><?php echo $tasks['descriptionTask']; ?></div>
                                        </div>
                                        <span class="badge bg-primary even-larger-badge" id="taskPriority<?= $tasks['idTask']; ?>"><?php echo $tasks['namePriority']; ?></span>
                                        <span class="badge bg-secondary-100 even-larger-badge text-black" id="taskType<?= $tasks['idTask']; ?>"><?php echo $tasks['nameType']; ?></span>
                                        <span style="display:none;" id="taskStatus<?php echo $tasks['idTask']; ?>" ><?php echo $tasks['statusTask']; ?></span>
                                    </div>
                                </button>
                                <?php   } 
                                    } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END #content -->

            <!-- BEGIN scroll-top-btn -->
            <a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i class="fa fa-angle-up"></i></a>
            <!-- END scroll-top-btn -->
        </div>
        <!-- END #app -->

        <!-- TASK MODAL -->
        <div class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog mt-3 mb-1">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-0 pb-1">
                        <form id="form" method="post">
                            <div class="mb-0">
                                <label for="taskTitle" class="col-form-label">Title</label>
                                <input type="text" class="form-control" id="TitleInput" name="titleInput" /> <!--  pattern="[A-Za-z]{3}"  -->
                                <div id="ValidateTilte"></div>
                            </div>
                            <div class="mb-0">
                                <label for="taskType" class="col-form-label">Type</label>
                                <div class="form-check py-2 mx-3">
                                    <input class="form-check-input" type="radio" id="feature" name="typeInput" value="2" checked/>
                                    <label for="Feature" class="form-check-label">Feature</label>
                                </div>
                                <div class="form-check py-2 mx-3">
                                    <input class="form-check-input" type="radio" id="bug" name="typeInput" value="1" />
                                    <label for="Bug" class="form-check-label">Bug</label>
                                </div>
                            </div>
                            <div class="mb-0">
                                <label for="taskPriority" class="col-form-label">Priority</label>
                                <select class="form-select" id="PriorityInput" name="priorityInput" required>
                                    <option value selected disabled>Please select</option>
                                    <option value="4">Critical</option>
                                    <option value="3">High</option>
                                    <option value="2">Medium</option>
                                    <option value="1">Low</option>
                                </select>
                            </div>
                            <div class="mb-0">
                                <label for="taskStatus" class="col-form-label">Status</label>
                                <select class="form-select" id="StatusInput" name="statusInput" required>
                                    <option value selected disabled>Please select</option>
                                    <option value="1">To Do</option>
                                    <option value="2">In Progress</option>
                                    <option value="3">Done</option>
                                </select>
                            </div>
                            <input style="display: none" id="IdInput" name="idInput" />
                            <div class="mb-0">
                                <label for="taskDate" class="col-form-label">Date</label>
                                <input class="form-control" type="date" required id="DateInput" name="dateInput" />
                            </div>
                            <div class="mb-0">
                                <label for="taskDate" class="col-form-label">Description</label>
                                <textarea class="form-control" id="DescriptionInput" required rows="8" name="descriptionInput"></textarea>
                                <span id="ValidateDescription"></span>
                            </div>
                            <div class="modal-footer">
                                <button type="reset" class="btn btn-outline-dark text-black" data-bs-dismiss="modal">Cancel</button>
                                <button id="saveTask" type="submit" name="addTaskForm"  class="btn btn-primary">Save</button>
                                <div id="editTask" style="display: none">
                                    <button type="submit" id="deleteValidation" name="deleteTaskFrom" class="btn btn-danger text-black">Delete</button>
                                    <button id="updateTask" type="submit" name="updateTaskForm" class="btn btn-warning text-black">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal content goes here -->

        <!-- ================== BEGIN core-js ================== -->
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app.min.js"></script>
        <script src="assets/js/data.js"></script>
        <script src="assets/js/app.js"></script>
        <!-- ================== END core-js ================== -->

        <!-- JavaScript Code Start -->

        <script>
            // to reload tasks everytime the page reloads with JavaScript
           /*  reloadTasks(); */
           
            <?php if (isset($_SESSION['message'])) { 
                ?>
                const Toast = Swal.mixin({
                    width: '25em',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: false,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: '<?=$_SESSION['message']; ?>'
                })
            <?php
                    //session_unset('message');
                    unset($_SESSION['message']);
                    
                } ?>
                
        </script>

        <!-- JavaScript Code End -->
    </body>
</html>
