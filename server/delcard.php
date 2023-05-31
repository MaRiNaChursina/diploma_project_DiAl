<?php
header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents("php://input"));
$id= $data->id;
$dsn = "mysql:localhost;port=3306;dbname=primer";
  
    
    if ($id){
        $pdo = new PDO($dsn, 'root', ''); 
        $sql = "DELETE FROM `CardOurWork` WHERE `Id`=:id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        
    }

?>