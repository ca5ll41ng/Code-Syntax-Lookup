---
id: "zh-php-function-function-mb-substr"
language: "php"
lang: "zh"
category: "function"
name: "mb_substr"
title: "获取部分字符串"
signature: "string mb_substr(string $string, int $start, int|null $length = null, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-substr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取部分字符串

## 说明

```php
string mb_substr(string $string, int $start, int|null $length = null, string|null $encoding = null)
```

根据字符数执行一个多字节安全的 `substr()` 操作。 位置是从 `$string` 的开始位置进行计数。 第一个字符的位置是 0。第二个字符的位置是 1，以此类推。

## 参数

- **`$string`** — 从该 `string` 中提取子字符串。
- **`$start`** — 如果 `$start` 不是负数，返回的字符串会从 `$string` 第 `$start` 的位置开始，从 0 开始计数。举个例子，字符串 '`abcdef`'，位置 `0` 的字符是 '`a`'，位置 `2` 的字符是 '`c`'，以此类推。 — 如果 `$start` 是负数，返回的字符串是从 `$string` 末尾处第 `$start` 个字符开始的。
- **`$length`** — `$string` 中要使用的最大字符数。如果省略了此参数或者传入了 `NULL`，则会提取到字符串的尾部。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

`mb_substr()` 函数根据 `$start` 和 `$length` 参数返回 `$string` 中指定的部分。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 参见

`mb_strcut()` `mb_internal_encoding()`
