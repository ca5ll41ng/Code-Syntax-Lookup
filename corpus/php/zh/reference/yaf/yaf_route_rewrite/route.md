---
id: "zh-php-function-yaf-route-rewrite-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Rewrite::route"
title: "路由请求"
signature: "public bool Yaf_Route_Rewrite::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-rewrite.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
public bool Yaf_Route_Rewrite::route(Yaf_Request_Abstract $request)
```

将 URI 与传给构造函数的匹配模式进行匹配来路由请求。匹配成功时，module、controller 和 action 取自 route 数组，其中以冒号开头的值会从匹配到的变量中解析。

## 参数

- **`$request`** — 要路由的 `Yaf_Request_Abstract` 实例。

## 返回值

若 URI 匹配则返回 `true`，否则返回 `false`，路由器将尝试下一个路由。

## 示例

**`Yaf_Route_Rewrite::route()` 示例**

```php


<?php
/* 假设请求 URI 为 "/product/php-book" */
$request = new Yaf_Request_Http("/product/php-book");

$route = new Yaf_Route_Rewrite(
    "/product/:name",             // 匹配以 "/product" 开头的 URI
    array(
        'controller' => "product", // 路由到 product 控制器
    ),
    array()                        // 没有默认值
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

 `Yaf_Route_Rewrite::__construct()` `Yaf_Route_Rewrite::match()` `Yaf_Route_Rewrite::assemble()`
