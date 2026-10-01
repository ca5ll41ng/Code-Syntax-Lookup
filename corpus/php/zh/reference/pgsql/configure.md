---
id: "zh-php-guide-pgsql-installation"
language: "php"
lang: "zh"
category: "guide"
name: "pgsql.installation"
title: "安装"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/pgsql.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

为启用 PostgreSQL 支持，编译 PHP 时需要 --with-pgsql[=DIR]。`DIR` 是 PostgreSQL 的基本安装目录，默认是 `/usr/local/pgsql`。如果共享对象模块可用，可以使用 php.ini 中的 extension 指令或者 `dl()` 函数加载 PostgreSQL 模块。
