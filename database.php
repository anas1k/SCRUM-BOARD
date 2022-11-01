<?php
    
    require 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__); // if u get variables by getenv('xx'); then use ::createUnsafeImmutable(__DIR__) instead 
    $dotenv -> load();
    
    function connect(){

        //CONNECT TO MYSQL DATABASE USING MYSQLI
        $serv = $_ENV['DB_SERVERNAME'];
        $user = $_ENV['DB_USERNAME'];
        $password = $_ENV['DB_USERPASSWORD'];
        $DB = $_ENV['DB_DATABASE'];

        $con = new mysqli($serv , $user , $password , $DB);
        
        if(!$con){
            die("Prb de connection :". $con -> connect_err);
        }

        return $con;
    }
?>