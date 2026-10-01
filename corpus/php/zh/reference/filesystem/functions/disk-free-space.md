---
id: "zh-php-function-function-disk-free-space"
language: "php"
lang: "zh"
category: "function"
name: "disk_free_space"
title: "返回目录中的可用空间"
signature: "float|false disk_free_space(string $directory)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.disk-free-space.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回目录中的可用空间

## 说明

```php
float|false disk_free_space(string $directory)
```

给出一个包含有一个目录的字符串，本函数将根据相应的文件系统或磁盘分区返回可用的字节数。

## 参数

- **`$directory`** — 文件系统目录或者磁盘分区。
  > 如果指定了文件名而不是文件目录，这个函数的行为将并不统一，会因操作系统和 PHP 版本而异。



## 返回值

以浮点返回可用的字节数， 或者在失败时返回 `false`。

## 示例

**`disk_free_space()` 例子**

```php


<?php
// $df 包含根目录下可用的字节数
$df = disk_free_space("/");

//在 Windows 下:
$df_c = disk_free_space("C:");
$df_d = disk_free_space("D:");
?>

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

## 参见

`disk_total_space()`
