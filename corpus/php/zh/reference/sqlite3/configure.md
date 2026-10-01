---
id: "zh-php-guide-sqlite3-installation"
language: "php"
lang: "zh"
category: "guide"
name: "sqlite3.installation"
title: "安装"
module: "sqlite3"
source_url: "https://www.php.net/manual/zh/sqlite3.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

SQLite3 扩展默认启用。 允许在编译时使用 `--without-sqlite3` 禁用之。

Windows 用户必须启用 `php_sqlite3.dll` 方可使用该扩展。此扩展的 DLL 文件 包含于 Windows 版的 PHP 发行包中。

> 自 PHP 7.4.0 起在 Windows 上的附加设置
>
> 为了使此扩展生效， DLL 文件必须能在 Windows 系统的 PATH 指示的路径下找到。如何操作的信息，请参见题为“如何在 Windows 中将 PHP 目录加到 PATH 中”的FAQ。虽然将 DLL 文件从 PHP 文件夹复制到 Windows 系统目录也行，但不建议这样做。 *此扩展需要下列文件在 PATH 路径中：* `libsqlite3.dll`.
