---
id: "zh-php-function-function-str-rot13"
language: "php"
lang: "zh"
category: "function"
name: "str_rot13"
title: "对字符串执行 ROT13 转换"
signature: "string str_rot13(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-rot13.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对字符串执行 ROT13 转换

## 说明

```php
string str_rot13(string $string)
```

对 `$string` 参数执行 ROT13 编码并将结果字符串返回。

ROT13 编码简单地使用字母表中后面第 13 个字母替换当前字母，同时忽略非字母表中的字符。编码和解码都使用相同的函数，传递一个编码过的字符串作为参数，将得到原始字符串。

## 参数

- **`$string`** — 输入字符串。

## 返回值

返回给定字符串的 ROT13 版本。

## 示例

**`str_rot13()` 示例**

```php


<?php

echo str_rot13('PHP 4.3.0'); // CUC 4.3.0

?>

    
```
