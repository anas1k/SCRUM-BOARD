<?php

    //INCLUDE DATABASE FILE
    include('database.php');

    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    
    function getTasks()
    {
        //CODE HERE
        //SQL SELECT
        $sql = "SELECT ts.id as idTask,
            ts.title as titleTask,
            ts.type_id as typeTask,
            ts.priority_id as priorityTask,
            ts.status_id as statusTask,
            ts.task_datetime as dateTask,
            ts.description as descriptionTask,
            ty.name as nameType,
            st.name as nameStatus,
            pr.name as namePriority
            FROM tasks ts, types ty, statuses st, priorities pr
            WHERE ty.id = ts.type_id
            AND pr.id = ts.priority_id
            AND st.id = ts.status_id;";
        $result = connect() -> query($sql);

        $_SESSION['message'] = "Fetch all tasks";
        return $result;
    }


    function saveTask($title, $type, $priority, $status, $date, $description)
    {
        //CODE HERE
        //SQL INSERT
        $sql = "INSERT INTO tasks(title, type_id, priority_id, status_id, task_datetime, description) 
            VALUES('$title','$type','$priority','$status','$date', '$description');";

        connect() -> query($sql);
        return 1;
        $_SESSION['message'] = "Task has been added successfully !";
		header('location: index.php');
    }

    function updateTask()
    {
        //CODE HERE
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>