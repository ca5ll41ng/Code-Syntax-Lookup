---
id: "zh-php-function-yaf-route-regex-assemble"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Regex::assemble"
title: "组合 url"
signature: "public string|null Yaf_Route_Regex::assemble(array $info, [array $query = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-regex.assemble.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 组合 url

## 说明

```php
public string|null Yaf_Route_Regex::assemble(array $info, [array $query = ...])
```

根据指定参数和自定义参数将 regex 这个 route 组合成一个 url

在 regex route 使用 assemble 需要在初始化时指定 reverse 参数，否则将不能正常工作

## 参数

- **`$info`** — 需要传入一个数组，数组的 key 可以为 :a、:c、:m，:a 表示 action，:c 表示 controller，:m 表示 module。
- **`$query`** — 用户自定义的 query 字符串，将根据此路由规则拼接在 url 中

## 返回值

成功时返回 `string`，失败时为 `null`。

## 示例

**`Yaf_Route_Regex::assemble()` 示例**

```php


<?php

$router = new Yaf_Router();

$route  = new Yaf_Route_Regex(
            "#^/product/([^/]+)/([^/])+#",
            array(
                'controller' => "product",  //route to product controller,
                ),
            array(),
            array(),
            '/:m/:c/:a'
        );

$router->addRoute("regex", $route);

var_dump($router->getRoute('regex')->assemble(
            array(
                ':m' => 'module',
                ':c' => 'controller',
                ':a' => 'action'
                ),
            array(
                'tkey1' => 'tval1',
                'tkey2' =>
                'tval2'
                )
            )
        );

   
```

以上示例的输出类似于：

```text


string(49) "/module/controller/action?tkey1=tval1&tkey2=tval2"

   
```
