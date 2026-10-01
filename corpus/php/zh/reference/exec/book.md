---
id: "zh-php-guide-book-exec"
language: "php"
lang: "zh"
category: "guide"
name: "book.exec"
title: "系统程序执行"
module: "exec"
source_url: "https://www.php.net/manual/zh/book.exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 系统程序执行

程序执行

 {{{ preface 

 简介  这些函数提供执行系统本身命令的能力， 以及安全执行系统命令。   
> 在 Windows 平台上，所有命令执行都是通过 `cmd.exe` 来完成的。 因此，调用这些函数的用户需要拥有运行此命令的相应权限。 但是当使用 `bypass_shell` 选项来调用 `proc_open()` 函数时是个例外。

 

 }}}
