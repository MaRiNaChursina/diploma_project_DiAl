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
$price_category = $data->price_category;
$catalog = $data->catalog;
$box_option = $data->box_option;
$raschet = $data->raschet;
$token = "6280199795:AAFDXBFQ8xLFkRTp8Qxu_AtNqegLbRGGQGg";//данный тг бота
$chat_id = "-933318655";//данные чата
$length=$length;
if ($shape_of_the_upper_drawers == "1") {$shape_of_the_upper_drawers="Прямые";}
else {$shape_of_the_upper_drawers="С антрисолями";}
$met= match ($methods_of_opening_the_facade)
{
  "170"=>"Ручка",
  "300"=>"От нажатия",
  "500"=>"Интегрированая ручка",
  "501"=>"Ручка Gola",
};
$fac= match ($facades)
{
  "3500"=>"Пленка ПВХ",
  "4500"=>"Бумажно слоистый пластик",
  "5600"=>"Краска",
  "10000"=>"Натуральный шпон",
  "15000"=>"Массив дерева",
};
$table= match ($table_top)
{
  "1"=>"Бумажно слоистый пластик",
  "2"=>"Исскуствинный камень",
  "3"=>"HPL плита",
  "4"=>"Кварцевый агломерат",
};
if ($wall_panel=="1"){$wall_panel="Есть";}else{$wall_panel="Нет";}
$loo= match ($loops)
{
  "90"=>"С доводчиком",
  "35"=>"Без доводчика",
  "350"=>"BLUM",

};
$box=match ($boxes)
{
  "1"=>"С телескопами",
  "2"=>"С направляющими скрытого монтажа",
  "3"=>"С металличискими бокавинами",

};
$box2=match ($box_option)
{
  "650"=>"с доводчиками",
  "500"=>"без доводчиков",
  "950"=>"полного выдвижения",
  "850"=>"частичного выдвижения",
  "3500"=>"Bouard",
  "6700"=>"BLUM",

};
$price= match ($price_category)
{
  "2333"=>"1",
  "3000"=>"2",
  "4334"=>"3",
  "4667"=>"4",
};


$arr = array(
  'Форма кухни: ' => $form_kitchen,
  'Длина общей протяжоности в метрах:' => $length,
  'Форма верхних ящиков:' => $shape_of_the_upper_drawers,
  'Способ открывания фасадов:' => $met,
  'Фасады:' => $fac,
  'Столещница:' => $table,
  'Ценновая категория:' => $price,
  'Варинт столещницы с каталога:' => $catalog,
  'Стенновая панель:' => $wall_panel,
  'Петли:' => $loo,
  'Ящики:' => $box,
  'Вариант механизма:' => $box2,
  'Примерный расчет:' => $raschet,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>