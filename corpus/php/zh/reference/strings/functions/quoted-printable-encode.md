---
id: "zh-php-function-function-quoted-printable-encode"
language: "php"
lang: "zh"
category: "function"
name: "quoted_printable_encode"
title: "将 8-bit 字符串转换成 quoted-printable 字符串"
signature: "string quoted_printable_encode(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.quoted-printable-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 8-bit 字符串转换成 quoted-printable 字符串

## 说明

```php
string quoted_printable_encode(string $string)
```

返回 quoted-printable 格式的字符，该格式由 [RFC2045](2045) 6.7.章节里制定。

该函数与 `imap_8bit()` 函数十分相似，不同的是该函数不需要 IMAP 模块就能运行。

## 参数

- **`$string`** — 输入的字符串。

## 返回值

返回编码之后的字符串。

## 示例

**`quoted_printable_encode()` 示例**

```php


<?php

$encoded = quoted_printable_encode('Möchten Sie ein paar Äpfel?');

var_dump($encoded);
var_dump(quoted_printable_decode($encoded));
?>

    
```

以上示例会输出：

```text


string(37) "M=C3=B6chten Sie ein paar =C3=84pfel?"
string(29) "Möchten Sie ein paar Äpfel?"

    
```

## 参见

`quoted_printable_decode()` `iconv_mime_encode()`
