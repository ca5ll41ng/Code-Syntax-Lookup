---
id: "zh-php-function-function-rawurldecode"
language: "php"
lang: "zh"
category: "function"
name: "rawurldecode"
title: "对已编码的 URL 字符串进行解码"
signature: "string rawurldecode(string $string)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.rawurldecode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对已编码的 URL 字符串进行解码

## 说明

```php
string rawurldecode(string $string)
```

返回字符串，此字符串中百分号（`%`）后跟两位十六进制数的序列都将被替换成原义字符。

## 参数

- **`$string`** — 要解码的 URL。

## 返回值

返回解码后的 URL 字符串。

## 示例

**`rawurldecode()` 示例**

```php


<?php

echo rawurldecode('foo%20bar%40baz'); // foo bar@baz

?>

    
```

## 注释

> `rawurldecode()` 不会把加号（'+'）解码为空格，而 `urldecode()` 可以。

## 参见

`rawurlencode()` `urldecode()` `urlencode()` [RFC 3986](3986)
