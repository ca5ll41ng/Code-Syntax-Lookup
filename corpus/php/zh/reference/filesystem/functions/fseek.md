---
id: "zh-php-function-function-fseek"
language: "php"
lang: "zh"
category: "function"
name: "fseek"
title: "在文件指针中定位"
signature: "int fseek(resource $stream, int $offset, int $whence = SEEK_SET)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fseek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在文件指针中定位

## 说明

```php
int fseek(resource $stream, int $offset, int $whence = SEEK_SET)
```

在与 `$stream` 关联的文件中设定文件指针位置。新位置从文件头开始以字节数度量，是以 `$whence` 指定的位置加上 `$offset`。

一般来说，允许定位超过文件末尾的位置；如果随后写入数据，则从文件末尾和定位位置之间已读取的任何未写入区域将产生值为 0 的字节。但是，某些 stream 可能不支持此行为，尤其是当它们具有底层固定大小的存储时。

## 参数

- **`$stream`** — 文件系统指针，是典型地由 `fopen()` 创建的 `resource`(资源)。
- **`$offset`** — 偏移量。 — 要移动到文件尾之前的位置，必须传递负数值给 `$offset`，而且 `$whence` 参数设置为 `SEEK_END`。
- **`$whence`** — `$whence` 值是： `SEEK_SET` - 设定位置等于距文件开头为 `$offset` 字节。 `SEEK_CUR` - 设定位置为当前位置加上 `$offset` 字节。 `SEEK_END` - 设定位置为文件尾加上 `$offset` 字节。

## 返回值

成功返回 `0`；否则返回 `-1`。

> 此函数是为了模仿 C 语言中同名函数而创建的。请注意返回值，因为它们与 PHP 中的期望值不同。

## 示例

**`fseek()` 示例**

```php


<?php

$fp = fopen('somefile.txt', 'r');

// read some data
$data = fgets($fp, 4096);

// move back to the beginning of the file
// same as rewind($fp);
fseek($fp, 0);

?>

    
```

## 注释

> 如果使用附加模试（`a` 或 `a+`），任何写入文件数据都会被附加上去，而文件的位置将会被忽略，调用 `fseek()` 的结果尚未定义。

> 并非所有 stream 都支持定位。对于不支持定位的 stream，从当前位置向前定位是通过读取和丢弃数据来实现的；其他形式的定位将会失败。

## 参见

`ftell()` `rewind()`
