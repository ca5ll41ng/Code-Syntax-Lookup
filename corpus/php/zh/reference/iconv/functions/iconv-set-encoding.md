---
id: "zh-php-function-function-iconv-set-encoding"
language: "php"
lang: "zh"
category: "function"
name: "iconv_set_encoding"
title: "为字符编码转换设定当前设置"
signature: "bool iconv_set_encoding(string $type, string $encoding)"
module: "iconv"
source_url: "https://www.php.net/manual/zh/function.iconv-set-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为字符编码转换设定当前设置

## 说明

```php
bool iconv_set_encoding(string $type, string $encoding)
```

将 `$type` 设置的值从内部配置变量更改为 `$encoding`。

## 参数

- **`$type`** — `$type` 的值可以是以下其中任意一个： input_encoding output_encoding internal_encoding
- **`$encoding`** — 字符集。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`iconv_set_encoding()` 示例**

```php


<?php
iconv_set_encoding("internal_encoding", "UTF-8");
iconv_set_encoding("output_encoding", "ISO-8859-1");
?>

    
```

## 参见

`iconv_get_encoding()` `ob_iconv_handler()`
