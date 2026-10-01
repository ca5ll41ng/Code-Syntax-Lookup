---
id: "zh-php-function-function-chunk-split"
language: "php"
lang: "zh"
category: "function"
name: "chunk_split"
title: "将字符串分割成小块"
signature: "string chunk_split(string $string, int $length = 76, string $separator = \"\\r\\n\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.chunk-split.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串分割成小块

## 说明

```php
string chunk_split(string $string, int $length = 76, string $separator = "\r\n")
```

使用此函数将字符串分割成小块非常有用。例如将 `base64_encode()` 的输出转换成符合 RFC 2045 语义的字符串。它会在每 `$length` 个字符后边插入 `$separator`。

## 参数

- **`$string`** — 要分割的字符。
- **`$length`** — 分割的尺寸。
- **`$separator`** — 行尾序列符号。

## 返回值

返回分割后的字符。

## 示例

**`chunk_split()` 例子**

```php


<?php
$data = 'This is quite a long string, which will get broken up because the line is going to be too long after base64 encoding it.';

// 使用 RFC 2045 语义格式化 $data
$new_string = chunk_split(base64_encode($data));
echo $new_string, PHP_EOL;
?>

    
```

## 参见

`str_split()` `explode()` `wordwrap()` [RFC 2045](2045)
