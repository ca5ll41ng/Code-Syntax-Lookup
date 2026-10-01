---
id: "zh-php-function-yaf-response-abstract-getbody"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::getBody"
title: "获取一个响应 body 块的内容"
signature: "public mixed Yaf_Response_Abstract::getBody([string $key = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.getbody.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个响应 body 块的内容

## 说明

```php
public mixed Yaf_Response_Abstract::getBody([string $key = ...])
```

获取一个响应 body 块的内容。

## 参数

- **`$key`** — 内容 key。若未指定，则使用 DEFAULT_BODY 块；传入 `null` 则以数组形式获取所有内容块。

## 返回值

返回内容字符串；当 `$key` 为 `null` 时，返回包含所有内容块的数组。若该块未设置，则返回空字符串。

## 示例

**`Yaf_Response_Abstract::getBody()` 示例**

```php


<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->setBody(" World", "footer");

var_dump($response->getBody());
var_dump($response->getBody(Yaf_Response_Abstract::DEFAULT_BODY));
var_dump($response->getBody("footer"));
var_dump($response->getBody(NULL));
?>
   
```

以上示例的输出类似于：

```text


string(5) "Hello"
string(5) "Hello"
string(6) " World"
array(2) {
  ["content"]=>
  string(5) "Hello"
  ["footer"]=>
  string(6) " World"
}
   
```

## 参见

 `Yaf_Response_Abstract::setBody()` `Yaf_Response_Abstract::appendBody()` `Yaf_Response_Abstract::prependBody()` `Yaf_Response_Abstract::clearBody()`
