---
id: "zh-php-function-function-fdatasync"
language: "php"
lang: "zh"
category: "function"
name: "fdatasync"
title: "同步文件数据（不包含元数据）"
signature: "bool fdatasync(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fdatasync.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 同步文件数据（不包含元数据）

## 说明

```php
bool fdatasync(resource $stream)
```

此函数同步 `$stream` 的内容到存储介质，就像是 `fsync()` 所做的那样，但不会同步文件元数据。注意，此函数仅在 POSIX 系统中有实际区别。在 Windows 中，是 `fsync()` 的别名。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`fdatasync()` 示例**

```php


<?php

$file = 'test.txt';

$stream = fopen($file, 'w');
fwrite($stream, 'test data');
fwrite($stream, "\r\n");
fwrite($stream, 'additional data');

fdatasync($stream);
fclose($stream);
?>

    
```

## 参见

`fflush()` `fsync()`
