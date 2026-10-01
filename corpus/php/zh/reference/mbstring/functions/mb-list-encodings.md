---
id: "zh-php-function-function-mb-list-encodings"
language: "php"
lang: "zh"
category: "function"
name: "mb_list_encodings"
title: "返回所有支持编码的数组"
signature: "array mb_list_encodings()"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-list-encodings.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所有支持编码的数组

## 说明

```php
array mb_list_encodings()
```

返回所有支持编码的数组。

## 参数

此函数没有参数。

## 返回值

返回一个数字索引数组。

## 错误／异常

该函数不会触发任何错误。

## 示例

**`mb_list_encodings()` 例子**

```php


<?php

print_r(mb_list_encodings());

?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => pass
    [1] => auto
    [2] => wchar
    [3] => byte2be
    [4] => byte2le
    [5] => byte4be
    [6] => byte4le
    [7] => BASE64
    [8] => UUENCODE
    [9] => HTML-ENTITIES
    [10] => Quoted-Printable
    [11] => 7bit
    [12] => 8bit
    [13] => UCS-4
    [14] => UCS-4BE
    [15] => UCS-4LE
    [16] => UCS-2
    [17] => UCS-2BE
    [18] => UCS-2LE
    [19] => UTF-32
    [20] => UTF-32BE
    [21] => UTF-32LE
    [22] => UTF-16
    [23] => UTF-16BE
    [24] => UTF-16LE
    [25] => UTF-8
    [26] => UTF-7
    [27] => UTF7-IMAP
    [28] => ASCII
    [29] => EUC-JP
    [30] => SJIS
    [31] => eucJP-win
    [32] => SJIS-win
    [33] => JIS
    [34] => ISO-2022-JP
    [35] => Windows-1252
    [36] => ISO-8859-1
    [37] => ISO-8859-2
    [38] => ISO-8859-3
    [39] => ISO-8859-4
    [40] => ISO-8859-5
    [41] => ISO-8859-6
    [42] => ISO-8859-7
    [43] => ISO-8859-8
    [44] => ISO-8859-9
    [45] => ISO-8859-10
    [46] => ISO-8859-13
    [47] => ISO-8859-14
    [48] => ISO-8859-15
    [49] => EUC-CN
    [50] => CP936
    [51] => HZ
    [52] => EUC-TW
    [53] => BIG-5
    [54] => EUC-KR
    [55] => UHC
    [56] => ISO-2022-KR
    [57] => Windows-1251
    [58] => CP866
    [59] => KOI8-R
)

    
```

## 参见

 `mb_encoding_aliases()`
