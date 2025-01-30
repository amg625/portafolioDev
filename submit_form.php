<?php
// Conexión a la base de datos (cambia estos valores por los correctos)
$host = 'database-1.cly4e6w4e99l.us-east-2.rds.amazonaws.com';
$user = 'admin';
$password = 'Tlahuetequi270523sqldb';
$dbname = 'Contacts';

// Crea la conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtiene los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Inserta los datos en la base de datos
$sql = "INSERT INTO ContactsDev (nombre, correo, mensaje) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cierra la conexión
$conn->close();
?>