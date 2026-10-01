---
id: "zh-php-function-yaf-loader-getnamespaces"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::getNamespaces"
title: "getLocalNamespace 的别名"
signature: "public array Yaf_Loader::getNamespaces()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.getnamespaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# getLocalNamespace 的别名

## 说明

```php
public array Yaf_Loader::getNamespaces()
```

`Yaf_Loader::getLocalNamespace()` 的别名。

## 参数

此函数没有参数。

## 返回值

已注册的本地命名空间数组，以命名空间前缀为键，如果没有注册任何命名空间则返回空数组。

## 示例

**`Yaf_Loader::getNamespaces()` 示例**

```php


<?php
$app    = new Yaf_Application(__DIR__ . "/conf/application.ini");
$loader = Yaf_Loader::getInstance();
$loader->registerLocalNamespace(array("Models", "Services"));

/* getNamespaces() 是 getLocalNamespace() 的别名 */
var_dump($loader->getNamespaces() === $loader->getLocalNamespace());
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Loader::getLocalNamespace()`
