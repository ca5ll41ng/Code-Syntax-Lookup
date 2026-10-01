---
id: "en-php-function-function-odbc-rollback"
language: "php"
lang: "en"
category: "function"
name: "odbc_rollback"
title: "Rollback a transaction"
signature: "bool odbc_rollback(Odbc\\Connection $odbc)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-rollback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rollback a transaction

## Description

```php
bool odbc_rollback(Odbc\Connection $odbc)
```

Rolls back all pending statements on the connection.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
