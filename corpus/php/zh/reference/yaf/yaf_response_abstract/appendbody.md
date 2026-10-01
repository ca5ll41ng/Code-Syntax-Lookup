---
id: "zh-php-function-yaf-response-abstract-appendbody"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::appendBody"
title: "向响应 body 追加内容"
signature: "public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::appendBody(string $body, [string $key = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.appendbody.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向响应 body 追加内容

## 说明

```php
public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::appendBody(string $body, [string $key = ...])
```

追加内容到响应 body。

## 参数

- **`$body`** — 内容字符串。
- **`$key`** — 内容 key，如果未指定，将使用 `Yaf_Response_Abstract::DEFAULT_BODY`。

## 返回值

成功时返回响应对象自身，失败时返回 `false`。

## 示例

**`Yaf_Response_Abstract::appendBody()` 示例**

```php


<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->appendBody(" World");

echo $response;
?>
   
```

以上示例的输出类似于：

```text


Hello World
   
```

## 参见

 `Yaf_Response_Abstract::getBody()` `Yaf_Response_Abstract::setBody()` `Yaf_Response_Abstract::prependBody()` `Yaf_Response_Abstract::clearBody()`
