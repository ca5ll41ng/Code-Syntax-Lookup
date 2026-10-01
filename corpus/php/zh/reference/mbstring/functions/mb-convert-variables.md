---
id: "zh-php-function-function-mb-convert-variables"
language: "php"
lang: "zh"
category: "function"
name: "mb_convert_variables"
title: "转换一个或多个变量的字符编码"
signature: "string|false mb_convert_variables(string $to_encoding, array|string $from_encoding, mixed $var, mixed $vars)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-convert-variables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转换一个或多个变量的字符编码

## 说明

```php
string|false mb_convert_variables(string $to_encoding, array|string $from_encoding, mixed $var, mixed $vars)
```

将变量 `$var` 和 `$vars` 的编码从 `$from_encoding` 转换成编码 `$to_encoding`。

`mb_convert_variables()` 会拼接变量数组或对象中的字符串来检测编码，因为短字符串的检测往往会失败。因此，不能在一个数组或对象中混合使用编码。

## 参数

- **`$to_encoding`** — 将 `string` 转换成这个编码。
- **`$from_encoding`** — `$from_encoding` 可以指定为一个 `array` 或者逗号分隔的 `string`，它将尝试根据 `$from-coding` 来检测编码。 当省略了 `$from_encoding`，将使用 `detect_order`。
- **`$var`** — `$var` 是要转换的变量的引用。 参数可以接受 String、Array 和 Object 的类型。 `mb_convert_variables()` 假设所有的参数都具有同样的编码。
- **`$vars`** — 额外的 `$var`。

## 返回值

成功时返回转换前的字符编码，失败时返回 `false`。

## 示例

**`mb_convert_variables()` 示例**

```php


<?php
/* 转换变量 $post1、$post2 编码为内部（internal）编码 */
$interenc = mb_internal_encoding();
$inputenc = mb_convert_variables($interenc, "ASCII,UTF-8,SJIS-win", $post1, $post2);
?>

    
```
