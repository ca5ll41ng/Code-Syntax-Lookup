---
id: "zh-php-function-yaf-request-abstract-setbaseuri"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setBaseUri"
title: "设置基础 URI"
signature: "public Yaf_Request_Abstract|false Yaf_Request_Abstract::setBaseUri(string $uir)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setbaseuri.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置基础 URI

## 说明

```php
public Yaf_Request_Abstract|false Yaf_Request_Abstract::setBaseUri(string $uir)
```

设置基础 URI，基础 URI 用于路由，在路由阶段，请求 URI 用于路由请求， 而基础 URI 用于跳过请求 URI 的前置部分（基础 URI）。 也就是说，如果请求 URI 是 a/b/c，设置基础 URI 为 "a/b"， 那么路由阶段只会使用 "/c"。

> 一般情况下不需要设置，Yaf 会自动判断。

## 参数

- **`$uir`** — 基础 URI

## 返回值

成功时返回请求对象自身，失败时返回 `false`。

## 示例

**`Yaf_Request_Abstract::setBaseUri()` 示例**

```php


<?php
$request = new Yaf_Request_Simple("GET", "Index", "Product", "View");

// 应用部署在 /myapp 下，
// 请求以 /myapp/product/view 的形式进来
$request->setBaseUri("/myapp");
$request->setRequestUri("/myapp/product/view");

var_dump($request->getBaseUri());
var_dump($request->getRequestUri());
?>
   
```

以上示例的输出类似于：

```text


string(6) "/myapp"
string(19) "/myapp/product/view"

   
```

## 参见

 `Yaf_Request_Abstract::getBaseUri()` `Yaf_Request_Abstract::setRequestUri()` `Yaf_Request_Abstract::getRequestUri()`
