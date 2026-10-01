---
id: "zh-php-guide-mbstring-supported-encodings"
language: "php"
lang: "zh"
category: "guide"
name: "mbstring.supported-encodings"
title: "支持的字符编码"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/mbstring.supported-encodings.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 支持的字符编码

当前 `mbstring` 模块支持以下的字符编码。这些字符编码中的任意一个都能指定到 `mbstring` 函数中的 `encoding` 参数。

该 PHP 扩展支持的字符编码有以下几种：

- UCS-4*
- UCS-4BE
- UCS-4LE*
- UCS-2
- UCS-2BE
- UCS-2LE
- UTF-32*
- UTF-32BE*
- UTF-32LE*
- UTF-16*
- UTF-16BE*
- UTF-16LE*
- UTF-7
- UTF7-IMAP
- UTF-8*
- ASCII*
- EUC-JP*
- SJIS*
- eucJP-win*
- SJIS-win*
- ISO-2022-JP
- ISO-2022-JP-MS
- CP932
- CP51932
- SJIS-mac（别名：MacJapanese）
- SJIS-Mobile#DOCOMO（别名：SJIS-DOCOMO）
- SJIS-Mobile#KDDI（别名：SJIS-KDDI）
- SJIS-Mobile#SOFTBANK（别名：SJIS-SOFTBANK）
- UTF-8-Mobile#DOCOMO（别名：UTF-8-DOCOMO）
- UTF-8-Mobile#KDDI-A
- UTF-8-Mobile#KDDI-B（别名：UTF-8-KDDI）
- UTF-8-Mobile#SOFTBANK（别名：UTF-8-SOFTBANK）
- ISO-2022-JP-MOBILE#KDDI（别名：ISO-2022-JP-KDDI）
- JIS
- JIS-ms
- CP50220
- CP50220raw
- CP50221
- CP50222
- ISO-8859-1*
- ISO-8859-2*
- ISO-8859-3*
- ISO-8859-4*
- ISO-8859-5*
- ISO-8859-6*
- ISO-8859-7*
- ISO-8859-8*
- ISO-8859-9*
- ISO-8859-10*
- ISO-8859-13*
- ISO-8859-14*
- ISO-8859-15*
- ISO-8859-16*
- byte2be
- byte2le
- byte4be
- byte4le
- BASE64
- HTML-ENTITIES（别名：HTML）
- 7bit
- 8bit
- EUC-CN*
- CP936
- GB18030
- HZ
- EUC-TW*
- CP950
- BIG-5*
- EUC-KR*
- UHC（别名：CP949）
- ISO-2022-KR
- Windows-1251（别名：CP1251）
- Windows-1252（别名：CP1252）
- CP866（别名：IBM866）
- KOI8-R*
- KOI8-U*
- ArmSCII-8（别名：ArmSCII8）

* 表示该编码也可以在正则表达式中使用。

任何接受编码名称的 php.ini 条目同样也可以使用 "`auto`" 和 "`pass`" 的值。 接受编码名的 `mbstring` 函数同样也可以使用值 "`auto`"。

如果设置了 "`pass`"，将不会对字符的编码进行转化。

如果设置了 "`auto`"，它将扩展成 NLS 中定义的每个字符编码列表。 比如，假设 NLS 设置为 `Japanese`，值将会认为是 "`ASCII,JIS,UTF-8,EUC-JP,SJIS`"。

参见 `mb_detect_order()`
