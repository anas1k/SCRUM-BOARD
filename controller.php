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

    
?>