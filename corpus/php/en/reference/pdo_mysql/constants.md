---
id: "en-php-guide-ref-pdo-mysql-constants"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-mysql.constants"
title: "Predefined Constants"
module: "pdo_mysql"
source_url: "https://www.php.net/manual/en/ref.pdo-mysql.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this driver, and will only be available when the extension has been either compiled into PHP or dynamically loaded at runtime. In addition, these driver-specific constants should only be used if you are using this driver. Using driver-specific attributes with another driver may result in unexpected behaviour. `PDO::getAttribute()` may be used to obtain the `PDO::ATTR_DRIVER_NAME` attribute to check the driver, if your code can run against multiple drivers.

> The constants listed below have been *DEPRECATED* as of PHP 8.5.0. Use the corresponding `Pdo\Mysql` constants instead.

- **`PDO::MYSQL_ATTR_USE_BUFFERED_QUERY` (`int`)** —  `Pdo\Mysql::ATTR_USE_BUFFERED_QUERY`
- **`PDO::MYSQL_ATTR_LOCAL_INFILE` (`int`)** —  `Pdo\Mysql::ATTR_LOCAL_INFILE`
- **`PDO::MYSQL_ATTR_LOCAL_INFILE_DIRECTORY` (`int`)** —  `Pdo\Mysql::ATTR_LOCAL_INFILE_DIRECTORY`. Available as of PHP 8.1.0.
- **`PDO::MYSQL_ATTR_INIT_COMMAND` (`int`)** —  `Pdo\Mysql::ATTR_INIT_COMMAND`
- **`PDO::MYSQL_ATTR_READ_DEFAULT_FILE` (`int`)** —  `Pdo\Mysql::ATTR_READ_DEFAULT_FILE`
- **`PDO::MYSQL_ATTR_READ_DEFAULT_GROUP` (`int`)** —  `Pdo\Mysql::ATTR_READ_DEFAULT_GROUP`
- **`PDO::MYSQL_ATTR_MAX_BUFFER_SIZE` (`int`)** —  `Pdo\Mysql::ATTR_MAX_BUFFER_SIZE`
- **`PDO::MYSQL_ATTR_DIRECT_QUERY` (`int`)** —  `PDO::ATTR_EMULATE_PREPARES`
- **`PDO::MYSQL_ATTR_FOUND_ROWS` (`int`)** —  `Pdo\Mysql::ATTR_FOUND_ROWS`
- **`PDO::MYSQL_ATTR_IGNORE_SPACE` (`int`)** —  `Pdo\Mysql::ATTR_IGNORE_SPACE`
- **`PDO::MYSQL_ATTR_COMPRESS` (`int`)** —  `Pdo\Mysql::ATTR_COMPRESS`
- **`PDO::MYSQL_ATTR_SERVER_PUBLIC_KEY` (`int`)** —  `Pdo\Mysql::ATTR_SERVER_PUBLIC_KEY`
- **`PDO::MYSQL_ATTR_SSL_CA` (`int`)** —  `Pdo\Mysql::ATTR_SSL_CA`
- **`PDO::MYSQL_ATTR_SSL_CAPATH` (`int`)** —  `Pdo\Mysql::ATTR_SSL_CAPATH`
- **`PDO::MYSQL_ATTR_SSL_CERT` (`int`)** —  `Pdo\Mysql::ATTR_SSL_CERT`
- **`PDO::MYSQL_ATTR_SSL_CIPHER` (`int`)** —  `Pdo\Mysql::ATTR_SSL_CIPHER`
- **`PDO::MYSQL_ATTR_SSL_KEY` (`int`)** —  `Pdo\Mysql::ATTR_SSL_KEY`
- **`PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT` (`int`)** —  `Pdo\Mysql::ATTR_SSL_VERIFY_SERVER_CERT` Available as of PHP 7.0.18 and PHP 7.1.4.
- **`PDO::MYSQL_ATTR_MULTI_STATEMENTS` (`int`)** —  `Pdo\Mysql::ATTR_MULTI_STATEMENTS`
