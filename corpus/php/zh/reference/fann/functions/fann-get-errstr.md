---
id: "zh-php-function-function-fann-get-errstr"
language: "php"
lang: "zh"
category: "function"
name: "fann_get_errstr"
title: "返回最后的错误字符串。"
signature: "string fann_get_errstr(resource $errdat)"
module: "fann"
source_url: "https://www.php.net/manual/zh/function.fann-get-errstr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后的错误字符串。

## 说明

```php
string fann_get_errstr(resource $errdat)
```

返回最后的错误字符串。

## 参数

- **`$errdat`** — Either neural network `resource` or neural network trainining data `resource`.

## 返回值

成功，返回最后的错误字符串,，失败则返回 `false` 。

## 参见

`fann_reset_errstr()` `fann_get_errno()`
