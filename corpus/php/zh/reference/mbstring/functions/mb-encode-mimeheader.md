---
id: "zh-php-function-function-mb-encode-mimeheader"
language: "php"
lang: "zh"
category: "function"
name: "mb_encode_mimeheader"
title: "为 MIME 头编码字符串"
signature: "string mb_encode_mimeheader(string $string, string|null $charset = null, string|null $transfer_encoding = null, string $newline = \"\\r\\n\", int $indent = 0)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-encode-mimeheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为 MIME 头编码字符串

## 说明

```php
string mb_encode_mimeheader(string $string, string|null $charset = null, string|null $transfer_encoding = null, string $newline = "\r\n", int $indent = 0)
```

按 MIME 头编码方案将指定的`字符串` `$string` 进行编码。

## 参数

- **`$string`** — 要编码的 `string`。 它的编码应该和 `mb_internal_encoding()` 一样。
- **`$charset`** — `$charset` 指定了 `$str` 的字符集名。 其默认值由当前的 NLS 设置（`mbstring.language`）来确定。
- **`$transfer_encoding`** — `$transfer_encoding` 指定了 MIME 的编码方案。 它可以是 `"B"`（Base64）也可以是 `"Q"`（Quoted-Printable）。 如果未设置，将回退为 `"B"`。
- **`$newline`** — `$newline` 指定了 EOL（行尾）标记，使 `mb_encode_mimeheader()` 执行了一个换行（[RFC](2822) 文档中规定，超过长度的一行将换成多行，当前该长度硬式编码为 74 个字符）。 如果没有设定，则回退为 `"\r\n"` (CRLF)。
- **`$indent`** — 首行缩进（header 里 `$string` 前的字符数目）。

## 返回值

转换后的`字符串`版本以 ASCII 形式表达。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 使用 Quoted-Printable 编码时，不再丢弃 `NUL`（0）字节， 而是编码为 `=00`。 |
| 8.0.0 | `$charset` 和 `$transfer_encoding` 现在可以为空。 |

## 示例

**`mb_encode_mimeheader()` 例子**

```php


<?php
$name = "太郎"; // kanji
$mbox = "kru";
$doma = "gtinn.mon";
$addr = '"' . addcslashes(mb_encode_mimeheader($name, "UTF-7", "Q"), '"') . '" <' . $mbox . "@" . $doma . ">";
echo $addr;
?>

    
```

以上示例会输出：

```text

     
"=?UTF-7?Q?+WSqQzg-?=" <kru@gtinn.mon>

    
```

## 注释

> 这个函数没有设计成据更高级上下文的中断点来换行（单词边界等）。 这个特性将导致意外的空格可能会让原始字符串看上去很乱。

## 参见

`mb_decode_mimeheader()`
