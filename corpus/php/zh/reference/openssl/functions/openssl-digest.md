---
id: "zh-php-function-function-openssl-digest"
language: "php"
lang: "zh"
category: "function"
name: "openssl_digest"
title: "计算摘要"
signature: "string|false openssl_digest(string $data, string $digest_algo, bool $binary = false)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-digest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算摘要

## 说明

```php
string|false openssl_digest(string $data, string $digest_algo, bool $binary = false)
```

使用给定的方法计算给定数据的摘要哈希值，并返回一个原始的或16进制编码的字符串。

## 参数

- **`$data`** — 给定的数据。
- **`$digest_algo`** — 要使用的摘要方法，比如 "sha256", 查看 `openssl_get_md_methods()` 函数获取更多可用的摘要方法。
- **`$binary`** — 为 `true` 时将会返回原始输出数据，否则返回值将会是16进制。

## 返回值

成功，返回摘要哈希值， 或者在失败时返回 `false`.

## 错误／异常

如果通过 `$digest_algo` 参数传递的是未知的摘要算法，将会抛出 `E_WARNING` 级的错误。

## 参见

`openssl_get_md_methods()`
