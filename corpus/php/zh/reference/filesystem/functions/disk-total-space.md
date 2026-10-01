---
id: "zh-php-function-function-disk-total-space"
language: "php"
lang: "zh"
category: "function"
name: "disk_total_space"
title: "返回一个目录的磁盘总大小"
signature: "float|false disk_total_space(string $directory)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.disk-total-space.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个目录的磁盘总大小

## 说明

```php
float|false disk_total_space(string $directory)
```

给出一个包含有一个目录的字符串，本函数将根据相应的文件系统或磁盘分区返回所有的字节数。 【译者注】本函数返回的是该目录所在的磁盘分区的总大小，因此在给出同一个磁盘分区的不同目录作为参数所得到的结果完全相同。 在 Unix 和 Windows 200x/XP 中都支持将一个磁盘分区加载为一个子目录，这时正确使用本函数就很有意义。

## 参数

- **`$directory`** — 文件系统的目录或者磁盘分区。

## 返回值

以浮点返回一个目录的磁盘总大小字节数， 或者在失败时返回 `false`。

## 示例

**`disk_total_space()` 例子**

```php


<?php
// $df 包含 "/" 目录的磁盘大小
$ds = disk_total_space("/");

//在 Windows 下:
$ds = disk_total_space("C:");
$ds = disk_total_space("D:");
?>

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

## 参见

`disk_free_space()`
