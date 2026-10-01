---
id: "zh-php-function-function-ftell"
language: "php"
lang: "zh"
category: "function"
name: "ftell"
title: "返回文件指针读/写的位置"
signature: "int|false ftell(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.ftell.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回文件指针读/写的位置

## 说明

```php
int|false ftell(resource $stream)
```

返回由 `$stream` 指定的文件指针的位置，也就是文件流中的偏移量。

## 参数

- **`$stream`** — 文件指针必须是有效的，且必须指向一个通过 `fopen()` 或 `popen()` 成功打开的文件。在附加模式（加参数 "a" 打开文件）中 `ftell()` 会返回未定义错误。

## 返回值

以整数形式返回由 `$stream` 引用的文件指针的位置，即文件流中的偏移量。

如果出错，返回 `false`。

> 因为 PHP 的整数类型是有符号整型而且很多平台使用 32 位整型，对 2GB 以上的文件，一些文件系统函数可能返回无法预期的结果。

## 示例

**`ftell()` 例子**

```php


<?php

// opens a file and read some data
$fp = fopen("/etc/passwd", "r");
$data = fgets($fp, 12);

// where are we ?
echo ftell($fp); // 11

fclose($fp);

?>

    
```

## 参见

`fopen()` `popen()` `fseek()` `rewind()`
