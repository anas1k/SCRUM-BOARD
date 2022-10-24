<?php

include 'cnx.php';

function getTasks(){

    $req = "Select * from tasks";
    $stmt = $this -> connect() -> prepare($req);
    $stmt -> execute();
    $result = $stmt -> fetchAll();

    return $result;
}