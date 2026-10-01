---
id: "en-php-guide-ref-pdo-pgsql-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-pgsql.installation"
title: "Installation"
module: "pdo_pgsql"
source_url: "https://www.php.net/manual/en/ref.pdo-pgsql.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

Use --with-pdo-pgsql[=DIR] to install the PDO PostgreSQL extension, where the optional `[=DIR]` is the PostgreSQL base install directory, or the path to *pg_config*.

```text


$ ./configure --with-pdo-pgsql

  
```

This extension requires libpq (the PostgreSQL C client library). As of PHP 8.4.0, libpq 10.0 or later is required.
