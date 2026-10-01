---
id: "zh-php-function-function-dio-open"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "dio_open"
title: "在 C 库输入/输出流函数允许的更低级别打开（必要时创建）文件"
signature: "resource dio_open(string $filename, int $flags, int $mode = 0)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 C 库输入/输出流函数允许的更低级别打开（必要时创建）文件

## 说明

```php
resource dio_open(string $filename, int $flags, int $mode = 0)
```

`dio_open()` 打开文件并返回新的文件描述符。

## 参数

- **`$filename`** — 要打开的文件路径。
- **`$flags`** — `$flags` 参数是按位或运算值，包含以下列表的标志。 必须包含 `O_RDONLY`、`O_WRONLY` 或 `O_RDWR` 中的一个。此外，可以包含此列表中其它标志的任意组合。 - `O_RDONLY` - 打开文件读访问。 - `O_WRONLY` - 打开文件写访问。 - `O_RDWR` - 打开文件读写。 - `O_CREAT` - 如果文件不存在，创建文件。 - `O_EXCL` - 如果同时设置了 `O_CREAT` 和 `O_EXCL`，并且文件已存在，`dio_open()` 将执行失败。 - `O_TRUNC` - 如果文件存在且已打开写访问，将会被截断到 0 长度。 - `O_APPEND` - 写操作在文件末尾写数据。 - `O_NONBLOCK` - 设置非阻塞模式。 - `O_NOCTTY` - 防止操作系统在打开 TTY 设备文件时将文件指定为进程的控制终端。
- **`$mode`** — 如果 `$flags` 包含 `O_CREAT`，`$mode` 将设置文件权限（创建权限）。当 `$flags` 指定了 `O_CREAT` 标志时，需要 `$mode` 才能正确操作，否则将会被忽略。 — 分配给创建文件的实际权限照例受到进程的 *umask* 设置的影响。

## 返回值

文件描述符，错误时是 `false`。

## 示例

**打开文件描述符**

```php


<?php

$fd = dio_open('/dev/ttyS0', O_RDWR | O_NOCTTY | O_NONBLOCK);

dio_close($fd);
?>

   
```

## 参见

`dio_close()`
