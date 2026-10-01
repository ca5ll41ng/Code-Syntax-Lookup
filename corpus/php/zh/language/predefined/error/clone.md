---
id: "zh-php-function-error-clone"
language: "php"
lang: "zh"
category: "function"
name: "Error::__clone"
title: "克隆 error"
signature: "private void Error::__clone()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.clone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 克隆 error

## 说明

```php
private void Error::__clone()
```

Error 无法被克隆，调用该方法会导致 fatal error。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 错误／异常

Error *无法*被克隆。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `Error::__clone()` 不再是 final 的。 |
