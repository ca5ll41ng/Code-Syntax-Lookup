---
id: "zh-php-function-function-fann-reset-errno"
language: "php"
lang: "zh"
category: "function"
name: "fann_reset_errno"
title: "重置最后的错误代码。"
signature: "void fann_reset_errno(resource $errdat)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-reset-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重置最后的错误代码。

## 说明

```php
void fann_reset_errno(resource $errdat)
```

重置最后的错误代码。

## 参数

- **`$errdat`** — Either neural network `resource` or neural network trainining data `resource`.

## 返回值

无返回值。

## 参见

`fann_get_errno()` `fann_reset_errstr()`
