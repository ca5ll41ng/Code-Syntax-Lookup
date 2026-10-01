---
id: "zh-php-function-function-mb-strpos"
language: "php"
lang: "zh"
category: "function"
name: "mb_strpos"
title: "查找字符串在另一个字符串中首次出现的位置"
signature: "int|false mb_strpos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strpos.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找字符串在另一个字符串中首次出现的位置

## 说明

```php
int|false mb_strpos(string $haystack, string $needle, int $offset = 0, string|null $encoding = null)
```

查找 `$needle` 在 `$haystack` 中首次出现的位置。

基于字符数执行一个多字节安全的 `strpos()` 操作。 第一个字符的位置是 0，第二个字符的位置是 1，以此类推。

## 参数

- **`$haystack`** — 要在这个字符串里获取 `$needle` 首次出现的位置。
- **`$needle`** — 在 `$haystack` 中查找这个字符串。 和 `strpos()` 不同的是，数字的值不会被当做字符的顺序值。
- **`$offset`** — 搜索位置的偏移。如果没有提供该参数，将会使用 0。负数的 offset 会从字符串尾部开始统计。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

返回 `string` 的 `$haystack` 中 `$needle` 首次出现位置的数值。 如果没有找到 `$needle`，它将返回 `false`。

## 错误／异常

- 如果 `$offset` 大于 `$haystack` 的长度，则会抛出 `ValueError` 异常。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$needle` 接受空字符串。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |
| 7.1.0 | 支持负数的 `$offset`。 |

## 参见

`mb_internal_encoding()` `strpos()`
