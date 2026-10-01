---
id: "en-php-guide-ref-pdo-oci-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-oci.installation"
title: "Installation"
module: "pdo_oci"
source_url: "https://www.php.net/manual/en/ref.pdo-oci.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

If the Oracle Database is on the same machine as PHP, the database software already contains the necessary libraries. When PHP is on a different machine, use the free [Oracle Instant Client]() libraries. For details refer to the OCI8 Requirements section.

## PHP 8.4

This extension has been moved to the  repository and is no longer bundled with PHP as of PHP 8.4.0

Information for installing this PECL extension may be found in the manual chapter titled Installation of PECL extensions. Additional information such as new releases, downloads, source files, maintainer information, and a CHANGELOG, can be located here: [PDO_OCI](PDO_OCI).

## PHP < 8.4

Use --with-pdo-oci[=DIR] to install the PDO Oracle OCI extension, where the optional `[=DIR]` is the Oracle Home directory. `[=DIR]` defaults to the `$ORACLE_HOME` environment variable.

Use --with-pdo-oci=instantclient,prefix,version for an Oracle Instant Client SDK, where prefix and version are configured.

```text

    
// Using $ORACLE_HOME
$ ./configure --with-pdo-oci

// Using OIC for Linux with 10.2.0.3 RPMs with a /usr prefix
$ ./configure --with-pdo-oci=instantclient,/usr,10.2.0.3

   
```
