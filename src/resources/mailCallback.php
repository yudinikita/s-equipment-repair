<?php

$name = $_POST['user_nameCallback'];
$tel = $_POST['user_telCallback'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urlencode($name);
$tel = urlencode($tel);

$name = trim($name);
$tel = trim($tel);

if (mail("nikitayudin782@gmail.com",
     "Pest Reject",
     "Имя: ".$name."\n".
     "Телефон ".$tel,
     "From: mail@bytovoi-remont.ru \r\n")
){
     echo "Ваша заявка отправлена! Наш мастер перезвонит в течение 15 минут. Ожидайте звонка.";
}

else {
     echo ("Ошибка отправки! Попробуйте перезагрузить страницу.");
}
