---
id: "en-php-guide-pdo-odbc-global-constants"
language: "php"
lang: "en"
category: "guide"
name: "pdo-odbc.global.constants"
title: "Predefined Constants"
module: "pdo_odbc"
source_url: "https://www.php.net/manual/en/pdo-odbc.global.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this driver, and will only be available when the extension has been either compiled into PHP or dynamically loaded at runtime. In addition, these driver-specific constants should only be used if you are using this driver. Using driver-specific attributes with another driver may result in unexpected behaviour. `PDO::getAttribute()` may be used to obtain the `PDO::ATTR_DRIVER_NAME` attribute to check the driver, if your code can run against multiple drivers.

- **`PDO_ODBC_TYPE` (`string`)** — Describes the ODBC library linked against the PDO_ODBC extension. Possible values include `unixODBC`, `iODBC`, or `generic`.

> The constants listed below have been *DEPRECATED* as of PHP 8.5.0. Use the corresponding `Pdo\Odbc` constants instead.

- **`PDO::ODBC_ATTR_USE_CURSOR_LIBRARY` (`int`)** —  `Pdo\Odbc::ATTR_USE_CURSOR_LIBRARY`.
- **`PDO::ODBC_SQL_USE_IF_NEEDED` (`int`)** —  `Pdo\Odbc::SQL_USE_IF_NEEDED`.
- **`PDO::ODBC_SQL_USE_DRIVER` (`int`)** —  `Pdo\Odbc::SQL_USE_DRIVER`.
- **`PDO::ODBC_SQL_USE_ODBC` (`int`)** —  `Pdo\Odbc::SQL_USE_ODBC`.
- **`PDO::ODBC_ATTR_ASSUME_UTF8` (`bool`)** —  `Pdo\Odbc::ATTR_ASSUME_UTF8`.
