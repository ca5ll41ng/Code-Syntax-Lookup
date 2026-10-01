---
id: "zh-php-function-function-fann-get-errno"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_errno"
title: "返回最后一个错误数字。"
signature: "int fann_get_errno(resource $errdat)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后一个错误数字。

## 说明

```php
int fann_get_errno(resource $errdat)
```

返回最后一个错误数字。

## 参数

- **`$errdat`** — Either neural network `resource` or neural network trainining data `resource`.

## 返回值

成功，返回错误数字，错误则返回 `false` .

## 参见

`fann_reset_errno()` `fann_get_errstr()`
