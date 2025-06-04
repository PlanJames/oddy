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

$email = $conn->real_escape_string($data->email);
$password = $data->password;

$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
  $user = $result->fetch_assoc();
  if (password_verify($password, $user['password'])) {
    echo json_encode(["status" => "success", "nombre" => $user['nombre']]);
  } else {
    echo json_encode(["status" => "error", "message" => "Contraseña incorrecta"]);
  }
} else {
  echo json_encode(["status" => "error", "message" => "Usuario no encontrado"]);
}

$conn->close();
?>
