---
id: "zh-php-function-function-strpbrk"
language: "php"
lang: "zh"
category: "function"
name: "strpbrk"
title: "在字符串中查找一组字符的任何一个字符"
signature: "string|false strpbrk(string $string, string $characters)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strpbrk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在字符串中查找一组字符的任何一个字符

## 说明

```php
string|false strpbrk(string $string, string $characters)
```

`strpbrk()` 在 `$string` 字符串中查找 `$characters`。

## 参数

- **`$string`** — 在此字符串中查找 `$string`。
- **`$characters`** — 该参数区分大小写。

## 返回值

返回以找到的字符开始的子字符串。如果没有找到，则返回 `false`。

## 示例

**`strpbrk()` 示例**

```php


<?php

$text = 'This is a Simple text.';

// 输出 "is is a Simple text."，因为 'i' 先被匹配
echo strpbrk($text, 'mi'), PHP_EOL;

// 输出 "Simple text."，因为字符区分大小写
echo strpbrk($text, 'S'), PHP_EOL;
?>

    
```

## 参见

`strpos()` `strstr()` `preg_match()`
