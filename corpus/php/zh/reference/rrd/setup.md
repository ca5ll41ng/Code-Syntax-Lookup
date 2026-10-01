---
id: "zh-php-guide-rrd-setup"
language: "php"
lang: "zh"
category: "guide"
name: "rrd.setup"
title: "安装/配置"
module: "rrd"
source_url: "https://www.php.net/manual/zh/rrd.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

## 需求

要使用 PECL/rrd 首先需要安装 librrd。最常见的选择是从 Linux 发行版中使用 librrd-dev 包。PECL/rrd 已使用 librrd 1.4.3 测试，旧的或新的版本可能不能工作。

> Librrd 和扩展本身大多都不是线程安全的。librrd 中有许多全局和共享状态。在类似 Apache2 mpm worker 等多线程环境中使用该扩展可能很危险。如果存在许多并行请求，一个请求可以更改其他运行请求的某些全局的 librrd 状态。

## 安装

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [rrd](rrd).
