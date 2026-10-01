---
id: "zh-php-function-yaf-request-abstract-setrequesturi"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setRequestUri"
title: "设置请求 URI"
signature: "public Yaf_Request_Abstract Yaf_Request_Abstract::setRequestUri(string $uri)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setrequesturi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置请求 URI

## 说明

```php
public Yaf_Request_Abstract Yaf_Request_Abstract::setRequestUri(string $uri)
```

设置请求 URI，覆盖从环境中检测到的值。

这在手动分发时很有用，例如在测试中使用一个与真实请求不同的 URI。

## 参数

- **`$uri`** — 要设置的请求 URI。

## 返回值

返回请求对象自身。

## 示例

**`Yaf_Request_Abstract::setRequestUri()` 示例**

```php


<?php
$request = new Yaf_Request_Simple("CLI", "Index", "Index", "Index");

// 使用一个与真实请求不同的 URI 手动分发
$request->setRequestUri("/product/view/id/17");

var_dump($request->getRequestUri());
?>
   
```

以上示例的输出类似于：

```text


string(19) "/product/view/id/17"

   
```

## 参见

 `Yaf_Request_Abstract::getRequestUri()` `Yaf_Request_Abstract::setBaseUri()` `Yaf_Request_Abstract::getBaseUri()`
