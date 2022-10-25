<?php
    include 'cnx.php';
    
    function addTask($titre, $type, $priority, $status, $date, $description){
        
        

        $sql = "INSERT INTO tasks (titre, type, priority, status, date, description) values(?,?,?,?,?,?)";
        $stmt = $this -> connect() -> prepare($sql);
        $stmt -> execute([$titre, $type, $priority, $status, $date, $description]);

        return 1;
    }