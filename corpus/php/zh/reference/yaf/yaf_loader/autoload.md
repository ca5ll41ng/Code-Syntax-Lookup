---
id: "zh-php-function-yaf-loader-autoload"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::autoload"
title: "自动加载类"
signature: "public bool Yaf_Loader::autoload(string $class_name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.autoload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 自动加载类

## 说明

```php
public bool Yaf_Loader::autoload(string $class_name)
```

根据类名加载类。类名会被转换为文件路径：下划线和命名空间分隔符会转换为目录分隔符。

MVC 类（名称中含有 `_Controller`、`_Action` 或 `_Plugin` 的类）在应用目录下查找，其他类则在库目录下查找：本地注册类前缀在本地库中查找，否则在全局库中查找。

## 参数

- **`$class_name`** — 要加载的类名。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

**`Yaf_Loader::autoload()` 示例**

```php


<?php
/*
 * autoload() 通常在引用未定义类时由引擎隐式调用，
 * 但也可以显式调用来强制加载类文件。
 */
$loader = Yaf_Loader::getInstance("/var/www/shop/application/library");

/* 查找 /var/www/shop/application/library/Catalog/PriceService.php */
$loader->autoload("Catalog_PriceService");

/* MVC 类在应用目录下查找 */
$loader->autoload("ProductController");
?>

   
```

## 参见

 `Yaf_Loader::import()` `Yaf_Loader::registerLocalNamespace()`
