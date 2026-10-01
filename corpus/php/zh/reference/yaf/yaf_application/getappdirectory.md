---
id: "zh-php-function-yaf-application-getappdirectory"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::getAppDirectory"
title: "获取应用的目录"
signature: "public string|null Yaf_Application::getAppDirectory()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.getappdirectory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取应用的目录

## 说明

```php
public string|null Yaf_Application::getAppDirectory()
```

获取应用目录，Yaf 在该目录下查找控制器、视图和模块。 它由 `application.directory` 配置项，或者 `Yaf_Application::setAppDirectory()` 设置。

## 参数

此函数没有参数。

## 返回值

应用目录的绝对路径，如果应用没有正确初始化则返回 `null`。

## 示例

**`Yaf_Application::getAppDirectory()` 示例**

```php


<?php
/* conf/application.ini:
   application.directory = APPLICATION_PATH "/application"
*/
$app = new Yaf_Application(
    new Yaf_Config_Ini(APPLICATION_PATH . "/conf/application.ini", "product")
);

var_dump($app->getAppDirectory());
var_dump(Yaf_Application::app()->getAppDirectory());
?>

   
```

以上示例的输出类似于：

```text


string(31) "/var/www/html/myapp/application"
string(31) "/var/www/html/myapp/application"

   
```

## 参见

`Yaf_Application::setAppDirectory()`
