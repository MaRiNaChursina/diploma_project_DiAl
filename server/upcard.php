<?php
    header("Access-Control-Allow-Origin: *");
    $data = json_decode(file_get_contents("php://input"));

    $length= $data->length;
    $form_kitchen = $data->form_kitchen;
    $shape_of_the_upper_drawers = $data->shape_of_the_upper_drawers;
    $methods_of_opening_the_facade = $data->methods_of_opening_the_facade;
    $facades = $data->facades;
    $table_top = $data->table_top;
    $wall_panel = $data->wall_panel;
    $loops = $data->loops;
    $boxes = $data->boxes;

    $catalog = $data->catalog;
    $box_option = $data->box_option;
    $title = $data->title;
    $catalogName=$data->catalogName;
    $price=$data->price;
    $id=$data->id;
    
    $arr=[
        
    ];
    $i=0;
    $j=0;
    $dsn = "mysql:localhost;port=3306;dbname=primer";
    
    
        $pdo = new PDO($dsn, 'root', ''); 
        $sql = "UPDATE `CardOurWork` SET 
        `title`= '$title',`price`= '$price',`catalogName`='$catalogName',
        `length`='$length',`form_kitchen`='$form_kitchen',
        `shape_of_the_upper_drawers`='$shape_of_the_upper_drawers',
        `methods_of_opening_the_facade`='$methods_of_opening_the_facade',
        `facades`='$facades',
        `table_top`='$table_top',`catalog`='$catalog',`wall_panel`='$wall_panel',
        `loops`='$loops',`boxes`='$boxes',`box_option`='$box_option'
         WHERE `Id`= '$id' ";
        $stmt = $pdo->query($sql);
       
    // $stmt->setFetchMode(PDO::FETCH_OBJ);
    
    // $stmt->execute([
    //     'title' => $title,
    //     'price' => $price,
    //     'catalogName' => $catalogName,
    //     'length' => $length,
    //     'form_kitchen' => $form_kitchen,
    //     'shape_of_the_upper_drawers' => $shape_of_the_upper_drawers,
    //     'methods_of_opening_the_facade' => $methods_of_opening_the_facade,
    //     'facades' => $facades,
    //     'table_top' => $table_top,
    //     'catalog' => $catalog,
    //     'wall_panel' => $wall_panel,
    //     'loops' => $loops,
    //     'boxes' => $boxes,
    //     'box_option' => $box_option,
    //     'Id' => $id
    // ]);
        
    echo ("Запрос принят!");
    


?>