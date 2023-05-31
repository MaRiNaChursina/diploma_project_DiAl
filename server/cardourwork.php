<?php
    header("Access-Control-Allow-Origin: *");
   
    $length= 1; 
    $arr=[
        
    ];
    $i=0;
    $j=0;
    $dsn = "mysql:localhost;port=3306;dbname=primer";
    
    
        $pdo = new PDO($dsn, 'root', ''); 
        $sql = "SELECT `Id`, `imgCard`, `title`, `price`, `catalogName`,
         `length`, `form_kitchen`, `shape_of_the_upper_drawers`, 
         `methods_of_opening_the_facade`, `facades`, `table_top`, 
         `catalog`, `wall_panel`, `loops`, `boxes`, `box_option` 
         FROM `CardOurWork` ";
        $stmt = $pdo->query($sql);
       
    $stmt->setFetchMode(PDO::FETCH_OBJ);
    
    while($row = $stmt->fetch()) { 
        $arr[$i]=["Id"=>$row->Id,"imgCard"=>$row->imgCard,
        "title"=>$row->title,"price"=>$row->price,"catalogName"=>$row->catalogName,
        "length"=>$row->length,"form_kitchen"=>$row->form_kitchen,
        "shape_of_the_upper_drawers"=>$row->shape_of_the_upper_drawers,
        "methods_of_opening_the_facade"=>$row->methods_of_opening_the_facade,
        "facades"=>$row->facades,"table_top"=>$row->table_top,
        "catalog"=>$row->catalog,"wall_panel"=>$row->wall_panel,
        "loops"=>$row->loops,
        "boxes"=>$row->boxes,"box_option"=>$row->box_option];
        $i++;
        $json = json_encode($arr);
        
    }echo $json;
    


?>