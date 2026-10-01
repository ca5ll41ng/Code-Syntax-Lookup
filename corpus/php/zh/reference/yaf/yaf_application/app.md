---
id: "zh-php-function-yaf-application-app"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::app"
title: "检索 Application 实例"
signature: "public static Yaf_Application|null Yaf_Application::app()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.app.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索 Application 实例

## 说明

```php
public static Yaf_Application|null Yaf_Application::app()
```

检索 `Yaf_Application` 实例。 也可以使用 `Yaf_Dispatcher::getApplication()`。

## 参数

此函数没有参数。

## 返回值

返回 `Yaf_Application` 实例， 如果还没有初始化过应用则返回 `null`。

## 示例

**`Yaf_Application::app()` 示例**

```php


<?php
/* index.php, the application entry */
$config = new Yaf_Config_Ini(__DIR__ . "/conf/application.ini", "product");
$application = new Yaf_Application($config);
$application->bootstrap()->run();
?>

   
```

**在其它地方获取应用实例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        /* Yaf_Application::app() is an alias of getInstance() */
        $app = Yaf_Application::app();

        var_dump($app->environ());
        var_dump(Yaf_Application::getInstance() === $app);

        return false;
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(7) "product"
bool(true)

   
```

## 参见

`Yaf_Dispatcher::getApplication()`
