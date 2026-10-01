---
id: "zh-php-function-function-iconv-mime-decode"
language: "php"
lang: "zh"
category: "function"
name: "iconv_mime_decode"
title: "解码一个`MIME`头字段"
signature: "string|false iconv_mime_decode(string $string, int $mode = 0, string|null $encoding = null)"
module: "iconv"
source_url: "https://www.php.net/manual/zh/function.iconv-mime-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解码一个`MIME`头字段

## 说明

```php
string|false iconv_mime_decode(string $string, int $mode = 0, string|null $encoding = null)
```

解码一个`MIME`头字段.

## 参数

- **`$string`** — 编码头,是一个字符串.
- **`$mode`** — `$模式`决定了当`iconv_mime_decode()`遇到一个不规则的 `MIME`头字段时,对这个事件作出的行为.你可以指定以下位掩码的任意组合. | 值 | 常量 | 描述 | | --- | --- | --- | | 1 | ICONV_MIME_DECODE_STRICT | 如果使用该位掩码,传入的头字段将会完全一致的按照[RFC2047](2047)的标准定义被解码. 这个选项默认是禁用的,因为有很多零散的邮件用户代理商不遵守标准规范并且不生成正确的`MIME`头. | | 2 | ICONV_MIME_DECODE_CONTINUE_ON_ERROR | 如果使用该位掩码,`iconv_mime_decode_headers()` 将会试图忽略任何错误语法,并继续处理传入的头字段. |
- **`$encoding`** — 可选的 `$encoding` 参数,用指定的字符集表示结果。如果省略或为 `null`，iconv.internal_encoding 将会被默认使用。

## 返回值

如果解码成功,返回一个被解码的`MIME`字段, 如果在解码过程中出现一个错误,将返回`false` .

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$encoding` 现在可为 null。 |

## 示例

**`iconv_mime_decode()`实例**

```php


<?php
//返回结果: "Subject: Prüfung Prüfung"
echo iconv_mime_decode("Subject: =?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmc=?=",
                       0, "ISO-8859-1");
?>

    
```

## 参见

`iconv_mime_decode_headers()` `mb_decode_mimeheader()` `imap_mime_header_decode()` `imap_base64()` `imap_qprint()`
