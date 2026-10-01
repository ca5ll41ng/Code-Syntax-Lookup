---
id: "zh-php-function-yaf-route-map-assemble"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Map::assemble"
title: "组合url"
signature: "public string Yaf_Route_Map::assemble(array $info, [array $query = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-map.assemble.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 组合url

## 说明

```php
public string Yaf_Route_Map::assemble(array $info, [array $query = ...])
```

根据指定参数和自定义参数将 map 这个 route 组合成一个 url

## 参数

- **`$info`** — 需要传入一个数组，数组的 key 可以为 :a 或者 :c，:a 表示 action，:c 表示 controller。 — 当 map route 初始化时，controller_prefer 为 `false` 时，这个参数需要传入 :c。当 controller_prefer 为 `true` 时，这个参数需要传入 :a。
- **`$query`** — 用户自定义的 query 字符串，将根据此路由规则拼接在url中

## 返回值

成功时返回 `string`，失败时为 `null`。

## 错误／异常

可能抛出 `Yaf_Exception_TypeError`。

## 示例

**`Yaf_Route_Map::assemble()` 示例**

```php


<?php

$router = new Yaf_Router();

$route  = new Yaf_Route_Map();

$router->addRoute("map", $route);

var_dump($router->getRoute('map')->assemble(
                        array(
                                ':c' => 'foo_bar'
                        ),
                        array(
                                'tkey1' => 'tval1',
                                'tkey2' => 'tval2'
                        )
                   )
);

$route = new Yaf_Route_Map(true, '_');
$router->addRoute("map", $route);

var_dump($router->getRoute('map')->assemble(
                        array(
                                ':a' => 'foo_bar'
                        ),
                        array(
                                'tkey1' => 'tval1',
                                'tkey2' => 'tval2'
                        )
                   )
);

   
```

以上示例的输出类似于：

```text


string(%d) "/foo/bar?tkey1=tval1&tkey2=tval2"
string(%d) "/foo/bar/_/tkey1/tval1/tkey2/tval2"

   
```
