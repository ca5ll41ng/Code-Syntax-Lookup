---
id: "zh-php-function-function-md5-file"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "md5_file"
title: "计算指定文件的 MD5 散列值"
signature: "string|false md5_file(string $filename, bool $binary = false)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.md5-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算指定文件的 MD5 散列值

## 说明

```php
string|false md5_file(string $filename, bool $binary = false)
```

使用 [RSA 数据安全公司的 MD5 消息摘要算法](1321) 计算 `$filename` 参数指定的文件的 MD5 散列值，并返回该散列值。 该散列值是 32 字符的十六进制数。

## 参数

- **`$filename`** — 文件名
- **`$binary`** — 为 `true` 时，返回 16 字符长度的原始二进制格式的摘要。

## 返回值

成功返回字符串，否则返回 `false`。

## 示例

**`md5_file()` 使用示例**

```php


<?php
$file = '/examples/book.xml';

echo 'MD5 file hash of ' . $file . ': ' . md5_file($file);
?>

    
```

## 参见

`hash_file()` `hash_init()` `md5()`
