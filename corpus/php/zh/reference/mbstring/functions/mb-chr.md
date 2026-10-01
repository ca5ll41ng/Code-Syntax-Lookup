---
id: "zh-php-function-function-mb-chr"
language: "php"
lang: "zh"
category: "function"
name: "mb_chr"
title: "按 Unicode 码位值返回字符"
signature: "string|false mb_chr(int $codepoint, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-chr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 按 Unicode 码位值返回字符

## 说明

```php
string|false mb_chr(int $codepoint, string|null $encoding = null)
```

返回一个含有由 Unicode 码位值所指定的字符的字符串，以指定的编码进行编码。

此函数与 `mb_ord()` 互补。

## 参数

- **`$codepoint`** — 一个 Unicode 码位值，例如 `128024` 是 *U+1F418 ELEPHANT*
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

如果可以用所指定的编码表示，则返回含有所请求的字符的字符串， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 示例

**Testing different code points**

```php

    
<?php
$values = [65, 63, 0x20AC, 128024];
foreach ($values as $value) {
    var_dump(mb_chr($value, 'UTF-8'));
    var_dump(mb_chr($value, 'ISO-8859-1'));
}
?>

   
```

以上示例会输出：

```text

    
string(1) "A"
string(1) "A"
string(1) "?"
string(1) "?"
string(3) "€"
bool(false)
string(4) "🐘"
bool(false)

   
```

## 参见

`mb_internal_encoding()` `mb_ord()` `IntlChar::ord()` `chr()`
