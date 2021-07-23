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
$title = "Заявка • Частные мастера";
$fontstyle = "font-size: 20px";
$text = "<b>Имя: </b>".$name."<br/>".
        "<b>Телефон: </b>".$tel."<br/>".
        "<b>Бренд: </b>".$select."<br/>".
        "<b>Сообщение: </b>".$msg."<br/>".
        $fontstyle;
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
