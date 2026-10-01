---
id: "zh-php-guide-parallel-setup"
language: "php"
lang: "zh"
category: "guide"
name: "parallel.setup"
title: "安装"
module: "parallel"
source_url: "https://www.php.net/manual/zh/parallel.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

需求  parallel 要求启用 ZTS（Zend 线程安全）PHP 编译（--enable-zts，或者 PHP 8.0.0 之前的非 Windows 系统是 --enable-maintainer-zts）   
> Zend 线程安全在编译后无法启用，因为他是编译时的配置项。

  parallel 应该在任何有有效的 Posix Thread 头文件（pthread.h）和 PHP ZTS 的地方编译，包含 Windows（使用 redhat 的 pthread-w32 项目）。   

 安装  parallel 版本由 PECL 托管，源代码由 [github](krakjoe/parallel) 托管，最简单的安装办法是使用 PECL 安装 [parallel](parallel).    Windows 用户可以从 [PECL](parallel) 网站下载预编译的已发布的二进制文件。   
> Windows 用户需要采取额外的步骤，将 `pthreadVC{?}.dll`（随 Windows 一起发布）添加到 PATH 中。
