<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
  echo json_encode(["status" => "error", "message" => "No se recibió información."]);
  exit;
}

$negocio = $conn->real_escape_string($data->negocio ?? '');
$encargado = $conn->real_escape_string($data->encargado ?? '');
$telefono = $conn->real_escape_string($data->telefono ?? '');
$email = $conn->real_escape_string($data->email ?? '');
$password = $data->password ?? '';

// Validaciones mínimas
if (!$email || !$password || !$negocio || !$encargado) {
  echo json_encode(["status" => "error", "message" => "Faltan datos obligatorios."]);
  exit;
}

// Validación de seguridad de contraseña
if (
  strlen($password) < 8 ||
  !preg_match('/[A-Z]/', $password) ||
  !preg_match('/[a-z]/', $password) ||
  !preg_match('/[0-9]/', $password)
) {
  echo json_encode([
    "status" => "error",
    "message" => "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
  ]);
  exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);


$sql = "INSERT INTO usuarios (negocio, encargado, telefono, email, password)
        VALUES ('$negocio', '$encargado', '$telefono', '$email', '$hashedPassword')";

if ($conn->query($sql)) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>
