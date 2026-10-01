---
id: "en-php-guide-class-pdo-dblib"
language: "php"
lang: "en"
category: "guide"
name: "class.pdo-dblib"
title: "The Pdo\\Dblib class"
module: "pdo_dblib"
source_url: "https://www.php.net/manual/en/class.pdo-dblib.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Pdo\Dblib class

Pdo\Dblib

   Introduction  A `PDO` subclass representing a connection using the DBLib PDO driver.      Class Synopsis   Pdo   `Dblib`   `extends` `PDO`      `public` `const` `int` `Pdo\Dblib::ATTR_CONNECTION_TIMEOUT`   `public` `const` `int` `Pdo\Dblib::ATTR_QUERY_TIMEOUT`   `public` `const` `int` `Pdo\Dblib::ATTR_STRINGIFY_UNIQUEIDENTIFIER`   `public` `const` `int` `Pdo\Dblib::ATTR_VERSION`   `public` `const` `int` `Pdo\Dblib::ATTR_TDS_VERSION`   `public` `const` `int` `Pdo\Dblib::ATTR_SKIP_EMPTY_ROWSETS`   `public` `const` `int` `Pdo\Dblib::ATTR_DATETIME_CONVERT`          Predefined Constants 
- **`Pdo\Dblib::ATTR_CONNECTION_TIMEOUT`**
- **`Pdo\Dblib::ATTR_QUERY_TIMEOUT`**
- **`Pdo\Dblib::ATTR_STRINGIFY_UNIQUEIDENTIFIER`**
- **`Pdo\Dblib::ATTR_VERSION`**
- **`Pdo\Dblib::ATTR_TDS_VERSION`**
- **`Pdo\Dblib::ATTR_SKIP_EMPTY_ROWSETS`**
- **`Pdo\Dblib::ATTR_DATETIME_CONVERT`** — This connection attribute controls the format of strings for datetime types. When this is `false`, PDO_DBLIB will return a datetime type as a string in the format that SQL Server returns it in (i.e. `"2017-10-27 10:22:44"`). When `true`, PDO_DBLIB will convert the datetime type into a string using a user-defined or locale format, as specified in the FreeTDS `locales.conf` file. By default, this attribute is `false`.
