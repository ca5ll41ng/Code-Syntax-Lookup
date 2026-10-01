---
id: "zh-php-function-yaf-route-regex-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Regex::route"
title: "路由请求"
signature: "public bool Yaf_Route_Regex::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-regex.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
public bool Yaf_Route_Regex::route(Yaf_Request_Abstract $request)
```

用正则表达式路由请求：将 URI 与传给构造函数的模式进行匹配，路由结果（module、controller 和 action）取自捕获的变量，并按 map 参数进行映射。

## 参数

- **`$request`** — 要路由的 `Yaf_Request_Abstract` 实例。

## 返回值

若 URI 匹配则返回 `true`，否则返回 `false`，路由器将尝试下一个路由。

## 示例

**`Yaf_Route_Regex::route()` 示例**

```php


<?php
/* 假设请求 URI 为 "/product/php-book" */
$request = new Yaf_Request_Http("/product/php-book");

$route = new Yaf_Route_Regex(
    "#^/product/([^/]+)/?$#", // 匹配以 "/product" 开头的 URI
    array(
        'controller' => "product", // 路由到 product 控制器
    ),
    array(
        1 => "name", // $request->getParam("name") 的值将是 "php-book"
    )
);

var_dump($route->route($request));

var_dump($request->getControllerName());
var_dump($request->getParam("name"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
string(7) "product"
string(8) "php-book"

   
```

## 参见

 `Yaf_Route_Regex::__construct()` `Yaf_Route_Regex::match()` `Yaf_Route_Regex::assemble()`
