---
id: "zh-php-guide-pthreads-setup"
language: "php"
lang: "zh"
category: "guide"
name: "pthreads.setup"
title: "安装/配置"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pthreads.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

要使用 pthreads 扩展，需要构建 PHP 时启用 ZTS（Zend 线程安全）（--enable-zts 或在 PHP 8.0 之前的非 Windows 平台为 --enable-maintainer-zts）。

> ZTS 是构建期配置选项，只能通过构建时通过选项启用，无法在构建之后启用。

要构建 pthreads 扩展，你需要启用了 ZTS 的 PHP 以及 Posix Threads 头文件（pthread.h）。对于 Windows 平台，需要使用 redhat 的 pthread-w32 项目中的 pthread.h 头文件。

## 安装

pthreads 扩展由 PECL 主持，使用 [github](krakjoe/pthreads) 管理源代码。 使用标准的 PECL 包安装方式就可以完成安装：[pthreads](pthreads)。

Windows 用户可以从 [PECL](pthreads) 下载已经构建的二进制发行包。

> Windows 用户需要将 pthreadVC2.dll （包含在 Windows 版二进制发行包中）所在路径加入到 PATH 环境变量中。
