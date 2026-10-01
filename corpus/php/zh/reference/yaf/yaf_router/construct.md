---
id: "zh-php-function-yaf-router-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Router::__construct"
title: "Yaf_Router 构造方法"
signature: "public Yaf_Router::__construct()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-router.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Router 构造方法

## 说明

```php
public Yaf_Router::__construct()
```

## 参数

此函数没有参数。

## 返回值

## 示例

**`Yaf_Router::__construct()` 示例**

在通常的用法中，路由器不需要手动构造，它由调度器（dispatcher）持有：

```php


<?php
/* 在 index.php 或插件中，从调度器获取路由器 */
$router = Yaf_Dispatcher::getInstance()->getRouter();
var_dump($router);
?>

   
```

以上示例的输出类似于：

```text


object(Yaf_Router)#4 (1) {
}

   
```

## 参见

 `Yaf_Dispatcher::getRouter()` `Yaf_Router::addRoute()`
