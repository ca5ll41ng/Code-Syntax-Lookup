---
id: "zh-php-function-function-fpassthru"
language: "php"
lang: "zh"
category: "function"
name: "fpassthru"
title: "输出文件指针处的所有剩余数据"
signature: "int fpassthru(resource $stream)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fpassthru.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出文件指针处的所有剩余数据

## 说明

```php
int fpassthru(resource $stream)
```

将给定的文件指针从当前的位置读取到 EOF 并把结果写到输出缓冲区。

如果已经向文件写入数据，就必须调用 `rewind()` 来将文件指针指向文件头。

如果既不修改文件也不在特定位置检索，只想将文件的内容下载到输出缓冲区，应该使用 `readfile()`，这样可以省去 `fopen()` 调用。

## 参数

- **`$stream`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。

## 返回值

返回从 `$stream` 读取并传递到输出的字符数量。

## 示例

**对二进制文件使用 `fpassthru()`**

```php


<?php

// 以二进制格式打开文件
$name = './img/ok.png';
$fp = fopen($name, 'rb');

// 发送合适的报头
header("Content-Type: image/png");
header("Content-Length: " . filesize($name));

// 发送图片并终止脚本
fpassthru($fp);
exit;

?>

    
```

## 注释

> 当在 Windows 系统中将 `fpassthru()` 用于二进制文件，要确保在用 `fopen()` 打开文件时在 mode 中附加了 `b` 来将文件以二进制方式打开。
>
> 鼓励在处理二进制文件时使用 `b` 标志，即使系统并不需要，这样可以使脚本的移植性更好。

## 参见

`readfile()` `fopen()` `popen()` `fsockopen()`
