---
id: "zh-php-function-function-dio-seek"
language: "php"
lang: "zh"
category: "function"
name: "dio_seek"
title: "在 fd 指定 pos 位置"
signature: "int dio_seek(resource $fd, int $pos, int $whence = SEEK_SET)"
module: "dio"
source_url: "https://www.php.net/manual/zh/function.dio-seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在 fd 指定 pos 位置

## 说明

```php
int dio_seek(resource $fd, int $pos, int $whence = SEEK_SET)
```

函数 `dio_seek()` 用于更改给定文件描述符的文件当前读/写位置。

## 参数

- **`$fd`** — 由 `dio_open()` 返回的文件描述符。
- **`$pos`** — 新位置。
- **`$whence`** — 指定如何解释 `$pos` 的位置： - `SEEK_SET` （默认）- 从文件开头指定 `$pos`。 - `SEEK_CUR` - 指定 `$pos` 是从文件当前位置计算的字符数。数量可以是正数或负数。 - `SEEK_END` - 指定 `$pos` 是从文件结尾计算的字符数。负数指定文件当前范围内的位置；正数指定超过当前末端的位置。 如果将位置设置为超过当前末尾并写入数据，将用零将文件扩展到该位置。

## 返回值

## 示例

**在文件中定位**

```php


<?php

$fd = dio_open('/dev/ttyS0', O_RDWR);

dio_seek($fd, 10, SEEK_SET);
// position is now at 10 characters from the start of the file

dio_seek($fd, -2, SEEK_CUR);
// position is now at 8 characters from the start of the file

dio_seek($fd, -5, SEEK_END);
// position is now at 5 characters from the end of the file

dio_seek($fd, 10, SEEK_END);
// position is now at 10 characters past the end of the file. 
// The 10 characters between the end of the file and the current
// position are filled with zeros.

dio_close($fd);
?>

    
```
