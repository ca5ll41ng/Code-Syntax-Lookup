---
id: "en-php-function-function-odbc-commit"
language: "php"
lang: "en"
category: "function"
name: "odbc_commit"
title: "Commit an ODBC transaction"
signature: "bool odbc_commit(Odbc\\Connection $odbc)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commit an ODBC transaction

## Description

```php
bool odbc_commit(Odbc\Connection $odbc)
```

Commits all pending transactions on the connection.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
