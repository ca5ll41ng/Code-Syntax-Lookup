---
id: "zh-php-function-function-session-encode"
language: "php"
lang: "zh"
category: "function"
name: "session_encode"
title: "将当前会话数据编码为字符串"
signature: "string|false session_encode()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将当前会话数据编码为字符串

## 说明

```php
string|false session_encode()
```

`session_encode()` 返回一个序列化后的字符串，包含被编码的、储存于 $_SESSION 超全局变量中的当前会话数据。

默认情况下，PHP 内部使用的序列方法和 `serialize()` 是不一样的。 该序列方法通过 session.serialize_handler 来设置。

## 参数

此函数没有参数。

## 返回值

返回当前会话编码后的内容， 或者在失败时返回 `false`。

## 注释

> 在调用 `session_encode()` 之前必须先调用 `session_start()`。

## 参见

`session_decode()` session.serialize_handler
