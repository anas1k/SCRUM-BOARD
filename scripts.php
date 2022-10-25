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
        $sql = "SELECT t.id as idTask,
            ts.title as titleTask,
            ts.type_id as typeTask,
            ts.priority_id as priorityTask,
            ts.status_id as statusTask,
            ts.task_datetime as dateTask,
            ts.description as descriptionTask
            ty.name as nameType,
            st.name as nameStatus,
            pr.name as namePriority
            FROM tasks ts, types ty, statuses st, priorities pr
            WHERE ty.id = typeTask 
            AND st.id = statusTask
            AND pr.id = priorityTask";
        $result = connect() -> query($sql);
        
        return $result;
        echo "Fetch all tasks";
    }


    function saveTask()
    {
        //CODE HERE
        //SQL INSERT
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