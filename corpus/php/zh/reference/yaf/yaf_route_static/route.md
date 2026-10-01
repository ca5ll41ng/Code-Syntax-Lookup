---
id: "zh-php-function-yaf-route-static-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Static::route"
title: "路由请求"
signature: "public bool Yaf_Route_Static::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-static.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
public bool Yaf_Route_Static::route(Yaf_Request_Abstract $request)
```

按照 PATH_INFO 风格的 URI 对请求进行路由：只有当第一段路径是已注册的模块之一时，才将其视为模块名，否则按顺序将各段路径映射为控制器和动作。剩余的路径段成为请求参数。

例如，在没有名为 `foo` 的模块时，`/foo/bar/age/10` 会路由到控制器 `Foo`、动作 `bar`，其中参数 `age` 的值为 `10`。

## 参数

- **`$request`** — 要路由的 `Yaf_Request_Abstract` 实例。

## 返回值

总是返回 `true`。

## 示例

**`Yaf_Route_Static::route()` 示例**

```php


<?php
$request = new Yaf_Request_Http("/product/detail/id/10");

/* 静态路由是 Yaf_Router 的默认路由，
 * 注册在 "_default" 这个名字下 */
$route = Yaf_Dispatcher::getInstance()->getRouter()->getRoute("_default");
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

 `Yaf_Route_Static::match()` `Yaf_Route_Static::assemble()`
