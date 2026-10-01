---
id: "zh-php-guide-book-ffi"
language: "php"
lang: "zh"
category: "guide"
name: "book.ffi"
title: "外部函数接口"
module: "ffi"
source_url: "https://www.php.net/manual/zh/book.ffi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 外部函数接口

FFI

 简介  此扩展允许在纯 PHP 中加载共享库（`.DLL` 或 `.so`）、调用 C 函数、访问 C 数据结构，而无需深入了解 Zend 扩展 API，也无需学习第三方“中间”语言。公共 API 是使用包含几个静态方法（有几个可以动态调用）和对象重载方法（执行与 C 数据的实际交互）的 `FFI` 类实现的。   
> FFI 有危险，因为它允许在系统上进行底层交互。FFI 扩展应该仅供有 C 和使用 C API 经验的开发者使用。为了最大限度降低风险，ffi.enable php.ini 指令会限制 FFI API 的使用。

 
> FFI 扩展不会提供讨厌的过时 PHP 扩展 API，它仅仅是提供了用于 C 函数和数据结构的特殊接口。

 
> 目前，访问 FFI 数据结构比访问原生 PHP 数组和对象慢很多（大约 2 倍）。 因此使用 FFI 扩展来提高速度没有意义；减少内存消耗可能有意义。
