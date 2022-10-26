<?php
    // Read from DataBase
    $allTasks = getTasks();

    // Tasks To Do counter 
    $toDoCount = 0; 
    foreach($allTasks as $task){
        if($task['nameStatus'] == "To Do"){
            $toDoCount++;
        }
    }

    // Tasks In Progress counter 
    $inProgressCount = 0; 
    foreach($allTasks as $task){
        if($task['nameStatus'] == "In Progress"){
            $inProgressCount++;
        }
    }
    
    // Tasks Done counter 
    $doneCount = 0; 
    foreach($allTasks as $task){
        if($task['nameStatus'] == "Done"){
            $doneCount++;
        }
    }

    // Tasks Counter 
    $allTasksCount = 1;

    // Add Task into DataBase 
    if(isset($_POST['addTaskForm'])){

        $title = $_POST['taskTitle'];
        $type = $_POST['taskType'];
        $priority = $_POST['taskPriority'];
        $status = $_POST['taskStatus'];
        $date = $_POST['taskDate'];
        $description = $_POST['taskDescription'];

        $result = saveTask($title, $type, $priority, $status, $date, $description);
        if($result === '1'){
            header('Location: index.php');
        }
    }