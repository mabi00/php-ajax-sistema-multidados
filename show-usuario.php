<?php
include ('data-request.php');
$param = $_POST['param'];

if($param === ''){
    $getInfo = new DataRequest();
    $resultado = $getInfo->dadosUsuarios();
    echo json_encode($resultado);
}