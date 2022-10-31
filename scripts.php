<?php

    //INCLUDE DATABASE FILE
    include('database.php');

    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['addTaskForm'])){    

        // Getting new data from inputs of form 
        $title = $_POST['titleInput'];
        $type = $_POST['typeInput'];
        $priority = $_POST['priorityInput'];
        $status = $_POST['statusInput'];
        $date = $_POST['dateInput'];
        $description = $_POST['descriptionInput'];

        // Passing parameters to function
        saveTask($title, $type, $priority, $status, $date, $description);

    }

    if(isset($_POST['updateTaskForm'])){

        // Getting new data from inputs of form 
        $id = $_POST['idInput'];
        $title = $_POST['titleInput'];
        $type = $_POST['typeInput'];
        $priority = $_POST['priorityInput'];
        $status = $_POST['statusInput'];
        $date = $_POST['dateInput'];
        $description = $_POST['descriptionInput'];
        
        // Passing parameters to function
        updateTask($id, $title, $type, $priority, $status, $date, $description);
    }
    
    if(isset($_POST['deleteTaskFrom'])){

        // Getting id of task for deletion
        $id = $_POST['idInput'];

        // redirecting back to Home page
        deleteTask($id);
    }
    

    // CRUD Functions
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

        // passing SQL with Connection function to DataBase
        $result = connect() -> query($sql);

        // SESSION message of conformation 
        $_SESSION['message'] = "Fetch all tasks";

        // returning results of Query to display in Home page
        return $result;

    }
    
    function saveTask($title, $type, $priority, $status, $date, $description)
    {
        //CODE HERE
        //SQL INSERT
        $sql = "INSERT INTO tasks(title, type_id, priority_id, status_id, task_datetime, description) 
            VALUES('$title','$type','$priority','$status','$date', '$description');";
        
        // passing SQL with Connection function to DataBase
        connect() -> query($sql);

        // SESSION message of conformation 
        $_SESSION['message'] = "Task has been added successfully !";

        // redirecting back to Home page
		header('location: index.php');

    }

    function updateTask($id, $title, $type, $priority, $status, $date, $description)
    {
        //CODE HERE
        //SQL UPDATE
        $sql= "UPDATE tasks SET title = '$title', type_id = '$type', priority_id = '$priority', 
            status_id = '$status', task_datetime = '$date', description = '$description' WHERE id = '$id';";

        // passing SQL with Connection function to DataBase
        connect() -> query($sql);

        // SESSION message of conformation 
        $_SESSION['message'] = "Task has been updated successfully !";

        // redirecting back to Home page
		header('location: index.php');
        
    }

    function deleteTask($id)
    {
        //CODE HERE
        //SQL DELETE
        $sql="DELETE FROM tasks WHERE id='$id'";

        // passing SQL with Connection function to DataBase
        connect() -> query($sql);

        // SESSION message of conformation 
        $_SESSION['message'] = "Task has been deleted successfully !";

        // redirecting back to Home page
		header('location: index.php');

    }

?>