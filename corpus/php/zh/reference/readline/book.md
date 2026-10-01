---
id: "zh-php-guide-book-readline"
language: "php"
lang: "zh"
category: "guide"
name: "book.readline"
title: "GNU Readline"
module: "readline"
source_url: "https://www.php.net/manual/zh/book.readline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# GNU Readline

Readline

 {{{ preface 

 简介  readline 扩展函数实现了访问 GNU Readline 库的接口。这些函数提供了可编辑的命令行。一个例子是在 Bash 中允许使用箭头按键来插入字符或者翻看历史命令。因为这个库的交互特性，对编写 Web 应用程序没多大用处，但当编写从命令行使用的脚本时非常有用.    从 PHP 7.1.0 开始，该扩展支持 Windows。   
> readline 扩展并非线程安全！因此，强烈建议不要在任何真正线程安全的 SAPI（例如 Apache 的 mod_winnt）中使用这个扩展！

 

 }}}
