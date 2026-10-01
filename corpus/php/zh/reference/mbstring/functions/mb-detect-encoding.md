---
id: "zh-php-function-function-mb-detect-encoding"
language: "php"
lang: "zh"
category: "function"
name: "mb_detect_encoding"
title: "检测字符的编码"
signature: "string|false mb_detect_encoding(string $string, array|string|null $encodings = null, bool $strict = false)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-detect-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测字符的编码

## 说明

```php
string|false mb_detect_encoding(string $string, array|string|null $encodings = null, bool $strict = false)
```

从候选列表中检测 `string` `$string` 最可能的字符编码。

自 PHP 8.1 起，此函数使用启发式检测指定列表中最有可能正确的有效文本编码，且可能不按照提供的 `$encodings` 顺序进行检测。

对预期（intended）字符编码的自动检测不可能永远完全可靠；没有额外的信息，就类似于在没有密钥的情况下解码已编码的字符串。最好使用与数据一起存储或传输的字符编码表示，例如“Content-Type” HTTP 头。

此函数适用于多字节编码，但并非所有字节顺序都构成有效字符串。如果输入字符串包含这样的顺序，则将会拒绝该编码。

> 结果不准确
>
> 此函数的名称具有误导性，它执行的是“猜测”而不是“检测”。
>
> 猜测结果远非准确，因此无法使用此函数准确检测正确的字符编码。

## 参数

- **`$string`** — 要检测的 `string`。
- **`$encodings`** — 尝试的字符编码列表。该列表可以指定为字符串数组，或以逗号分隔的单个字符串。 — 如果省略 `$encodings` 被或为 `null`，则将使用当前的 detect_order（使用 mbstring.detect_order 配置选项或 `mb_detect_order()` 函数设置）。
- **`$strict`** — 控制 `$string` 在列出的所有 `$encodings` 中无效时的行为。如果 `$strict` 设置为 `false`，将返回最接近的匹配编码；如果 `$strict` 设置为 `true`，将返回 `false`。 — 可以使用 mbstring.strict_detection 配置选项设置 `$strict` 的默认值。

## 返回值

检测到的字符编码，如果字符串在任何列出的编码中均无效，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | `mb_detect_encoding()` 将不再返回以下非文本编码：`"Base64"`、`"QPrint"`、`"UUencode"`、`"HTML entities"`、`"7 bit"` 和 `"8 bit"`。 |

## 示例

**`mb_detect_encoding()` 示例**

```php


<?php

$str = "\x95\xB6\x8E\x9A\x83\x52\x81\x5B\x83\x68";

// 使用当前的 detect_order 来检测字符编码
var_dump(mb_detect_encoding($str));

// “auto”将根据 mbstring.language 来扩展
var_dump(mb_detect_encoding($str, "auto"));

// 通过以逗号分隔的列表指定“encodings”参数
var_dump(mb_detect_encoding($str, "JIS, eucjp-win, sjis-win"));

// 使用数组指定“encodings”参数
$encodings = [
  "ASCII",
  "JIS",
  "EUC-JP"
];
var_dump(mb_detect_encoding($str, $encodings));
?>

    
```

以上示例会输出：

```text


string(5) "ASCII"
string(5) "ASCII"
string(8) "SJIS-win"
string(5) "ASCII"

    
```

**`$strict` 参数的影响**

```php

     
<?php
// 'áéóú' 在 ISO-8859-1 中的编码
$str = "\xE1\xE9\xF3\xFA";

// 该字符串不是有效的 ASCII 或 UTF-8，但 UTF-8 被认为是更接近的匹配
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8'], false));
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8'], true));

// 如果找到有效编码，则严格参数不会更改结果
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8', 'ISO-8859-1'], false));
var_dump(mb_detect_encoding($str, ['ASCII', 'UTF-8', 'ISO-8859-1'], true));
?>

    
```

以上示例会输出：

```text


string(5) "UTF-8"
bool(false)
string(10) "ISO-8859-1"
string(10) "ISO-8859-1"

    
```

在某些情况下，相同的字节顺序可能会在多种字符编码中形成有效的字符串，并且无法知道其意图是哪种解释。例如，在众多字符编码中，字节序列“\xC4\xA2”可能是：

"Ä¢" (U+00C4 LATIN CAPITAL LETTER A WITH DIAERESIS followed by U+00A2 CENT SIGN) encoded in any of ISO-8859-1, ISO-8859-15, or Windows-1252 "ФЂ" (U+0424 CYRILLIC CAPITAL LETTER EF followed by U+0402 CYRILLIC CAPITAL LETTER DJE) encoded in ISO-8859-5 "Ģ" (U+0122 LATIN CAPITAL LETTER G WITH CEDILLA) encoded in UTF-8

**匹配多个编码时顺序的影响**

```php

     
<?php
$str = "\xC4\xA2";

// 该字符串在所有三种编码中均有效，但返回的可能并不总是列表中的第一个编码
var_dump(mb_detect_encoding($str, ['UTF-8']));
var_dump(mb_detect_encoding($str, ['UTF-8', 'ISO-8859-1', 'ISO-8859-5'])); // 自 php8.1 起返回 ISO-8859-1 而不是 UTF-8
var_dump(mb_detect_encoding($str, ['ISO-8859-1', 'ISO-8859-5', 'UTF-8']));
var_dump(mb_detect_encoding($str, ['ISO-8859-5', 'UTF-8', 'ISO-8859-1']));
?>

    
```

以上示例会输出：

```text


string(5) "UTF-8"
string(10) "ISO-8859-1"
string(10) "ISO-8859-1"
string(10) "ISO-8859-5"

    
```

## 参见

`mb_detect_order()`
