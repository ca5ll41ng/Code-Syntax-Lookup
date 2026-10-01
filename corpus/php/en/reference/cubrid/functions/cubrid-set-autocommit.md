---
id: "en-php-function-function-cubrid-set-autocommit"
language: "php"
lang: "en"
category: "function"
name: "cubrid_set_autocommit"
title: "Set autocommit mode of the connection"
signature: "bool cubrid_set_autocommit(resource $conn_identifier, bool $mode)"
module: "cubrid"
source_url: "https://www.php.net/manual/en/function.cubrid-set-autocommit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set autocommit mode of the connection

## Description

```php
bool cubrid_set_autocommit(resource $conn_identifier, bool $mode)
```

The `cubrid_set_autocommit()` function is used to set the CUBRID database auto-commit mode of the current database connection.

In CUBRID PHP, auto-commit mode is disabled by default for transaction management. When auto-commit mode is turned from off to on, any pending work is automatically committed.

## Parameters

- **`$conn_identifier`** — Connection identifier.
- **`$mode`** — Auto-commit mode. The following constants can be used:
   `CUBRID_AUTOCOMMIT_FALSE` `CUBRID_AUTOCOMMIT_TRUE` 



## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `cubrid_get_autocommit()` `cubrid_commit()`
