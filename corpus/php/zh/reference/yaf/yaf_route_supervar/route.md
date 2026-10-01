---
id: "zh-php-function-yaf-route-supervar-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Supervar::route"
title: "路由请求"
signature: "public bool Yaf_Route_Supervar::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-supervar.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
public bool Yaf_Route_Supervar::route(Yaf_Request_Abstract $request)
```

使用超级变量对请求进行路由：期望构造方法中指定的查询变量携带 PATH_INFO 风格的 URI，之后按照 `Yaf_Route_Static` 的方式进行解析。

## 参数

- **`$request`** — 要路由的 `Yaf_Request_Abstract` 实例。

## 返回值

如果该变量存在且值是字符串，返回 `true`，否则返回 `false`，此时路由器会尝试下一个路由。

## 示例

**`Yaf_Route_Supervar::route()` 示例**

```php


<?php
/* 假设请求是通过
 * http://yourdomain.com/index.php?_url=/product/detail/id/10 发出的 */
$request = new Yaf_Request_Http("/index.php");

$route = new Yaf_Route_Supervar("_url");
var_dump($route->route($request));

var_dump($request->getControllerName());
var_dump($request->getActionName());
var_dump($request->getParam("id"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
string(7) "product"
string(6) "detail"
string(2) "10"

   
```

## 参见

 `Yaf_Route_Supervar::__construct()` `Yaf_Route_Supervar::assemble()`
