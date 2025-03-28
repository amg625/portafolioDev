<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
// Cargar variables de entorno desde un archivo .env
require_once 'config.php';

// Obtener datos del formulario
$nombre = $_POST['name'] ?? '';
$correo = $_POST['email'] ?? '';
$mensaje = $_POST['message'] ?? '';

// Validar que los campos no estén vacíos
if (empty($nombre) || empty($correo) || empty($mensaje)) {
    die("Todos los campos son obligatorios.");
}

// Conectar a la base de datos
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Parte de logs
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else {
    echo "Conexión exitosa.<br>";
}

echo "Nombre: " . $_POST['name'] . "<br>";
echo "Correo: " . $_POST['email'] . "<br>";
echo "Mensaje: " . $_POST['message'] . "<br>";

echo "Preparando consulta: INSERT INTO Contacts (nombre, correo, mensaje) VALUES (?, ?, ?)";




// Insertar datos en la base de datos
$stmt = $conn->prepare("INSERT INTO Contacts (nombre, correo, mensaje) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $correo, $mensaje);

if ($stmt->execute()) {
    echo "Datos guardados correctamente.";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar conexión
$stmt->close();
$conn->close();
?>
