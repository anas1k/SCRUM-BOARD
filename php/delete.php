<?php
    include 'cnx.php';
    function deleteTask($id){
        $sql = "DELETE FROM tasks WHERE id = $id";
        $stmt = $this -> connect() -> prepare($sql);
        $stmt -> execute();

        return 1;
    }