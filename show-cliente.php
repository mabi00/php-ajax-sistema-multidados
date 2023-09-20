<?php
include ('data-request.php');
$param = $_POST['param'];

if($param === ''){
    $getInfo = new DataRequest();
    $resultado = $getInfo->dadosClientes();
    echo json_encode($resultado);
}