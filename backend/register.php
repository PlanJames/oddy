<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->nombre, $data->email, $data->password)) {
  echo json_encode(["status" => "error", "message" => "Faltan datos o JSON malformado"]);
  exit;
}

$nombre = $conn->real_escape_string($data->nombre);
$email = $conn->real_escape_string($data->email);
$password = password_hash($data->password, PASSWORD_DEFAULT);

// check si el email ya existe
$check = $conn->query("SELECT id FROM usuarios WHERE email = '$email'");
if ($check && $check->num_rows > 0) {
  echo json_encode(["status" => "error", "message" => "Ese email ya está registrado."]);
  exit;
}

$sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$password')";

if ($conn->query($sql)) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
