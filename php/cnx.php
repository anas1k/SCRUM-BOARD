<?php 
function connect(){
    $serv = "localhost";
    $user = "root";
    $password = "";
    $DB = "youcodescrumboard";

    $con = new mysqli($serv , $user , $password , $DB);
    try {
        return $con;
    }
    catch (Exception $e){
        die ("Prb de connection" . $con -> connect_err);
    }
}