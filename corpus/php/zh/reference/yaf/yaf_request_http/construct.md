---
id: "zh-php-function-yaf-request-http-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Http::__construct"
title: "Yaf_Request_Http 构造方法"
signature: "public Yaf_Request_Http::__construct([string $request_uri = ...], [string $base_uri = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-http.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Request_Http 构造方法

## 说明

```php
public Yaf_Request_Http::__construct([string $request_uri = ...], [string $base_uri = ...])
```

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

## 示例

**`Yaf_Request_Http::__construct()` 示例**

```php


<?php
/**
 * 显式地用请求 URI 和基础 URI 构建一个 http 请求。
 *
 * 如果省略请求 URI，则会从常规的 $_SERVER 变量中获取
 * （$_SERVER["PATH_INFO"]、$_SERVER["REQUEST_URI"] 等）。
 */
$request = new Yaf_Request_Http("/product/detail/id/10", "/product");

var_dump($request->getMethod());
var_dump($request->getRequestUri());
var_dump($request->getBaseUri());
?>

   
```

以上示例的输出类似于：

```text


string(3) "GET"
string(21) "/product/detail/id/10"
string(8) "/product"

   
```

## 参见

 `Yaf_Request_Simple` `Yaf_Request_Abstract::getMethod()` `Yaf_Request_Abstract::getRequestUri()`
