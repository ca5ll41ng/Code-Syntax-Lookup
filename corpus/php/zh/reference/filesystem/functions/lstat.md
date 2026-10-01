---
id: "zh-php-function-function-lstat"
language: "php"
lang: "zh"
category: "function"
name: "lstat"
title: "给出一个文件或符号连接的信息"
signature: "array|false lstat(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.lstat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 给出一个文件或符号连接的信息

## 说明

```php
array|false lstat(string $filename)
```

获取由 `$filename` 指定的文件或符号连接的统计信息。

## 参数

- **`$filename`** — 文件或符号连接的路径。

## 返回值

有关 `lstat()` 返回的数组结构见手册中 `stat()` 函数的页面。 本函数和 `stat()` 函数相同，只除了如果 `$filename` 参数是符号连接的话，则该符号连接的状态被返回，而不是该符号连接所指向的文件的状态。

失败时返回 `false`。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**`stat()` 和 `lstat()` 的对照**

```php


<?php
symlink('uploads.php', 'uploads');

// Contrast information for uploads.php and uploads
array_diff(stat('uploads'), lstat('uploads'));
?>

    
```

以上示例的输出类似于：

Information that differs between the two files.

```text


Array
(
    [ino] => 97236376
    [mode] => 33188
    [size] => 34
    [atime] => 1223580003
    [mtime] => 1223581848
    [ctime] => 1223581848
    [blocks] => 8
)

    
```

## 注释

> 此函数的结果会被缓存。参见 `clearstatcache()` 以获得更多细节。

> 自 PHP 5.0.0 起, 此函数也用于*某些* URL 包装器。请参见 `wrappers`以获得支持 `stat()` 系列函数功能的包装器列表。

## 参见

`stat()`
