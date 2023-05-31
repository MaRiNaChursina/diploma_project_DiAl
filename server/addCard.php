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
    $imgCard = $data -> imgCard;
    $catalog = $data->catalog;
    $box_option = $data->box_option;
    $title = $data->title;
    $catalogName=$data->catalogName;
    $price=$data->price;
    $img="imges/products/$imgCard";
    $arr=[ ];
    $i=0;
    $j=0;
    $dsn = "mysql:localhost;port=3306;dbname=primer";
    if ($price){
        $pdo = new PDO($dsn, 'root', ''); 
        $sql = "INSERT INTO `CardOurWork`( `imgCard`, `title`, `price`,
         `catalogName`, `length`, `form_kitchen`, `shape_of_the_upper_drawers`, 
         `methods_of_opening_the_facade`, `facades`, `table_top`, `catalog`,
          `wall_panel`, `loops`, `boxes`, `box_option`) VALUES (
        :imgCard, :title, :price, :catalogName,:length, :form_kitchen,
        :shape_of_the_upper_drawers, :methods_of_opening_the_facade,
        :facades, :table_top, :catalog, :wall_panel,
        :loops, :boxes, :box_option)";
         $stmt = $pdo->prepare($sql);
         $stmt->execute([
            'imgCard' => $img,
            'title' => $title,
            'price' => $price,
            'catalogName' => $catalogName,
            'length' => $length,
            'form_kitchen' => $form_kitchen,
            'shape_of_the_upper_drawers' => $shape_of_the_upper_drawers,
            'methods_of_opening_the_facade' => $methods_of_opening_the_facade,
            'facades' => $facades,
            'table_top' => $table_top,
            'catalog' => $catalog,
            'wall_panel' => $wall_panel,
            'loops' => $loops,
            'boxes' => $boxes,
            'box_option' => $box_option
        ]);
    }
    
        
   
    


?>