---
id: "zh-php-function-function-mb-decode-mimeheader"
language: "php"
lang: "zh"
category: "function"
name: "mb_decode_mimeheader"
title: "解码 MIME 头字段中的字符串"
signature: "string mb_decode_mimeheader(string $string)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-decode-mimeheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解码 MIME 头字段中的字符串

## 说明

```php
string mb_decode_mimeheader(string $string)
```

解码 MIME 头中编码过的 `string` `$string`。

## 参数

- **`$string`** — 要解码的 `string`。

## 返回值

以内部（internal）字符编码解码的 `string`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 根据 [RFC 2047](2047) 规范，将下划线转换为空格。 |

## 参见

`mb_encode_mimeheader()`
