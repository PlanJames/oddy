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

$nombre = trim($data->nombre);
$email = trim($data->email);
$password = password_hash($data->password, PASSWORD_DEFAULT);

// check si el email ya existe
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

$stmt = $conn->prepare("INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $email, $password);

if ($stmt->execute()) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "error", "message" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
