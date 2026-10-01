---
id: "en-php-guide-ref-pdo-mysql-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-mysql.installation"
title: "Installation"
module: "pdo_mysql"
source_url: "https://www.php.net/manual/en/ref.pdo-mysql.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

The common Unix distributions include binary versions of PHP that can be installed. Although these binary versions are typically built with support for the MySQL extensions, the extension libraries themselves may need to be installed using an additional package. Check the package manager that comes with your chosen distribution for availability.

For example, on Ubuntu the `php5-mysql` package installs the ext/mysql, ext/mysqli, and PDO_MYSQL PHP extensions. On CentOS, the `php-mysql` package also installs these three PHP extensions.

Alternatively, you can compile this extension yourself. Building PHP from source allows you to specify the MySQL extensions you want to use, as well as your choice of client library for each extension.

When compiling, use --with-pdo-mysql[=DIR] to install the PDO MySQL extension, where the optional `[=DIR]` is the MySQL base library. Mysqlnd is the default library. For details about choosing a library, see Choosing a MySQL library.

Optionally, the --with-mysql-sock[=DIR] sets to location to the MySQL unix socket pointer for all MySQL extensions, including PDO_MYSQL. If unspecified, the default locations are searched.

Optionally, the --with-zlib-dir[=DIR] is used to set the path to the libz install prefix.

```text


$ ./configure --with-pdo-mysql --with-mysql-sock=/var/mysql/mysql.sock

  
```

SSL support is enabled using the appropriate `Pdo\Mysql::ATTR_SSL_{*}`, which is equivalent to calling the [MySQL C API function mysql_ssl_set()](). Also, SSL cannot be enabled with `PDO::setAttribute()` because the connection already exists. See also the MySQL documentation about [connecting to MySQL with SSL]().
