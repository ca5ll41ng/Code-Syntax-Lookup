---
id: "zh-php-function-yaf-route-simple-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Simple::route"
title: "路由请求"
signature: "public bool Yaf_Route_Simple::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-simple.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
public bool Yaf_Route_Simple::route(Yaf_Request_Abstract $request)
```

用查询参数路由请求：从与传给构造函数的参数同名的查询变量中获取 module、controller 和 action 名。

## 参数

- **`$request`** — 要路由的 `Yaf_Request_Abstract` 实例。

## 返回值

若三个查询变量中任一存在则返回 `true`，否则返回 `false`，路由器将尝试下一个路由。

## 示例

**`Yaf_Route_Simple::route()` 示例**

```php


<?php
/* 假设请求是通过
 * http://yourdomain.com/index.php?m=main&c=product&a=detail 发起的 */
$request = new Yaf_Request_Http("/index.php");

$route = new Yaf_Route_Simple("m", "c", "a");
var_dump($route->route($request));

var_dump($request->getModuleName());
var_dump($request->getControllerName());
var_dump($request->getActionName());
?>

   
```

以上示例的输出类似于：

```text


bool(true)
string(4) "main"
string(7) "product"
string(6) "detail"

   
```

## 参见

 `Yaf_Route_Simple::__construct()` `Yaf_Route_Simple::assemble()`
