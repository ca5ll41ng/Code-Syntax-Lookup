---
id: "zh-php-guide-zip-installation"
language: "php"
lang: "zh"
category: "guide"
name: "zip.installation"
title: "安装"
module: "zip"
source_url: "https://www.php.net/manual/zh/zip.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

## Linux 系统

必须在编译 PHP 时用 --with-zip 配置选项来提供 zip 支持来使用这些方法。

PHP 7.4.0 之前，PHP 捆绑了 libzip，编译扩展需要使用 --enable-zip 配置项。从 PHP 7.3.0 开始, 不鼓励使用捆绑的 libzip 进行构建，但仍然可以使用 --without-libzip 配置项。

新增 --with-libzip=DIR 配置选项以使用系统 libzip 安装。需要 libzip 版本 0.11，推荐使用 0.11.2 或更高版本。

## Windows

从 PHP 8.2.0 开始，必须在 php.ini 中启用 `php_zip.dll` DLL。以前内置此扩展。

## 通过 PECL 安装

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [zip](zip).
