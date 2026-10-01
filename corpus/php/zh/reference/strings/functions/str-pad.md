---
id: "zh-php-function-function-str-pad"
language: "php"
lang: "zh"
category: "function"
name: "str_pad"
title: "使用另一个字符串填充字符串为指定长度"
signature: "string str_pad(string $string, int $length, string $pad_string = \" \", int $pad_type = STR_PAD_RIGHT)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.str-pad.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用另一个字符串填充字符串为指定长度

## 说明

```php
string str_pad(string $string, int $length, string $pad_string = " ", int $pad_type = STR_PAD_RIGHT)
```

该函数返回 `$string` 被从左端、右端或者同时两端被填充到制定长度后的结果。如果可选的 `$pad_string` 参数没有被指定，`$string` 将被空格字符填充，否则它将被 `$pad_string` 填充到指定长度。

## 参数

- **`$string`** — 输入字符串。
- **`$length`** — 填充字符串到最后的长度。 如果 `$length` 的值是负数，小于或者等于输入字符串的长度，不会发生任何填充，并会返回 `$string`。
- **`$pad_string`**
  > 如果填充字符的长度不能被 `$pad_string` 整除，那么 `$pad_string` 可能会被缩短。


- **`$pad_type`** — 可选的 `$pad_type` 参数的可能值为 `STR_PAD_RIGHT`，`STR_PAD_LEFT` 或 `STR_PAD_BOTH`。如果没有指定 `$pad_type`，则假定它是 `STR_PAD_RIGHT`。

## 返回值

返回填充后的字符串。

## 示例

**`str_pad()` 示例**

```php


<?php
$input = "Alien";
echo str_pad($input, 10), PHP_EOL;                      // 输出 "Alien     "
echo str_pad($input, 10, "-=", STR_PAD_LEFT), PHP_EOL;  // 输出 "-=-=-Alien"
echo str_pad($input, 10, "_", STR_PAD_BOTH), PHP_EOL;   // 输出 "__Alien___"
echo str_pad($input,  6, "___"), PHP_EOL;               // 输出 "Alien_"
echo str_pad($input,  3, "*"), PHP_EOL;                 // 输出 "Alien"
?>

    
```

## 参见

`mb_str_pad()`
