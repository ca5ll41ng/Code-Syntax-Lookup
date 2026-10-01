---
id: "zh-php-function-function-mb-preferred-mime-name"
language: "php"
lang: "zh"
category: "function"
name: "mb_preferred_mime_name"
title: "获取 MIME 字符串"
signature: "string|false mb_preferred_mime_name(string $encoding)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-preferred-mime-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 MIME 字符串

## 说明

```php
string|false mb_preferred_mime_name(string $encoding)
```

获取指定编码的 MIME 字符 `string`。

## 参数

- **`$encoding`** — 要检查的字符串。

## 返回值

字符编码 `$encoding` 的 MIME `charset` `string`，如果指定 `$encoding` 没有首选字符集，则为 `false`。

## 示例

**`mb_preferred_mime_name()` 示例**

```php


<?php
$outputenc = "sjis-win";
mb_http_output($outputenc);
ob_start("mb_output_handler");
header("Content-Type: text/html; charset=" . mb_preferred_mime_name($outputenc));
?>

    
```
