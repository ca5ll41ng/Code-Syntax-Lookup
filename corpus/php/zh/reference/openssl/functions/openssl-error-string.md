---
id: "zh-php-function-function-openssl-error-string"
language: "php"
lang: "zh"
category: "function"
name: "openssl_error_string"
title: "返回 openSSL 错误消息"
signature: "string|false openssl_error_string()"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-error-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 openSSL 错误消息

## 说明

```php
string|false openssl_error_string()
```

`openssl_error_string()` 从openSSL库返回最后一个错误。错误消息已被队列化，因此这个函数可以多次调用用来收集所有的信息。最后一个错误将是最近的一个。

## 参数

此函数没有参数。

## 返回值

成功，返回错误信息字符串，如果没有任何错误信息则返回 `false`。

## 示例

**`openssl_error_string()` example**

```php


<?php
// lets assume you just called an openssl function that failed
while ($msg = openssl_error_string())
    echo $msg . "<br />\n";
?>

    
```
