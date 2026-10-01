---
id: "en-php-guide-mysqlnd-install"
language: "php"
lang: "en"
category: "guide"
name: "mysqlnd.install"
title: "Installation"
module: "mysqlnd"
source_url: "https://www.php.net/manual/en/mysqlnd.install.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

*Installation on Unix*

In order to use the MySQL Native Driver, PHP needs to be built specifying that the MySQL database extensions are compiled with MySQL Native Driver support. This is done through configuration options prior to building the PHP source code.

For example, to build the MySQL extension, `mysqli` and PDO MYSQL using the MySQL Native Driver, the following command would be given:

```shell


 ./configure --with-mysql=mysqlnd \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
[other options]

```

*Installation on Windows*

In the official PHP Windows distributions, MySQL Native Driver is enabled by default, so no additional configuration is required to use it. All MySQL database extensions will use MySQL Native Driver in this case.

*SHA-256 Authentication Plugin support*

The MySQL Native Driver requires the OpenSSL functionality of PHP to be loaded and enabled to connect to MySQL through accounts that use the MySQL SHA-256 Authentication Plugin. For example, PHP could be configured using:

```shell


./configure --with-mysql=mysqlnd \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
--with-openssl
[other options]

```

In Autotools, the extended SSL support in `mysqlnd` is enabled implicitly when building together with the `openssl` extension using the --with-openssl configure option. When building without the `openssl` extension, the --with-mysqlnd-ssl configure option can be used to enable extended SSL support explicitly.

 Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The --with-mysqlnd-ssl Autotools configure option was added to enable the extended SSL support explicitly when building without the `openssl` extension. |
