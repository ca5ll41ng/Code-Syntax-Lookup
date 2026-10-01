---
id: "en-php-guide-pdo-oci-constants"
language: "php"
lang: "en"
category: "guide"
name: "pdo-oci.constants"
title: "Predefined Constants"
module: "pdo_oci"
source_url: "https://www.php.net/manual/en/pdo-oci.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this driver, and will only be available when the extension has been either compiled into PHP or dynamically loaded at runtime. In addition, these driver-specific constants should only be used if you are using this driver. Using driver-specific attributes with another driver may result in unexpected behaviour. `PDO::getAttribute()` may be used to obtain the `PDO::ATTR_DRIVER_NAME` attribute to check the driver, if your code can run against multiple drivers.

- **`PDO::OCI_ATTR_ACTION` (`int`)** — Provides a way to specify the action on the database session. — This exists as of PHP 7.2.16 and 7.3.3
- **`PDO::OCI_ATTR_CLIENT_INFO` (`int`)** — Provides a way to specify the client info on the database session. — This exists as of PHP 7.2.16 and 7.3.3
- **`PDO::OCI_ATTR_CLIENT_IDENTIFIER` (`int`)** — Provides a way to specify the client identifier on the database session. — This exists as of PHP 7.2.16 and 7.3.3
- **`PDO::OCI_ATTR_MODULE` (`int`)** — Provides a way to specify the module on the database session. — This exists as of PHP 7.2.16 and 7.3.3
