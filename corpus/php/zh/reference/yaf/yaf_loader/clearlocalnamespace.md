---
id: "zh-php-function-yaf-loader-clearlocalnamespace"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::clearLocalNamespace"
title: "清除已注册的命名空间"
signature: "public bool Yaf_Loader::clearLocalNamespace()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.clearlocalnamespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清除已注册的命名空间

## 说明

```php
public bool Yaf_Loader::clearLocalNamespace()
```

清除所有已注册的本地命名空间。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`。

## 示例

**`Yaf_Loader::clearLocalNamespace()` 示例**

```php


<?php
$app    = new Yaf_Application(__DIR__ . "/conf/application.ini");
$loader = Yaf_Loader::getInstance();

$loader->registerLocalNamespace(array("Models", "Services"));
var_dump(count($loader->getLocalNamespace()));

$loader->clearLocalNamespace();
var_dump(count($loader->getLocalNamespace()));
?>

   
```

以上示例的输出类似于：

```text


int(2)
int(0)

   
```

## 参见

 `Yaf_Loader::registerLocalNamespace()` `Yaf_Loader::getLocalNamespace()`
