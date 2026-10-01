---
id: "zh-php-guide-book-outcontrol"
language: "php"
lang: "zh"
category: "guide"
name: "book.outcontrol"
title: "输出缓冲控制"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/book.outcontrol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出缓冲控制

输出控制

 简介  输出控制函数能够控制何时从脚本发送输出。对以下几种情况中很有用，尤其是当需要在脚本开始输出数据后将消息头发送到浏览器时。输出控制函数不会影响使用 `header()` 或 `setcookie()` 发送的消息头，只会影响 PHP 代码中的函数（比如 `echo()`）和数据。
