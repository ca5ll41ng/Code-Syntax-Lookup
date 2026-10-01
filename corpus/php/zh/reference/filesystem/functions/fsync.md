---
id: "zh-php-function-function-fsync"
language: "php"
lang: "zh"
category: "function"
name: "fsync"
title: "同步文件变更（包括元数据）"
signature: "bool fsync(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fsync.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 同步文件变更（包括元数据）

## 说明

```php
bool fsync(resource $stream)
```

此函数同步文件变更，包括元数据。与 `fflush()` 类似，但同时还让操作系统将变更写入到存储介质。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`fsync()` 示例**

```php


<?php

$file = 'test.txt';

$stream = fopen($file, 'w');
fwrite($stream, 'test data');
fwrite($stream, "\r\n");
fwrite($stream, 'additional data');

fsync($stream);
fclose($stream);
?>

    
```

## 参见

`fdatasync()` `fflush()`
