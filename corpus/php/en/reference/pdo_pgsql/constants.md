---
id: "en-php-guide-ref-pdo-pgsql-constants"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-pgsql.constants"
title: "Predefined Constants"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/ref.pdo-pgsql.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this driver, and will only be available when the extension has been either compiled into PHP or dynamically loaded at runtime. In addition, these driver-specific constants should only be used if you are using this driver. Using driver-specific attributes with another driver may result in unexpected behaviour. `PDO::getAttribute()` may be used to obtain the `PDO::ATTR_DRIVER_NAME` attribute to check the driver, if your code can run against multiple drivers.

- **`PDO::PGSQL_ATTR_DISABLE_PREPARES` (`int`)** —  `Pdo\Pgsql::ATTR_DISABLE_PREPARES`. As of PHP 8.5.0, this constant is deprecated.
- **`PDO::PGSQL_TRANSACTION_IDLE` (`int`)** — Equivalent to `Pdo\Pgsql::TRANSACTION_IDLE`. As of PHP 8.5.0, this constant is deprecated, as it has no effect.
- **`PDO::PGSQL_TRANSACTION_ACTIVE` (`int`)** — Equivalent to `Pdo\Pgsql::TRANSACTION_ACTIVE`. As of PHP 8.5.0, this constant is deprecated, as it has no effect.
- **`PDO::PGSQL_TRANSACTION_INTRANS` (`int`)** — Equivalent to `Pdo\Pgsql::TRANSACTION_INTRANS`. As of PHP 8.5.0, this constant is deprecated, as it has no effect.
- **`PDO::PGSQL_TRANSACTION_INERROR` (`int`)** — Equivalent to `Pdo\Pgsql::TRANSACTION_INERROR`. As of PHP 8.5.0, this constant is deprecated, as it has no effect.
- **`PDO::PGSQL_TRANSACTION_UNKNOWN` (`int`)** — Equivalent to `Pdo\Pgsql::TRANSACTION_UNKNOWN`. As of PHP 8.5.0, this constant is deprecated, as it has no effect.
