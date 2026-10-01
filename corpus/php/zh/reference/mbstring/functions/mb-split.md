---
id: "zh-php-function-function-mb-split"
language: "php"
lang: "zh"
category: "function"
name: "mb_split"
title: "使用正则表达式分割多字节字符串"
signature: "array|false mb_split(string $pattern, string $string, int $limit = -1)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-split.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用正则表达式分割多字节字符串

## 说明

```php
array|false mb_split(string $pattern, string $string, int $limit = -1)
```

使用正则表达式 `$pattern` 分割多字节 `$string` 并返回结果 `array`。

## 参数

- **`$pattern`** — 正则表达式。
- **`$string`** — 待分割的 `string`。
- **`$limit`** — 如果指定了可选参数 `$limit`，将最多分割为 `$limit` 个元素。

## 返回值

结果为 `array`， 或者在失败时返回 `false`。

## 注释

> The character encoding specified by `mb_regex_encoding()` will be used as the character encoding for this function by default.

## 参见

`mb_regex_encoding()` `mb_ereg()` `explode()`
