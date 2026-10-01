---
id: "zh-php-function-yaf-route-map-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Map::route"
title: "路由请求"
signature: "public bool Yaf_Route_Map::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-map.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
public bool Yaf_Route_Map::route(Yaf_Request_Abstract $request)
```

将整个 URI 映射为一个 controller 名或 action 名来路由请求：URI 的各级路径段会用下划线连接起来组成该名称。

若构造路由时开启了 controller 优先标志，映射结果会被设置为 controller 名，否则设置为 action 名。

## 参数

- **`$request`** — 要路由的 `Yaf_Request_Abstract` 实例。

## 返回值

始终返回 `true`。注意：即使 URI 为空，Map 路由也会接收该请求，此时不会设置任何名称。

## 示例

**`Yaf_Route_Map::route()` 示例**

```php


<?php
$request = new Yaf_Request_Simple("CLI");
$request->setRequestUri("/product/foo/bar");

$route = new Yaf_Route_Map();
var_dump($route->route($request));
var_dump($request->getActionName());
?>

   
```

以上示例的输出类似于：

```text


bool(true)
string(15) "product_foo_bar"

   
```

**`Yaf_Route_Map::route()` 示例**

```php


<?php
$request = new Yaf_Request_Simple("CLI");
$request->setRequestUri("/user/list/_/foo/22");

$route = new Yaf_Route_Map(true, "_");
var_dump($route->route($request));
var_dump($request->getControllerName());
var_dump($request->getParam("foo"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
string(9) "User_List"
string(2) "22"

   
```

## 参见

 `Yaf_Route_Map::__construct()` `Yaf_Route_Map::assemble()`
