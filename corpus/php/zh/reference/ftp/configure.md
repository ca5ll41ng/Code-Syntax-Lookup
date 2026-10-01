---
id: "zh-php-guide-ftp-installation"
language: "php"
lang: "zh"
category: "guide"
name: "ftp.installation"
title: "安装"
module: "ftp"
source_url: "https://www.php.net/manual/zh/ftp.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

为了在 PHP 配置中使用 FTP 函数，应该在安装 PHP 时添加 --enable-ftp 选项。

在 Autotools 中，当使用 `openssl` 扩展一起构建时，FTP SSL 支持会隐式启用，使用 --with-openssl 配置选项。当不使用 `openssl` 扩展构建时，可以使用 --with-ftp-ssl Autotools 配置选项显式启用 FTP SSL 支持。

在 Windows 上，此扩展始终编译为共享扩展，因此必须在 php.ini 中启用。

 更新日志  
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 从 Autotools 配置选项 --with-openssl-dir 中移除，改为使用新的 --with-ftp-ssl 显式启用 FTP SSL 支持， 当不使用 `openssl` 扩展构建时。 |
