---
id: "zh-php-function-function-json-last-error-msg"
language: "php"
lang: "zh"
category: "function"
name: "json_last_error_msg"
title: "返回最后一次调用 json_validate()、json_encode() 或 json_decode() 时产生的错误信息"
signature: "string json_last_error_msg()"
module: "json"
source_url: "https://www.php.net/manual/zh/function.json-last-error-msg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后一次调用 json_validate()、json_encode() 或 json_decode() 时产生的错误信息

## 说明

```php
string json_last_error_msg()
```

当没有设置 `JSON_THROW_ON_ERROR` 参数时，返回最后一次调用 `json_validate()`、`json_encode()` 或 `json_decode()` 产生的错误信息。

## 参数

此函数没有参数。

## 返回值

成功则返回错误信息，如果没有错误产生则返回 `"No error"` 。

## 参见

`json_last_error()`
