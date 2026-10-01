---
id: "en-php-function-function-odbc-close"
language: "php"
lang: "en"
category: "function"
name: "odbc_close"
title: "Close an ODBC connection"
signature: "void odbc_close(Odbc\\Connection $odbc)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close an ODBC connection

## Description

```php
void odbc_close(Odbc\Connection $odbc)
```

Closes down the connection to the database server.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |

## Notes

> This function will fail if there are open transactions on this connection. The connection will remain open in this case.
