<?php
echo '<pre>';
var_dump($_POST);
echo '<pre>';
if(isset($_POST)) {
    echo 'Получен Post-запрос идентификатор - '.$_POST['baseid'];
}
?>