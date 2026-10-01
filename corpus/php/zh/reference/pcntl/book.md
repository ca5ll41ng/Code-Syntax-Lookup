---
id: "zh-php-guide-book-pcntl"
language: "php"
lang: "zh"
category: "guide"
name: "book.pcntl"
title: "进程控制"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/book.pcntl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 进程控制

PCNTL

 {{{ preface 

 简介  PHP 的进程控制支持实现了 Unix 方式的进程创建, 程序执行, 信号处理以及进程的中断。进程控制不能被应用在 Web 服务器环境，当其被用于 Web 服务环境时可能会带来意外的结果。    这份文档用于阐述每个进程控制函数的通常用法。关于 Unix 进程控制的更多信息建议查阅系统文档中关于 fork（2）、waitpid（2）、signal（2）等的部分或更全面的参考资料比如《Unix 环境高级编程》（作者：W. Richard Stevens、Addison-Wesley 出版）。    PCNTL 现在使用了 ticks 作为信号处理的回调机制，ticks 在速度上远远超过了之前的处理机制。这个变化与“用户 ticks”遵循了相同的语义。您可以使用 `declare()` 语句在程序中指定允许发生回调的位置。这使得我们对异步事件处理的开销最小化。在编译 PHP 时启用 pcntl 将始终承担这种开销，不论脚本中是否真正使用了 pcntl。   
> 此扩展在 Windows 平台上不可用。

 

 }}}
