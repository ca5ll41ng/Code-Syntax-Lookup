---
id: "zh-php-guide-pthreads-constants"
language: "php"
lang: "zh"
category: "guide"
name: "pthreads.constants"
title: "预定义常量"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pthreads.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`PTHREADS_INHERIT_ALL` (`int`)** — 线程的默认选项。线程开始的时候，pthreads 扩展会将环境复制到线程上下文中。
- **`PTHREADS_INHERIT_NONE` (`int`)** — 新线程开始时，不继承任何内容。
- **`PTHREADS_INHERIT_INI` (`int`)** — 新线程开始时，仅继承 INI 配置。
- **`PTHREADS_INHERIT_CONSTANTS` (`int`)** — 新线程开始时，继承用户定义的常量。
- **`PTHREADS_INHERIT_CLASSES` (`int`)** — 新线程开始时，继承用户定义的类。
- **`PTHREADS_INHERIT_FUNCTIONS` (`int`)** — 新线程开始时，继承用户定义的函数。
- **`PTHREADS_INHERIT_INCLUDES` (`int`)** — 新线程开始时，继承包含文件。
- **`PTHREADS_INHERIT_COMMENTS` (`int`)** — 新线程开始时，继承所有的注释。
- **`PTHREADS_ALLOW_HEADERS` (`int`)** — 允许新线程向标准输出发送头信息（通常情况下是被禁止的）。
