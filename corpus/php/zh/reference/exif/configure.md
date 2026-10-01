---
id: "zh-php-guide-exif-installation"
language: "php"
lang: "zh"
category: "guide"
name: "exif.installation"
title: "安装"
module: "exif"
source_url: "https://www.php.net/manual/zh/exif.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

使用 --enable-exif 选项 配置 PHP 来启用 exif 支持。

Windows 用户必须在 php.ini 中启用 `php_mbstring.dll` 和 `php_exif.dll` 扩展。 请确保在 php.ini 中保持正确的顺序： `php_mbstring.dll` 必须在 `php_exif.dll` *之前* 加载。
