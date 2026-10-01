---
id: "zh-php-function-yaf-response-abstract-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::__construct"
title: "构造一个响应对象"
signature: "public Yaf_Response_Abstract::__construct()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造一个响应对象

## 说明

```php
public Yaf_Response_Abstract::__construct()
```

构造一个响应对象。构造函数不接受任何参数； `Yaf_Response_Http`、`Yaf_Response_Cli` 等具体子类会初始化各自的默认值（例如，HTTP 响应初始的响应码为 `200`）。

> 通常不需要手动构造响应对象： `Yaf_Dispatcher::getResponse()` 会返回由分发器创建的那个响应对象。

## 参数

此函数没有参数。

## 返回值

不返回任何值。

## 示例

**`Yaf_Response_Abstract::__construct()` 示例**

```php


<?php
/* 通常不需要手动构造响应对象：
 * 分发器会创建一个并通过 getResponse 提供 */
$response = Yaf_Dispatcher::getInstance()->getResponse();

/* 直接构造主要在测试中比较有用 */
$response = new Yaf_Response_Http();
$response->setBody("Hello World");

echo $response;
?>

   
```

以上示例的输出类似于：

```text


Hello World
   
```

## 参见

 `Yaf_Dispatcher::getResponse()` `Yaf_Response_Abstract::response()`
