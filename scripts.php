<?php

    //INCLUDE DATABASE FILE
    include('database.php');

    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    
    getTasks();
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
            AND st.id = ts.priority_id
            AND pr.id = ts.status_id;";
        $result = connect() -> query($sql);
        
        echo "Fetch all tasks";
        return $result;
        
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