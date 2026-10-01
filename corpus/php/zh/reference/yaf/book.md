---
id: "zh-php-guide-book-yaf"
language: "php"
lang: "zh"
category: "guide"
name: "book.yaf"
title: "Yet Another Framework"
module: "yaf"
source_url: "https://www.php.net/manual/zh/book.yaf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yet Another Framework

Yaf

 简介  `Yet Another Framework`（Yaf）扩展是一个用来开发 web 应用程序的 PHP 框架。    与典型的 PHP 框架不同，Yaf 使用 C 语言编写并编译为扩展：框架类、自动加载器、路由器和分发循环都运行在编译后的代码中，因此单次请求的框架开销以微秒而非毫秒计，也没有需要加载的框架 PHP 文件。它为引导成本至关重要的高流量应用，以及每个请求都需要一个干净的分发周期的长生命周期服务运行时（例如 Swoole）而设计。    Yaf 实现了经典的 MVC 架构：单一入口脚本、带有环境分节的配置文件、引导钩子、具有七个分发钩子的插件系统、六种内置路由类型、PSR-0 风格的自动加载器（`Yaf_Loader`）以及轻量级的 PHP 模板视图（`Yaf_View_Simple`）。    可以在 [Yaf Performance]() 中找到简单的 Yaf 基准测试。快速入门指南请参见 教程 部分。   
> Yaf 需要 PHP 7.0 或更高版本（其源码仓库的 master 分支）；另有 php5 分支支持 PHP 5.2 及更高版本。
