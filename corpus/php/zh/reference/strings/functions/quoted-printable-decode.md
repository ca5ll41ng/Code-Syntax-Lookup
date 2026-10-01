---
id: "zh-php-function-function-quoted-printable-decode"
language: "php"
lang: "zh"
category: "function"
name: "quoted_printable_decode"
title: "将 quoted-printable 字符串转换为 8-bit 字符串"
signature: "string quoted_printable_decode(string $string)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.quoted-printable-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 quoted-printable 字符串转换为 8-bit 字符串

## 说明

```php
string quoted_printable_decode(string $string)
```

该函数返回 8 位二进制字符串，对应解码后的带引号可打印的字符串（参考 [RFC2045](2045) 的 6.7 章节，而不是 [RFC2821](2821) 的 4.5.2 章节，因此不会去除行首的附加句号）。

该函数与 `imap_qprint()` 函数十分相似，但是该函数不需要依赖 IMAP 模块。

## 参数

- **`$string`** — 输入的字符串。

## 返回值

返回的 8-bit 二进制字符串。

## 示例

**`quoted_printable_decode()` 示例**

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

`quoted_printable_encode()`
