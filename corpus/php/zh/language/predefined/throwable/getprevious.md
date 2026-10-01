---
id: "zh-php-function-throwable-getprevious"
language: "php"
lang: "zh"
category: "function"
name: "Throwable::getPrevious"
title: "返回先前的 Throwable"
signature: "public Throwable|null Throwable::getPrevious()"
module: "language"
source_url: "https://www.php.net/manual/zh/throwable.getprevious.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回先前的 Throwable

## 说明

```php
public Throwable|null Throwable::getPrevious()
```

返回任意一个先前的错误 (例如， `Exception::__construct()`中提供的第三个参数)。

## 参数

此函数没有参数。

## 返回值

如果有的话，返回先前的 `Throwable`，否则就返回 `null` 。

## 参见

`Exception::getPrevious()`
