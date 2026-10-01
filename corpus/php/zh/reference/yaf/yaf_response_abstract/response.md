---
id: "zh-php-function-yaf-response-abstract-response"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::response"
title: "发送响应"
signature: "public bool|null Yaf_Response_Abstract::response()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.response.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 发送响应

## 说明

```php
public bool|null Yaf_Response_Abstract::response()
```

发送响应：按顺序发送响应头和所有 body 块。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`，失败时返回 `null`。

## 示例

**`Yaf_Response_Abstract::response()` 示例**

```php


<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->setBody(" World", "footer");

$response->response();
?>
   
```

以上示例的输出类似于：

```text


Hello World
   
```

## 参见

 `Yaf_Response_Abstract::setBody()` `Yaf_Response_Abstract::clearBody()`
