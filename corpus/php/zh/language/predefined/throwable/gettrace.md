---
id: "zh-php-function-throwable-gettrace"
language: "php"
lang: "zh"
category: "function"
name: "Throwable::getTrace"
title: "获取堆栈踪迹（Stack Trace）"
signature: "public array Throwable::getTrace()"
module: "language"
source_url: "https://www.php.net/manual/zh/throwable.gettrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取堆栈踪迹（Stack Trace）

## 说明

```php
public array Throwable::getTrace()
```

返回 `array` 的堆栈踪迹（Stack Trace）。

## 参数

此函数没有参数。

## 返回值

返回 `array` 的堆栈踪迹（Stack Trace），和 `debug_backtrace()` 具有相同的格式。

## 参见

`Exception::getTrace()`
