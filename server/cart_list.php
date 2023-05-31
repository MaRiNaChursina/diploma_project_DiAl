<?php
    header("Access-Control-Allow-Origin: *");

 
    $arr=[
        
    ];
    $i=0;
    $j=0;
    $dsn = "mysql:localhost;port=3306;dbname=primer";
    
    
        $pdo = new PDO($dsn, 'root', ''); 
        $sql = "SELECT  `Id`,`date`, `name`, `phone` FROM `newOrder2` ";
        $stmt = $pdo->query($sql);
       
    $stmt->setFetchMode(PDO::FETCH_OBJ);
 
    
    while($row = $stmt->fetch()) { 
        $arr[$i]=["Id"=>$row->Id,"date"=>$row->date,
        "name"=>$row->name,"phone"=>$row->phone];
      
        $i++;
        $json = json_encode($arr);
        
    }echo $json;
    
//  

?>