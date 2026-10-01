---
id: "zh-php-function-throwable-getcode"
language: "php"
lang: "zh"
category: "function"
name: "Throwable::getCode"
title: "获取异常代码"
signature: "public int Throwable::getCode()"
module: "language"
source_url: "https://www.php.net/manual/zh/throwable.getcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常代码

## 说明

```php
public int Throwable::getCode()
```

返回 thrown 对象关联的的错误号。

## 参数

此函数没有参数。

## 返回值

返回 `Exception` 的 `int` 异常代码， 但如果是 `Exception` 的子类，可能会使其他类型（例如，`PDOException` 返回的类型是 `string` ）。

## 参见

`Exception::getCode()`
