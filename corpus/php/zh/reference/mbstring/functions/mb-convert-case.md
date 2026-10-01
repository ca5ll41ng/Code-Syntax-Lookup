---
id: "zh-php-function-function-mb-convert-case"
language: "php"
lang: "zh"
category: "function"
name: "mb_convert_case"
title: "对字符串进行大小写转换"
signature: "string mb_convert_case(string $string, int $mode, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-convert-case.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对字符串进行大小写转换

## 说明

```php
string mb_convert_case(string $string, int $mode, string|null $encoding = null)
```

对一个 `string` 进行大小写转换，转换模式由 `$mode` 指定。

## 参数

- **`$string`** — 要被转换的 `string`。
- **`$mode`** — 转换的模式。它可以是 `MB_CASE_UPPER`、`MB_CASE_LOWER`、`MB_CASE_TITLE`、`MB_CASE_FOLD`、`MB_CASE_UPPER_SIMPLE`、`MB_CASE_LOWER_SIMPLE`、`MB_CASE_TITLE_SIMPLE`、`MB_CASE_FOLD_SIMPLE` 的其中一个。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

按 `$mode` 指定的模式转换 `$string` 大小写后的版本。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 为希腊字母 Sigma 实现了条件性大小写规则， 仅适用于 `MB_CASE_LOWER` 和 `MB_CASE_TITLE` 模式， 不适用于 `MB_CASE_LOWER_SIMPLE` 和 `MB_CASE_TITLE_SIMPLE`。 |
| 7.3.0 | 添加对 `MB_CASE_FOLD`、`MB_CASE_UPPER_SIMPLE`、`MB_CASE_LOWER_SIMPLE`、`MB_CASE_TITLE_SIMPLE` 和 `MB_CASE_FOLD_SIMPLE` 作为 `$mode` 的支持。 |

## 示例

**`mb_convert_case()` 示例**

```php


<?php
$str = "mary had a Little lamb and she loved it so";
$str = mb_convert_case($str, MB_CASE_UPPER, "UTF-8");
echo $str, PHP_EOL;
$str = mb_convert_case($str, MB_CASE_TITLE, "UTF-8");
echo $str, PHP_EOL;
?>

    
```

**非拉丁 UTF-8 文本的 `mb_convert_case()` 示例**

```php


<?php
$str = "Τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός";
$str = mb_convert_case($str, MB_CASE_UPPER, "UTF-8");
echo $str, PHP_EOL;
$str = mb_convert_case($str, MB_CASE_TITLE, "UTF-8");
echo $str, PHP_EOL;
?>

    
```

## 注释

和类似 `strtolower()`、`strtoupper()` 的标准大小写转换函数相比，大小写转换的执行根据 Unicode 字符属性的基础。因此函数的行为不受语言环境（locale）设置的影响，能够转换任意具有“字母”属性的字符，例如元音变音A（Ä）。

更多关于 Unicode 属性的信息，请查看 []()。

## 参见

`mb_strtolower()` `mb_strtoupper()` `strtolower()` `strtoupper()` `ucfirst()` `ucwords()`
