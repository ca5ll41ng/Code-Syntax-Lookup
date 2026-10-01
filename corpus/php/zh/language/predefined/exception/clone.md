---
id: "zh-php-function-exception-clone"
language: "php"
lang: "zh"
category: "function"
name: "Exception::__clone"
title: "异常克隆"
signature: "private void Exception::__clone()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.clone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 异常克隆

## 说明

```php
private void Exception::__clone()
```

`Exception`s 不能被克隆， 这将抛出一个 `Error`。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 错误／异常

异常被*不允许*克隆。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `Exception::__clone()` 不再是 final 的。 |
