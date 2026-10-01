---
id: "zh-php-function-function-mb-ord"
language: "php"
lang: "zh"
category: "function"
name: "mb_ord"
title: "获取字符的 Unicode 码位值"
signature: "int|false mb_ord(string $string, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-ord.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字符的 Unicode 码位值

## 说明

```php
int|false mb_ord(string $string, string|null $encoding = null)
```

返回所给定的字符的 Unicode 码位值。

此函数与 `mb_chr()` 互补。

## 参数

- **`$string`** — 一个字符串。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

`string` 第一个字符的 Unicode 码位值， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 示例

**一个基础的 `mb_ord()` 示例**

```php


<?php
var_dump(mb_ord("A", "UTF-8"));
var_dump(mb_ord("🐘", "UTF-8"));
var_dump(mb_ord("\x80", "ISO-8859-1"));
var_dump(mb_ord("\x80", "Windows-1252"));
?>

    
```

以上示例会输出：

```text

int(65)
int(128024)
int(128)
int(8364)
    
```

## 参见

`mb_internal_encoding()` `mb_chr()` `IntlChar::ord()` `ord()`
