---
id: "zh-php-function-yaf-route-static-assemble"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Static::assemble"
title: "组合 url"
signature: "public string Yaf_Route_Static::assemble(array $info, [array $query = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-static.assemble.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 组合 url

## 说明

```php
public string Yaf_Route_Static::assemble(array $info, [array $query = ...])
```

根据指定参数和自定义参数将 static 这个 route 组合成一个 url

## 参数

- **`$info`** — 需要传入一个数组，数组中每个 key 可为 :m、:c、:a，:m 代表 module，:c 代表 controller, :a 代表 action
- **`$query`** — 用户自定义的 query string，将根据此路由规则拼接在 url 中

## 返回值

返回 `string`。

## 错误／异常

如果 `$info` 中 `':c'` 和 `':a'` 键未设置，抛出 `Yaf_Exception_TypeError`。

## 示例

**`Yaf_Route_Static::assemble()` 示例**

```php


<?php

$router = new Yaf_Router();

$route  = new Yaf_Route_Static();

$router->addRoute("static", $route);

var_dump($router->getRoute('static')->assemble(
            array(
                ':a' => 'yafaction',
                'tkey' => 'tval',
                ':c' => 'yafcontroller',
                ':m' => 'yafmodule'
            ),
        )
);

var_dump($router->getRoute('static')->assemble(
            array(
                ':a' => 'yafaction',
                'tkey' => 'tval',
                ':c' => 'yafcontroller',
                ':m' => 'yafmodule'
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


string(%d) "/yafmodule/yafcontroller/yafaction"
string(%d) "/yafmodule/yafcontroller/yafaction?tkey1=tval1&tkey2=tval2"

   
```
