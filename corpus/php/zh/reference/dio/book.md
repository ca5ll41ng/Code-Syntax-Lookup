---
id: "zh-php-guide-book-dio"
language: "php"
lang: "zh"
category: "guide"
name: "book.dio"
title: "直接 IO"
module: "dio"
source_url: "https://www.php.net/manual/zh/book.dio.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 直接 IO

{{{ preface 

 简介  PHP 支持 POSIX 标准（第 6 节）中所描述的直接 IO 函数，执行比 C 语言 I/O 流函数（`fopen()`、`fread()`......）更低级别的 I/O 函数。当仅需要直接控制设备时，才考虑使用 DIO 函数。通常情况下，标准的 filesystem 函数已经足够了。   

 }}}
