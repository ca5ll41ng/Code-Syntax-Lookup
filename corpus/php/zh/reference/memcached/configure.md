---
id: "zh-php-guide-memcached-installation"
language: "php"
lang: "zh"
category: "guide"
name: "memcached.installation"
title: "安装"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

安装此 PECL 扩展相关的信息可在手册中标题为 PECL 扩展的安装章节中找到。更多信息如新的发行版本、下载、源文件、 维护人员信息及变更日志等，都在此处： [memcached](memcached).

如果 libmemcached 被安装在一个非标准路径，使用 --with-libmemcached-dir=DIR 来指定路径，DIR 就是 libmemcached 安装时的 prefix 参数。这个路径需要包含文件 `include/libmemcached/memcached.h`。

如果要支持压缩就需要 zlib。对于非标准安装的 zlib 库，使用 --with-zlib-dir=DIR 来指定 zlib 安装路径，DIR 就是 zib 安装时的 prefix 参数。

session 处理程序的支持默认是开启的。如果要关闭它，使用选项 --disable-memcached-session。

默认情况下禁用 SASL 身份验证支持。要启用，请使用 --enable-memcached-sasl。这要求已安装 libsasl2，并且已在启用 SASL 支持的情况下构建 libmemcached。
