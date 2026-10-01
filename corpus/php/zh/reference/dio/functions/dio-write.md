---
id: "zh-php-function-function-dio-write"
language: "php"
lang: "zh"
category: "function"
name: "dio_write"
title: "截取可选长度的数据写入文件"
signature: "int dio_write(resource $fd, string $data, int $len = 0)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-write.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 截取可选长度的数据写入文件

## 说明

```php
int dio_write(resource $fd, string $data, int $len = 0)
```

`dio_write()` 从 `$data` 写入至多 `$len` 字节数据到文件 `$fd`。

## 参数

- **`$fd`** — 由 `dio_open()` 返回的文件描述符。
- **`$data`** — 写入的数据。
- **`$len`** — 从数据中写入的字节长度。如果没有指定，函数将所有数据写入指定的文件。

## 返回值

返回写入 `$fd` 的字节数。

## 参见

`dio_read()`
