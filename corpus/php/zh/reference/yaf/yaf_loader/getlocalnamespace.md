---
id: "zh-php-function-yaf-loader-getlocalnamespace"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::getLocalNamespace"
title: "获取已注册的命名空间"
signature: "public array Yaf_Loader::getLocalNamespace()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.getlocalnamespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取已注册的命名空间

## 说明

```php
public array Yaf_Loader::getLocalNamespace()
```

获取所有已注册的本地命名空间及其路径。

## 参数

此函数没有参数。

## 返回值

返回已注册的本地命名空间数组，以命名空间前缀为键；若没有注册任何命名空间，则返回空数组。

## 示例

**`Yaf_Loader::getLocalNamespace()` 示例**

```php


<?php
$app    = new Yaf_Application(__DIR__ . "/conf/application.ini");
$loader = Yaf_Loader::getInstance();

$loader->registerLocalNamespace("Models");
$loader->registerLocalNamespace("Vendor", APPLICATION_PATH . "/library/Vendor");

print_r($loader->getLocalNamespace());
?>

   
```

以上示例的输出类似于：

```text


Array
(
    [Models] => /var/www/shop/application/library
    [Vendor] => /var/www/shop/application/library/Vendor
)

   
```

## 参见

 `Yaf_Loader::registerLocalNamespace()` `Yaf_Loader::clearLocalNamespace()`
