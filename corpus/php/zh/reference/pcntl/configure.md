---
id: "zh-php-guide-pcntl-installation"
language: "php"
lang: "zh"
category: "guide"
name: "pcntl.installation"
title: "安装"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/pcntl.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

在 PHP 中进程控制支持默认关闭。需要使用 --enable-pcntl 配置选项重新编译 PHP 的 CGI 或 CLI 版本以打开进程控制支持。

> 当前，这个模块没有非 Unix 平台可用的函数（即非 Unix 类系统不支持此模块）。
