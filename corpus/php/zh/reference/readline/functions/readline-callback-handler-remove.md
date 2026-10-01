---
id: "zh-php-function-function-readline-callback-handler-remove"
language: "php"
lang: "zh"
category: "function"
name: "readline_callback_handler_remove"
title: "移除之前已安装的回调函数句柄并且恢复终端设置"
signature: "bool readline_callback_handler_remove()"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-callback-handler-remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除之前已安装的回调函数句柄并且恢复终端设置

## 说明

```php
bool readline_callback_handler_remove()
```

移除之前已安装的回调句柄并且恢复终端设置。

## 参数

此函数没有参数。

## 返回值

如果移除了之前已安装的回调句柄，返回 `true` 或者如果没有找到的话返回 `false`。

## 示例

有关如何使用 readline 回调接口的示例，参见 `readline_callback_handler_install()`。

## 参见

 `readline_callback_handler_install()` `readline_callback_read_char()`
