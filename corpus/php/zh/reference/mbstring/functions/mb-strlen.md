---
id: "zh-php-function-function-mb-strlen"
language: "php"
lang: "zh"
category: "function"
name: "mb_strlen"
title: "获取字符串的长度"
signature: "int mb_strlen(string $string, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strlen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字符串的长度

## 说明

```php
int mb_strlen(string $string, string|null $encoding = null)
```

获取一个 `string` 的长度。

## 参数

- **`$string`** — 要检查长度的 `string`。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

返回 `string` `$string` 中具有字符编码 `$encoding` 的字符数。多字节字符计为 1 个。

## 错误／异常

从 PHP 8.0.0 起，如果 `$encoding` 是无效编码， 则会抛出 ValueError。 在 PHP 8.0.0 之前，会发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |
| 8.0.0 | 现在，如果 `$encoding` 是无效编码， 会抛出 ValueError。 以前会发出 `E_WARNING` 并返回 `false`。 |

## 参见

`mb_internal_encoding()` `grapheme_strlen()` `iconv_strlen()` `strlen()`
