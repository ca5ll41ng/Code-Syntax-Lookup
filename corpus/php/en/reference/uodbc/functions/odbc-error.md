---
id: "en-php-function-function-odbc-error"
language: "php"
lang: "en"
category: "function"
name: "odbc_error"
title: "Get the last error code"
signature: "string odbc_error(Odbc\\Connection|null $odbc = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the last error code

## Description

```php
string odbc_error(Odbc\Connection|null $odbc = null)
```

Returns a six-digit ODBC state, or an empty string if there has been no errors.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.

## Return Values

If `$odbc` is specified, the last state of that connection is returned, else the last state of any connection is returned.

This function returns meaningful value only if last odbc query failed (i.e. `odbc_exec()` returned `false`).

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.0.0 | `$odbc` is now nullable. |

## See Also

`odbc_errormsg()` `odbc_exec()`
