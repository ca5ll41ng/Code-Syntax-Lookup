---
id: "zh-php-guide-book-apcu"
language: "php"
lang: "zh"
category: "guide"
name: "book.apcu"
title: "APC 用户缓存"
module: "apcu"
source_url: "https://www.php.net/manual/zh/book.apcu.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# APC 用户缓存

APCu

 简介  APCu 是 PHP 版的内存键值存储。 键是 `string` 类型且值可以为 PHP 任何变量。 APCu 仅支持用户空间（userland）级别的变量缓存。    APCu 缓存在 Windows 上是按进程的，所以当使用基于进程（而不是基于线程）的 SAPI 时，它不会在不同的进程之间共享。    APCu 是去除了操作码缓存的 APC。    第一个 APCu 代码库版本是 v4.0.0，是在那时从 APC master 分支中 fork 出来的。 APCu v5.0.0 起提供 PHP 7 支持。自 APCu v5.1.19 起提供 PHP 8 支持。
