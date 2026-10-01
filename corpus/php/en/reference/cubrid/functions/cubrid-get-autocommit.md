---
id: "en-php-function-function-cubrid-get-autocommit"
language: "php"
lang: "en"
category: "function"
name: "cubrid_get_autocommit"
title: "Get auto-commit mode of the connection"
signature: "bool cubrid_get_autocommit(resource $conn_identifier)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-get-autocommit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get auto-commit mode of the connection

## Description

```php
bool cubrid_get_autocommit(resource $conn_identifier)
```

The `cubrid_get_autocommit()` function is used to get the status of CUBRID database connection auto-commit mode.

For CUBRID 8.4.0, auto-commit mode is disabled by default for transaction management.

For CUBRID 8.4.1, auto-commit mode is enabled by default for transaction management.

## Parameters

- **`$conn_identifier`** — Connection identifier.

## Return Values

`true`, when auto-commit is on.

`false`, when auto-commit is off.

`null` on error.

## See Also

 `cubrid_set_autocommit()` `cubrid_commit()`
