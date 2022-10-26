<?php

    function connect(){

        //CONNECT TO MYSQL DATABASE USING MYSQLI
        $serv = "localhost";
        $user = "root";
        $password = "";
        $DB = "youcodescrumboard";

        $con = new mysqli($serv , $user , $password , $DB);
        
        if(!$con){
            die("Prb de connection :". $con -> connect_err);
        }

        return $con;
    }
?>