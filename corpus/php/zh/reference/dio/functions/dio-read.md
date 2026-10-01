---
id: "zh-php-function-function-dio-read"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "dio_read"
title: "从文件描述符读取字节"
signature: "string dio_read(resource $fd, int $len = 1024)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从文件描述符读取字节

## 说明

```php
string dio_read(resource $fd, int $len = 1024)
```

`dio_read()` 函数读取并返回描述符 `$fd` 指定文件中的 `$len` 字节。

## 参数

- **`$fd`** — 由 `dio_open()` 返回的文件描述符。
- **`$len`** — 要读取的字节数。如果未指定，`dio_read()` 读取 1K 大小的块。

## 返回值

从 `$fd` 读取的字节。

## 参见

`dio_write()`
