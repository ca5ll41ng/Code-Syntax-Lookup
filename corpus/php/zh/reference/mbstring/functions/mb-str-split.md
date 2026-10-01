---
id: "zh-php-function-function-mb-str-split"
language: "php"
lang: "zh"
category: "function"
name: "mb_str_split"
title: "指定多字节字符串，返回其字符数组"
signature: "array mb_str_split(string $string, int $length = 1, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-str-split.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 指定多字节字符串，返回其字符数组

## 说明

```php
array mb_str_split(string $string, int $length = 1, string|null $encoding = null)
```

此函数将返回一个字符串数组，这是一个支持字符变长编码以及 1、2、4 字节字符定长编码版本的 `str_split()`。 如果指定了 `$length` 参数，则将字符串按指定的字符长度（而不是字节长度）拆分为块。 可以选择指定 `$encoding` 参数，这样是很好的做法。

## 参数

- **`$string`** — 要拆分为单个字符或块的字符串。
- **`$length`** — 如果指定，则返回的数组中的每个元素将会由多个字符而不是单个字符组成。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。 — 一个字符串，用于指定一种受支持的编码。

## 返回值

`mb_str_split()` 返回字符串数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |
| 8.0.0 | 此函数在失败时不再返回 `false`。 |

## 参见

`str_split()` `grapheme_str_split()` `explode()`
