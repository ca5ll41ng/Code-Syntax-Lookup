---
id: "en-php-function-function-db2-commit"
language: "php"
lang: "en"
category: "function"
name: "db2_commit"
title: "Commits a transaction"
signature: "bool db2_commit(resource $connection)"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/function.db2-commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commits a transaction

## Description

```php
bool db2_commit(resource $connection)
```

Commits an in-progress transaction on the specified connection resource and begins a new transaction. PHP applications normally default to AUTOCOMMIT mode, so `db2_commit()` is not necessary unless AUTOCOMMIT has been turned off for the connection resource.

## Parameters

- **`$connection`** — A valid database connection resource variable as returned from `db2_connect()` or `db2_pconnect()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `db2_autocommit()` `db2_rollback()`
