<?php

// Инициализируем сессию
session_start();

// Простой способ сделать глобально доступным подключение в БД
function pdo(): PDO
{
    static $pdo;

    if (!$pdo) {
        
        // Подключение к БД
        $dsn = "mysql:localhost;port=3306;dbname=primer";
        $pdo = new PDO($dsn, 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    return $pdo;
}

function flash(?string $message = null)
{
    if ($message) {
        $_SESSION['flash'] = $message;
    } else {
        if (!empty($_SESSION['flash'])) { ?>
          <div class="alert alert-danger mb-3">
              <?=$_SESSION['flash']?>
          </div>
        <?php }
        unset($_SESSION['flash']);
    }
}

function check_auth(): bool
{
    return !!($_SESSION['user_id'] ?? false);
}