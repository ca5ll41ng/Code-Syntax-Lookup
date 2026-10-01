---
id: "zh-php-function-yaf-loader-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::__construct"
title: "构造函数是私有的"
signature: "private Yaf_Loader::__construct()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造函数是私有的

## 说明

```php
private Yaf_Loader::__construct()
```

构造一个新的加载器。该构造函数是私有的；`Yaf_Loader` 是单例。请使用 `Yaf_Loader::getInstance()` 获取实例。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**获取 `Yaf_Loader` 单例**

```php


<?php
$app = new Yaf_Application(__DIR__ . "/conf/application.ini");

/* the constructor is private; use getInstance() instead */
$loader = Yaf_Loader::getInstance();
var_dump($loader instanceof Yaf_Loader);

/* instantiating directly raises an Error */
try {
    $loader = new Yaf_Loader();
} catch (Error $e) {
    echo $e->getMessage(), PHP_EOL;
}
?>

   
```

以上示例的输出类似于：

```text


bool(true)
Call to private Yaf_Loader::__construct() from global scope

   
```

## 参见

 `Yaf_Loader::getInstance()`
