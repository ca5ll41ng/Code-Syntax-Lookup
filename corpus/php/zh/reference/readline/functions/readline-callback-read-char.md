---
id: "zh-php-function-function-readline-callback-read-char"
language: "php"
lang: "zh"
category: "function"
name: "readline_callback_read_char"
title: "当一个行被接收时读取一个字符并且通知 readline 回调接口"
signature: "void readline_callback_read_char()"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-callback-read-char.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 当一个行被接收时读取一个字符并且通知 readline 回调接口

## 说明

```php
void readline_callback_read_char()
```

读取用户输入中的一个字符。当一行被接收时，这个函数将通知使用 `readline_callback_handler_install()` 安装的 readline 回调接口，并且 这一个行已经准备输入。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

有关如何使用 readline 回调接口的示例，参见 `readline_callback_handler_install()`。

## 参见

 `readline_callback_handler_install()` `readline_callback_handler_remove()`
