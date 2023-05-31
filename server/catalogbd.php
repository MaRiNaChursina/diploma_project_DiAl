<?php
    header("Access-Control-Allow-Origin: *");
   
 
    $arr=[
        
    ];
    $i=0;
    $j=0;
    $dsn = "mysql:localhost;port=3306;dbname=primer";
    
    
        $pdo = new PDO($dsn, 'root', ''); 
        $sql = "SELECT `Id`, `imgCard`, `catalogName` FROM `Catalog` ";
        $stmt = $pdo->query($sql);
       
    $stmt->setFetchMode(PDO::FETCH_OBJ);
    
    while($row = $stmt->fetch()) { 
        $arr[$i]=["Id"=>$row->Id,"imgCard"=>$row->imgCard,
        "catalogName"=>$row->catalogName];
        $i++;
        $json = json_encode($arr);
        
    }echo $json;
    


?>