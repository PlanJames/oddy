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

// Comprobar si el email ya existe
$checkStmt = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
$checkStmt->bind_param("s", $email);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();
if ($checkResult && $checkResult->num_rows > 0) {
  echo json_encode(["status" => "error", "message" => "Ese email ya está registrado."]);
  $checkStmt->close();
  exit;
}
$checkStmt->close();

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insertar nuevo usuario
$stmt = $conn->prepare("INSERT INTO usuarios (negocio, encargado, telefono, email, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $negocio, $encargado, $telefono, $email, $hashedPassword);

if ($stmt->execute()) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
