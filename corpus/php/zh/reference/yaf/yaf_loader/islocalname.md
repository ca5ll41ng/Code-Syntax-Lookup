---
id: "zh-php-function-yaf-loader-islocalname"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::isLocalName"
title: "判断类名是否是本地类名"
signature: "public bool Yaf_Loader::isLocalName(string $class_name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.islocalname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断类名是否是本地类名

## 说明

```php
public bool Yaf_Loader::isLocalName(string $class_name)
```

判断类名是否应该在本地库目录中查找，即它的前缀是否属于已注册的本地命名空间。

## 参数

- **`$class_name`** — 要检查的类名。

## 返回值

如果类名属于已注册的本地命名空间则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Loader::isLocalName()` 示例**

```php


<?php
$app    = new Yaf_Application(__DIR__ . "/conf/application.ini");
$loader = Yaf_Loader::getInstance();
$loader->registerLocalNamespace(array("Models", "Services"));

var_dump($loader->isLocalName("Models_Product"));
var_dump($loader->isLocalName("Vendor_Session"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(false)

   
```

## 参见

 `Yaf_Loader::registerLocalNamespace()` `Yaf_Loader::getNamespacePath()`
