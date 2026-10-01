---
id: "zh-php-function-function-mb-strtoupper"
language: "php"
lang: "zh"
category: "function"
name: "mb_strtoupper"
title: "使字符串大写"
signature: "string mb_strtoupper(string $string, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strtoupper.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使字符串大写

## 说明

```php
string mb_strtoupper(string $string, string|null $encoding = null)
```

将所有的字母字符转化成大写并返回 `$string`。

## 参数

- **`$string`** — 要大写的 `string`。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

`$string` 里所有的字母都转换成大写的。

## 示例

**`mb_strtoupper()` 示例**

```php


<?php
$str = "Mary Had A Little Lamb and She LOVED It So";
$str = mb_strtoupper($str);
echo $str; // Prints MARY HAD A LITTLE LAMB AND SHE LOVED IT SO
?>

    
```

**非拉丁 UTF-8 文本的 `mb_strtoupper()` 示例**

```php


<?php
$str = "Τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός";
$str = mb_strtoupper($str, 'UTF-8');
echo $str; // 打印了 ΤΆΧΙΣΤΗ ΑΛΏΠΗΞ ΒΑΦΉΣ ΨΗΜΈΝΗ ΓΗ, ΔΡΑΣΚΕΛΊΖΕΙ ΥΠΈΡ ΝΩΘΡΟΎ ΚΥΝΌΣ
?>

    
```

## 注释

和 `strtoupper()` 不同的是，“字母”是通过 Unicode 字符属性来确定的。 因此这个函数不会受语言环境（locale）设置影响，能够转化任何具有“字母”属性的字符，例如 a 变音符号（ä）。

更多 Unicode 属性的信息，请参见 []()。

## 参见

`mb_strtolower()` `mb_convert_case()` `strtoupper()`
