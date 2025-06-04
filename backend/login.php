<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->email, $data->password)) {
  echo json_encode(["status" => "error", "message" => "Faltan datos o JSON malformado"]);
  exit;
}

$email = trim($data->email);
$password = $data->password;

$stmt = $conn->prepare("SELECT nombre, password FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result && $result->num_rows === 1) {
  $user = $result->fetch_assoc();
  if (password_verify($password, $user['password'])) {
    echo json_encode(["status" => "success", "nombre" => $user['nombre']]);
  } else {
    echo json_encode(["status" => "error", "message" => "Contraseña incorrecta"]);
  }
} else {
  echo json_encode(["status" => "error", "message" => "Usuario no encontrado"]);
}

$stmt->close();
$conn->close();
?>