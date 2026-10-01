---
id: "zh-php-function-yaf-route-static-match"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Route_Static::match"
title: "判断路由是否匹配 URI"
signature: "public bool Yaf_Route_Static::match(string $uri)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-route-static.match.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断路由是否匹配 URI

## 说明

```php
public bool Yaf_Route_Static::match(string $uri)
```

判断静态路由是否匹配某个 URI。由于静态路由可以匹配任何 URI，此方法总是返回 `true`。

## 参数

- **`$uri`** — 要检查的 URI。

## 返回值

总是返回 `true`。

## 示例

**`Yaf_Route_Static::match()` 示例**

```php


<?php
$route = new Yaf_Route_Static();

/* 静态路由可以匹配任何 URI */
var_dump($route->match("/product/detail/id/10"));
var_dump($route->match("/"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)

   
```

## 参见

 `Yaf_Route_Static::route()`
