---
id: "zh-php-syntax-wrappers"
language: "php"
lang: "zh"
category: "syntax"
name: "wrappers"
title: "支持的协议和封装协议"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 支持的协议和封装协议

PHP 带有很多内置 URL 风格的封装协议，可用于类似 `fopen()`、 `copy()`、 `file_exists()` 和 `filesize()` 的文件系统函数。 除了这些封装协议，还能通过 `stream_wrapper_register()` 来注册自定义的封装协议。   
> 用于描述一个封装协议的 URL 语法仅支持 `scheme://...` 的语法。 `scheme:/` 和 `scheme:` 语法是不支持的。
