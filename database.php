<?php
    
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
    $dotenv -> load();
/*     $dotenv -> required([DB_SERVERNAME, DB_USERNAME, DB_USERPASSWORD, DB_DATABASE]);
 */ 
    
    function connect(){

        //CONNECT TO MYSQL DATABASE USING MYSQLI
        $serv = getenv('DB_SERVERNAME');
        $user = getenv('DB_USERNAME');
        $password = getenv('DB_SERVERPASSWORD');
        $DB = getenv('DB_DATABASE');

        $con = new mysqli($serv , $user , $password , $DB);
        
        if(!$con){
            die("Prb de connection :". $con -> connect_err);
        }

        return $con;
    }
?>