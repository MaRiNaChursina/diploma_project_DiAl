<?php
header("Access-Control-Allow-Origin: *");
$data = json_decode(file_get_contents("php://input"));
$name= $data->first_name;
$phone = $data->phone;
$date=$data->date;
$token = "6280199795:AAFDXBFQ8xLFkRTp8Qxu_AtNqegLbRGGQGg";
$chat_id = "-933318655";
$arr = array(
  'Имя пользователя: ' => $name,
  'Номер телефона:' => $phone
);
$dsn = "mysql:localhost;port=3306;dbname=primer";
  
    
    if ($name){
        $pdo = new PDO($dsn, 'root', ''); 
        $sql = "INSERT INTO `newOrder2`( `date`,`name`, `phone`) VALUES ( :date, :name, :phone)";
        $stmt = $pdo->prepare($sql);
        echo("Ваша заявка принята в обработку!<br> Ожидайте в ближайшее время звонок от нас!");
        $stmt->execute([
        'date' => $date,
        'name' => $name,
        'phone' => $phone,
        ]);
        foreach($arr as $key => $value) {
          $txt .= "<b>".$key."</b> ".$value."%0A";
        };

        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    }

?>