---
id: "zh-php-function-function-iconv-strlen"
language: "php"
lang: "zh"
category: "function"
name: "iconv_strlen"
title: "返回字符串的字符数统计"
signature: "int|false iconv_strlen(string $string, string|null $encoding = null)"
module: "iconv"
source_url: "https://www.php.net/manual/zh/function.iconv-strlen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字符串的字符数统计

## 说明

```php
int|false iconv_strlen(string $string, string|null $encoding = null)
```

和 `strlen()` 不同的是，`iconv_strlen()` 统计了给定的字节序列 `$string` 中出现字符数的统计，基于指定的字符集，其产生的结果不一定和字符字节数相等。

## 参数

- **`$string`** — 该字符串。
- **`$encoding`** — 如果 `$encoding` 参数省略或为 `null`，假设 `$string` 的编码为 iconv.internal_encoding。

## 返回值

返回 `$str` 字符数的统计，是整型。如果编码期间出现错误，为 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$encoding` 现在可为 null。 |

## 参见

`grapheme_strlen()` `mb_strlen()` `strlen()`
