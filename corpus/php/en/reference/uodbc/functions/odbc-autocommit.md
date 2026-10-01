---
id: "en-php-function-function-odbc-autocommit"
language: "php"
lang: "en"
category: "function"
name: "odbc_autocommit"
title: "Toggle autocommit behaviour"
signature: "int|bool odbc_autocommit(Odbc\\Connection $odbc, bool|null $enable = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-autocommit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Toggle autocommit behaviour

## Description

```php
int|bool odbc_autocommit(Odbc\Connection $odbc, bool|null $enable = null)
```

Toggles autocommit behaviour.

By default, auto-commit is on for a connection. Disabling auto-commit is equivalent with starting a transaction.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$enable`** — If `$enable` is `true`, auto-commit is enabled, if it is `false` auto-commit is disabled. If `null` is passed, this function returns the auto-commit status for `$odbc`.

## Return Values

With a `null` `$enable` parameter, this function returns auto-commit status for `$odbc`. Non-zero is returned if auto-commit is on, 0 if it is off, or `false` if an error occurs.

If `$enable` is non-null, this function returns `true` on success and `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.3.0 | `$enable` is now nullable. |

## See Also

`odbc_commit()` `odbc_rollback()`
