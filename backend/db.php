<?php
$host = "localhost";
$user = "u178953291_oddy_user";
$password = "_#Joselencinaa0612#_";
$database = "u178953291_oddy_db";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}
?>
