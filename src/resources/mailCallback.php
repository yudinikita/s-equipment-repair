<?php header("Content-Type: text/html; charset=utf-8");

$name = $_POST['user_nameCallback'];
$tel = $_POST['user_telCallback'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = trim($name);
$tel = trim($tel);


$to = "nikitayudin782@gmail.com";
$title = "Частные мастера";
$text = "Имя: ".$name."\r\n"."Телефон: ".$tel;
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8";
$headers .= "From: Частные мастера <mail@bytovoi-remont.ru>\r\n";

mail($to, $title, $text, $headers)
?>
