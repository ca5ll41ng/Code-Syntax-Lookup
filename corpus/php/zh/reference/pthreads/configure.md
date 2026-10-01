---
id: "zh-php-guide-pthreads-installation"
language: "php"
lang: "zh"
category: "guide"
name: "pthreads.installation"
title: "安装"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/pthreads.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

使用 --enable-maintainer-zts 选项编译 PHP。

Windows 用户需要在 php.ini 中配置 `php_pthreads.dll` 扩展。

> Windows 用户同时需要将 `pthreadVC2.dll` （包含在 pthreads 发行包中）加入到 PATH 环境变量中。
