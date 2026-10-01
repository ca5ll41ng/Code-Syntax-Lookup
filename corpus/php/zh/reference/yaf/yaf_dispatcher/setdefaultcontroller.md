---
id: "zh-php-function-yaf-dispatcher-setdefaultcontroller"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::setDefaultController"
title: "更改默认控制器名"
signature: "public Yaf_Dispatcher|null|false Yaf_Dispatcher::setDefaultController(string $controller)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.setdefaultcontroller.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更改默认控制器名

## 说明

```php
public Yaf_Dispatcher|null|false Yaf_Dispatcher::setDefaultController(string $controller)
```

更改当无法从请求 URI 中提取控制器名时所使用的控制器名。该名称会被规范化为 首字母大写。

## 参数

- **`$controller`** — 控制器的名称。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象自身，如果应用未初始化 则返回 `false`。

## 示例

**`Yaf_Dispatcher::setDefaultController()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

// 不含控制器部分的请求现在会被路由到 HomeController，
// 名称会被规范化为首字母大写
Yaf_Dispatcher::getInstance()->setDefaultController("home");

$app->run();
?>

   
```

## 参见

`Yaf_Dispatcher::setDefaultModule()` `Yaf_Dispatcher::setDefaultAction()` `Yaf_Dispatcher::getDefaultController()`
