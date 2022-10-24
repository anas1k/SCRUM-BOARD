<?php
    include 'cnx.php';
    
    function updateTask($id, $titre, $type, $priority, $status, $date, $description){

        $sql = "UPDATE tasks set titre = ?, type = ?, priority = ?, status = ?, date = ?, description = ? WHERE id = ?";
        $stmt = $this -> connect() -> prepare($sql);
        $stmt -> execute([$titre, $type, $priority, $status, $date, $description, $id]);

        return 1;
    }