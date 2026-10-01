---
id: "zh-php-function-function-base64-decode"
language: "php"
lang: "zh"
category: "function"
name: "base64_decode"
title: "对使用 MIME base64 编码的数据进行解码"
signature: "string|false base64_decode(string $string, bool $strict = false)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.base64-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对使用 MIME base64 编码的数据进行解码

## 说明

```php
string|false base64_decode(string $string, bool $strict = false)
```

对 base64 编码的 `$string` 进行解码。

## 参数

- **`$string`** — 编码过的数据。
- **`$strict`** — 当设置 `$strict` 为 `true` 时，一旦输入的数据超出了 base64 字母表，将返回 `false`。 否则会静默丢弃无效的字符。

## 返回值

返回解码后数据， 或者在失败时返回 `false`。返回的数据可能是二进制的。

## 示例

**`base64_decode()` 示例**

```php


<?php
$str = 'VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==';
echo base64_decode($str);
?>

    
```

以上示例会输出：

```text


This is an encoded string

    
```

## 参见

`base64_encode()` [RFC 2045](2045) 的 6.8 章节。
