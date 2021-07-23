<?php header("Content-Type: text/html; charset=utf-8");

$name = $_POST['user_name'];
$tel = $_POST['user_tel'];
$select = $_POST['user_select'];
$msg = $_POST['user_message'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$select = htmlspecialchars($select);
$msg  = htmlspecialchars($msg);

$name = trim($name);
$tel = trim($tel);
$select = trim($select);
$msg = trim($msg);


$to = "nikitayudin782@gmail.com";
$title = "Частные мастера";
$text = "Имя: ".$name."\r\n"."Телефон: ".$tel."\r\n"."Бренд: ".$select."\r\n"."Сообщение: ".$msg."\r\n";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8";
$headers .= "From: Частные мастера <mail@bytovoi-remont.ru>\r\n";

if (mail($to, $title, $text, $headers)) {
  header("Location: https://bytovoi-remont.ru/spasibo.html");
  exit;
}
else {
   echo ("Ошибка отправки! Попробуйте перезагрузить страницу.");
}
?>
