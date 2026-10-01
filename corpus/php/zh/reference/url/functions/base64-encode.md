---
id: "zh-php-function-function-base64-encode"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "base64_encode"
title: "使用 MIME base64 对数据进行编码"
signature: "string base64_encode(string $string)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.base64-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 MIME base64 对数据进行编码

## 说明

```php
string base64_encode(string $string)
```

使用 base64 对 `$string` 进行编码。

设计此种编码是为了使二进制数据可以通过非纯 8-bit 的传输层传输，例如电子邮件的主体。

Base64-encoded 数据要比原始数据多占用 33% 左右的空间。

## 参数

- **`$string`** — 要编码的数据。

## 返回值

编码后的字符串数据。

## 示例

**`base64_encode()` 示例**

```php


<?php
$str = 'This is an encoded string';
echo base64_encode($str);
?>

    
```

以上示例会输出：

```text


VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==

    
```

## 参见

`base64_decode()` `chunk_split()` `convert_uuencode()` [RFC 2045](2045) 6.8 章节
