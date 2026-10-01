---
id: "zh-php-function-yaf-response-abstract-setbody"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::setBody"
title: "设置内容到响应"
signature: "public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::setBody(string $body, [string $key = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.setbody.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置内容到响应

## 说明

```php
public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::setBody(string $body, [string $key = ...])
```

设置内容到响应

## 参数

- **`$body`** — 内容字符串。
- **`$key`** — 内容 key。若未指定，则使用 `Yaf_Response_Abstract::DEFAULT_BODY`。

## 返回值

成功时返回响应对象自身，失败时返回 `false`。

## 示例

**`Yaf_Response_Abstract::setBody()` 示例**

```php


<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->setBody(" World", "footer");

print_r($response);
echo $response;
?>
   
```

以上示例的输出类似于：

```text


Yaf_Response_Http Object
(
    [_header:protected] => Array
        (
        )

    [_body:protected] => Array
        (
            [content] => Hello
            [footer] =>  World
        )

    [_sendheader:protected] => 1
    [_response_code:protected] => 200
)
Hello World
   
```

## 参见

 `Yaf_Response_Abstract::getBody()` `Yaf_Response_Abstract::appendBody()` `Yaf_Response_Abstract::prependBody()` `Yaf_Response_Abstract::clearBody()`
