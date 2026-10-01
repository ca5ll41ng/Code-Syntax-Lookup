---
id: "zh-php-function-yaf-response-abstract-tostring"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::__toString"
title: "获取字符串形式的所有 body"
signature: "private string Yaf_Response_Abstract::__toString()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字符串形式的所有 body

## 说明

```php
private string Yaf_Response_Abstract::__toString()
```

按添加顺序将响应的所有 body 块拼接成一个字符串并返回。 当响应对象被用在字符串上下文中时，输出的正是该内容。

## 参数

此函数没有参数。

## 返回值

字符串形式的响应 body。

## 示例

**`Yaf_Response_Abstract::__toString()` 示例**

```php


<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->setBody(" World", "footer");

/* 在字符串上下文中使用响应对象会渲染所有 body 块 */
echo $response;
var_dump((string) $response);
?>

   
```

以上示例的输出类似于：

```text


Hello World
string(11) "Hello World"
   
```

## 参见

 `Yaf_Response_Abstract::getBody()` `Yaf_Response_Abstract::setBody()` `Yaf_Response_Abstract::response()`
