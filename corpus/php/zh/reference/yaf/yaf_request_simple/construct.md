---
id: "zh-php-function-yaf-request-simple-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Simple::__construct"
title: "Yaf_Request_Simple 构造方法"
signature: "public Yaf_Request_Simple::__construct([string $method = ...], [string $module = ...], [string $controller = ...], [string $action = ...], [array $params = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-simple.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Request_Simple 构造方法

## 说明

```php
public Yaf_Request_Simple::__construct([string $method = ...], [string $module = ...], [string $controller = ...], [string $action = ...], [array $params = ...])
```

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

## 示例

**`Yaf_Request_Simple::__construct()` 示例**

```php


<?php
/**
 * 在 CLI 脚本中，通过直接给出 MVC 名称来构建
 * 一个跳过路由流程的请求。
 */
$request = new Yaf_Request_Simple(
    "CLI",            // method，请求方法
    "Index",          // module，模块
    "Product",        // controller，控制器
    "detail",         // action，动作
    array("id" => 10) // 请求参数
);

var_dump($request->isRouted()); /* 带有 MVC 名称的请求是预路由的 */
var_dump($request->getModuleName());
var_dump($request->getControllerName());
var_dump($request->getActionName());
var_dump($request->getParam("id"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
string(5) "Index"
string(7) "Product"
string(6) "detail"
int(10)

   
```

## 参见

 `Yaf_Request_Http` `Yaf_Request_Abstract::isRouted()` `Yaf_Request_Abstract::getParam()`
