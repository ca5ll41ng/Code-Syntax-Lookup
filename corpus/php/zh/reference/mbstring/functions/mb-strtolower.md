---
id: "zh-php-function-function-mb-strtolower"
language: "php"
lang: "zh"
category: "function"
name: "mb_strtolower"
title: "使字符串小写"
signature: "string mb_strtolower(string $string, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-strtolower.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使字符串小写

## 说明

```php
string mb_strtolower(string $string, string|null $encoding = null)
```

返回所有字母字符转换成小写的 `$string`。

## 参数

- **`$string`** — 要被小写的 `string`。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

所有字母字符已被转换成小写的 `$string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 为希腊字母 sigma 实现了条件性大小写规则。 |

## 示例

**`mb_strtolower()` 示例**

```php


<?php
$str = "Mary Had A Little Lamb and She LOVED It So";
$str = mb_strtolower($str);
echo $str; // 输出： mary had a little lamb and she loved it so
?>

    
```

**非拉丁 UTF-8 文本的 `mb_strtolower()` 例子**

```php


<?php
$str = "Τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός";
$str = mb_strtolower($str, 'UTF-8');
echo $str; // 输出 τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός
?>

    
```

## 注释

和 `strtolower()` 不同的是，“字母”字符的检测是根据字符的 Unicode 属性。因此函数的行为不会受语言设置的影响，能偶转换任意具有“字母”属性的字符，例如元音变音 A（ä）。

更多关于 Unicode 属性的信息，请参见 []()。

## 参见

`mb_strtoupper()` `mb_convert_case()` `strtolower()`
