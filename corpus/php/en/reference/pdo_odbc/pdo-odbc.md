---
id: "en-php-guide-class-pdo-odbc"
language: "php"
lang: "en"
category: "guide"
name: "class.pdo-odbc"
title: "The Pdo\\Odbc class"
module: "pdo_odbc"
source_url: "https://www.php.net/manual/en/class.pdo-odbc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Pdo\Odbc class

Pdo\Odbc

   Introduction  A `PDO` subclass representing a connection using the ODBC PDO driver.      Class Synopsis   Pdo   `Odbc`   `extends` `PDO`      `public` `const` `int` `Pdo\Odbc::ATTR_USE_CURSOR_LIBRARY`   `public` `const` `int` `Pdo\Odbc::ATTR_ASSUME_UTF8`   `public` `const` `int` `Pdo\Odbc::SQL_USE_IF_NEEDED`   `public` `const` `int` `Pdo\Odbc::SQL_USE_DRIVER`   `public` `const` `int` `Pdo\Odbc::SQL_USE_ODBC`          Predefined Constants 
- **`Pdo\Odbc::ATTR_USE_CURSOR_LIBRARY`** — This option controls whether the ODBC cursor library is used. The ODBC cursor library supports some advanced ODBC features (e.g. block scrollable cursors), which may not be implemented by the driver. The following values are supported: - **`Pdo\Odbc::SQL_USE_IF_NEEDED`** — Use the ODBC cursor library when needed. This is the default. - **`Pdo\Odbc::SQL_USE_DRIVER`** — Never use the ODBC cursor library. - **`Pdo\Odbc::SQL_USE_ODBC`** — Always use the ODBC cursor library.
- **`Pdo\Odbc::ATTR_ASSUME_UTF8`** — Windows only. If `true`, UTF-16 encoded character data (`CHAR`, `VARCHAR` and `LONGVARCHAR`) is converted to UTF-8 when reading from or writing data to the database. If `false` (the default), character encoding conversion may be done by the driver.
