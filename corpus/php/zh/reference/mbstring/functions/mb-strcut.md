---
id: "zh-php-function-function-mb-strcut"
language: "php"
lang: "zh"
category: "function"
name: "mb_strcut"
title: "获取字符的一部分"
signature: "string mb_strcut(string $string, int $start, int|null $length = null, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strcut.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字符的一部分

## 说明

```php
string mb_strcut(string $string, int $start, int|null $length = null, string|null $encoding = null)
```

`mb_strcut()` 和 `mb_substr()` 类似，都是从字符串中提取子字符串，但是按字节数来执行，而不是字符个数。 如果截断位置位于多字节字符两个字节的中间，将于该字符的第一个字节开始执行。 这也是和 `substr()` 函数的不同之处，后者简单地将字符串在字节之间截断，这将导致一个畸形的字节序列。

## 参数

- **`$string`** — 要截断的 `string`。
- **`$start`** — 如果 `$start` 不是负数，返回的字符串会从 `$string` 的第 `$start` *字节*位置开始，从 0 开始计数。举个例子，字符串 '`abcdef`'，字节位置 `0` 的字符是 '`a`'，字节位置 `2` 的字符是 '`c`'，以此类推。 — 如果 `$start` 是负数，返回的字符串是从 `$string` 末尾倒数第 `$start` 个字节开始的。但是，如果负 `$start` 大于字符串的长度，则返回的部分将从 `$string` 的开头开始。
- **`$length`** — *字节*长度。如果省略或传递 `NULL`，则将所有字节提取到字符串的末尾。 — 如果 `$length` 为负数，则返回的字符串将在从 `$string` 末尾倒数的第 `$length` 个字节处结束。但是，如果负 `$length` 大于 `$start` 位置之后的字符数，则返回空字符串。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

`mb_strcut()` 根据 `$start` 和 `$length` 参数返回 `$string` 的一部分。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 参见

`mb_substr()` `mb_internal_encoding()`
