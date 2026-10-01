---
id: "zh-php-guide-fileinfo-installation"
language: "php"
lang: "zh"
category: "guide"
name: "fileinfo.installation"
title: "安装"
module: "fileinfo"
source_url: "https://www.php.net/manual/zh/fileinfo.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

扩展默认开启。

Windows 用户需要在 php.ini 中开启绑定的 `php_fileinfo.dll` DLL 来启用本扩展。

PHP 中绑定了 libmagic 库，某些 PHP 版本变更中也可能包含此库。在 PHP fileinfo 扩展的源代码中，有 `libmagic.patch` 文件，这是 libmagic 库的补丁包文件。
