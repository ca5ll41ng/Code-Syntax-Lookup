---
id: "en-php-guide-swoole-setup"
language: "php"
lang: "en"
category: "guide"
name: "swoole.setup"
title: "Getting Started"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

## Requirements

Swoole requires the libbrotli library.

Enabling --enable-swoole-curl option requires the libcurl library, and both PHP and Swoole must link to the same libcurl shared library and headers to avoid undefined behavior.

Enabling --enable-iouring option requires liburing library (version >= 2.0) and Linux kernel (version >= 5.12).

Enabling --enable-swoole-thread option requires PHP to be in ZTS (Zend Thread Safety) mode.

Enabling the --enable-cares option requires the libc-ares library.

Enabling the --enable-zstd option requires the libzstd library (version >= 1.4.0).

Enabling the --enable-swoole-sqlite option requires the libsqlite library.

Enabling the --enable-swoole-pgsql option requires the libpq library.

Enabling the --with-swoole-odbc option requires the unixodbc-dev library.

Enabling the --with-swoole-oracle option requires the Oracle Instant Client libraries.

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

  

 }}}
