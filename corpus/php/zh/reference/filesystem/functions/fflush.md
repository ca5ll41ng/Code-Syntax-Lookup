---
id: "zh-php-function-function-fflush"
language: "php"
lang: "zh"
category: "function"
name: "fflush"
title: "将缓冲内容输出到文件"
signature: "bool fflush(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fflush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将缓冲内容输出到文件

## 说明

```php
bool fflush(resource $stream)
```

本函数强制将所有缓冲的输出写入 `$stream` 文件句柄所指向的资源。 成功时返回 `true`， 或者在失败时返回 `false`。

文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**File write example using `fflush()`**

```php


<?php
$filename = 'bar.txt';

$file = fopen($filename, 'r+');
rewind($file);
fwrite($file, 'Foo');
fflush($file);
ftruncate($file, ftell($file));
fclose($file);
?>

    
```

## 参见

`clearstatcache()` `fwrite()`
