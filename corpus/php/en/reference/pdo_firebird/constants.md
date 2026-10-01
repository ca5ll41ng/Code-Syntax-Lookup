---
id: "en-php-guide-ref-pdo-firebird-constants"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-firebird.constants"
title: "Predefined Constants"
module: "pdo_firebird"
source_url: "https://www.php.net/manual/en/ref.pdo-firebird.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this driver, and will only be available when the extension has been either compiled into PHP or dynamically loaded at runtime. In addition, these driver-specific constants should only be used if you are using this driver. Using driver-specific attributes with another driver may result in unexpected behaviour. `PDO::getAttribute()` may be used to obtain the `PDO::ATTR_DRIVER_NAME` attribute to check the driver, if your code can run against multiple drivers.

> The constants listed below have been *DEPRECATED* as of PHP 8.5.0. Use the corresponding `Pdo\Firebird` constants instead.

- **`PDO::FB_ATTR_DATE_FORMAT` (`int`)** —  `Pdo\Firebird::ATTR_DATE_FORMAT`.
- **`PDO::FB_ATTR_TIME_FORMAT` (`int`)** —  `Pdo\Firebird::ATTR_TIME_FORMAT`.
- **`PDO::FB_ATTR_TIMESTAMP_FORMAT` (`int`)** —  `Pdo\Firebird::ATTR_TIMESTAMP_FORMAT`.
