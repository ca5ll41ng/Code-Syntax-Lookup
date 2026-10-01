---
id: "zh-php-function-function-strlen"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "strlen"
title: "获取字符串长度"
signature: "int strlen(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strlen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字符串长度

## 说明

```php
int strlen(string $string)
```

返回给定的字符串 `$string` 的长度。

## 参数

- **`$string`** — 需要计算长度的`字符串`。

## 返回值

返回 `$string` 的字节数。

## 示例

**`strlen()` 示例**

```php


<?php
$str = 'abcdef';
echo strlen($str), PHP_EOL; // 6

$str = ' ab cd ';
echo strlen($str), PHP_EOL; // 7
?>

    
```

## 注释

> `strlen()` 返回的是字符串的字节数，而不是其中字符的数量。

## 参见

`count()` `grapheme_strlen()` `iconv_strlen()` `mb_strlen()`
