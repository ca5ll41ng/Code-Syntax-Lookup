---
id: "zh-php-function-function-file-exists"
language: "php"
lang: "zh"
category: "function"
name: "file_exists"
title: "检查文件或目录是否存在"
signature: "bool file_exists(string $filename)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.file-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查文件或目录是否存在

## 说明

```php
bool file_exists(string $filename)
```

检查文件或目录是否存在。

## 参数

- **`$filename`** — 文件或目录的路径。 — 在 Windows 中要用 `//computername/share/filename` 或者 `\\computername\share\filename` 来检查网络中的共享文件。

## 返回值

如果由 `$filename` 指定的文件或目录存在则返回 `true`，否则返回 `false`。

> 对于指向文件不存在的符号链接，此函数将会返回 `false`。

> The check is done using the real UID/GID instead of the effective one.

> 因为 PHP 的整数类型是有符号整型而且很多平台使用 32 位整型，对 2GB 以上的文件，一些文件系统函数可能返回无法预期的结果。

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 示例

**测试一个文件是否存在**

```php


<?php
$filename = '/path/to/foo.txt';

if (file_exists($filename)) {
    echo "The file $filename exists";
} else {
    echo "The file $filename does not exist";
}
?>

    
```

## 错误／异常

失败时抛出 `E_WARNING` 警告。

## 参见

`is_readable()` `is_writable()` `is_file()` `file()` `SplFileInfo`
