---
id: "zh-php-function-function-filesize"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "filesize"
title: "取得文件大小"
signature: "int|false filesize(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.filesize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得文件大小

## 说明

```php
int|false filesize(string $filename)
```

取得指定文件的大小。

## 参数

- **`$filename`** — 文件的路径。

## 返回值

返回文件大小的字节数，如果出错返回 `false` 并生成一条 `E_WARNING` 级的错误。

> 因为 PHP 的整数类型是有符号整型而且很多平台使用 32 位整型，对 2GB 以上的文件，一些文件系统函数可能返回无法预期的结果。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`filesize()` 例子**

```php


<?php

// 输出类似：somefile.txt: 1024 bytes

$filename = 'somefile.txt';
echo $filename . ': ' . filesize($filename) . ' bytes';

?>

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`file_exists()`
