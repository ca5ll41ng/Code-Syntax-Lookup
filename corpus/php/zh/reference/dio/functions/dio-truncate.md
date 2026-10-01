---
id: "zh-php-function-function-dio-truncate"
language: "php"
lang: "zh"
category: "function"
name: "dio_truncate"
title: "截断文件描述符 fd 为 offset 字节"
signature: "bool dio_truncate(resource $fd, int $offset)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-truncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 截断文件描述符 fd 为 offset 字节

## 说明

```php
bool dio_truncate(resource $fd, int $offset)
```

`dio_truncate()` 将文件截断为最多 `$offset` 字节的大小。

如果先前的文件大于此大小，则额外的数据将丢失。如果先前的文件较小，不确定是保持文件不变还是扩展文件。在后一种情况下，扩展部分读取为零字节。

## 参数

- **`$fd`** — 由 `dio_open()` 返回的文件描述符。
- **`$offset`** — 偏移字节。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 注释

> 此函数未在 Windows 平台下实现。
