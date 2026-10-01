---
id: "zh-php-function-function-fstat"
language: "php"
lang: "zh"
category: "function"
name: "fstat"
title: "通过已打开的文件指针取得文件信息"
signature: "array|false fstat(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fstat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过已打开的文件指针取得文件信息

## 说明

```php
array|false fstat(resource $stream)
```

获取由文件指针 `$stream` 所打开文件的统计信息。本函数和 `stat()` 函数相似，除了它是作用于已打开的文件指针而不是文件名。

## 参数

- **`$stream`** — 文件系统指针，是典型地由 `fopen()` 创建的 `resource`(资源)。

## 返回值

返回一个数组具有该文件的统计信息，该数组的格式详细说明于手册中 `stat()` 页面里。失败时返回 `false`。

## 示例

**`fstat()` 例子**

```php


<?php

// 打开文件
$fp = fopen("/etc/passwd", "r");

// 取得统计信息
$fstat = fstat($fp);

// 关闭文件
fclose($fp);

// 只显示关联数组部分
print_r(array_slice($fstat, 13));
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [dev] => 771
    [ino] => 488704
    [mode] => 33188
    [nlink] => 1
    [uid] => 0
    [gid] => 0
    [rdev] => 0
    [size] => 1114
    [atime] => 1061067181
    [mtime] => 1056136526
    [ctime] => 1056136526
    [blksize] => 4096
    [blocks] => 8
)

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。
