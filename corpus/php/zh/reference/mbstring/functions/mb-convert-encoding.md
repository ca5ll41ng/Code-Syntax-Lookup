---
id: "zh-php-function-function-mb-convert-encoding"
language: "php"
lang: "zh"
category: "function"
name: "mb_convert_encoding"
title: "转换字符串，从一个字符编码到另一个字符编码"
signature: "array|string|false mb_convert_encoding(array|string $string, string $to_encoding, array|string|null $from_encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-convert-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 转换字符串，从一个字符编码到另一个字符编码

## 说明

```php
array|string|false mb_convert_encoding(array|string $string, string $to_encoding, array|string|null $from_encoding = null)
```

转换 `string` 从 `$from_encoding` 或当前内部编码转换到 `$to_encoding`。 当参数 `$string` 是 `array` 时，将递归转换它所有的 `string` 值。

## 参数

- **`$string`** — 要转换的 `string` 或 `array`。
- **`$to_encoding`** — 所需的结果编码。
- **`$from_encoding`** — 当前用于解释 `$string` 的编码。可以将多个编码指定为 `array` 或逗号分隔列表，在这种情况下，将使用与 `mb_detect_encoding()` 相同的算法来猜测正确的编码。 — 如果 `$from_encoding` 被省略或为 `null`，则将使用 mbstring.internal_encoding 设置，否则使用 default_charset 设置。 — 有关 `$to_encoding` 和 `$from_encoding` 的有效值，请参阅支持的编码。

## 返回值

编码后的 `string`。 成功时返回编码后的 `string` 或 `array`， 或者在失败时返回 `false`。

## 错误／异常

当 `$to_encoding` 或 `$from_encoding` 为无效的编码时， PHP 8.0.0 起将抛出 `ValueError`； 而在 PHP 8.0.0 之前的版本里，会产生一个 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | `mb_convert_encoding()` 将不再返回以下非文本编码：`"Base64"`、`"QPrint"`、`"UUencode"`、`"HTML entities"`、`"7 bit"` 和 `"8 bit"`。 |
| 8.0.0 | 现在，当 `$to_encoding` 为无效编码时， `mb_convert_encoding()` 会抛出 `ValueError`。 |
| 8.0.0 | 现在，当 `$from_encoding` 为无效编码时， `mb_convert_encoding()` 会抛出 `ValueError`。 |
| 8.0.0 | 现在 `$from_encoding` 可以传入 null。 |
| 7.2.0 | 现在该函数的 `$string` 参数同时能接受 `array` 类型。 在此之前，仅支持 `string`。 |

## 示例

**`mb_convert_encoding()` 示例**

```php


<?php
/* 转换内部编码为 SJIS */
$str = mb_convert_encoding($str, "SJIS");

/* 将 EUC-JP 转换成 UTF-7 */
$str = mb_convert_encoding($str, "UTF-7", "EUC-JP");

/* 从 JIS, eucjp-win, sjis-win 中自动检测编码，并转换 str 到 UCS-2LE */
$str = mb_convert_encoding($str, "UCS-2LE", "JIS, eucjp-win, sjis-win");

/* 如果 mbstring.language 是 "Japanese"，"auto" 扩展成 "ASCII,JIS,UTF-8,EUC-JP,SJIS" */
$str = mb_convert_encoding($str, "EUC-JP", "auto");
?>

    
```

## 参见

`mb_detect_order()` `UConverter::transcode()` `iconv()`
