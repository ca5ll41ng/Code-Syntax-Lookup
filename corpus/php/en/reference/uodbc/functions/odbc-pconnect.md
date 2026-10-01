---
id: "en-php-function-function-odbc-pconnect"
language: "php"
lang: "en"
category: "function"
name: "odbc_pconnect"
title: "Open a persistent database connection"
signature: "Odbc\\Connection|false odbc_pconnect(string $dsn, string|null $user = null, string|null $password = null, int $cursor_option = SQL_CUR_USE_DRIVER)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-pconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open a persistent database connection

## Description

```php
Odbc\Connection|false odbc_pconnect(string $dsn, string|null $user = null, string|null $password = null, int $cursor_option = SQL_CUR_USE_DRIVER)
```

Opens a persistent database connection.

This function is much like `odbc_connect()`, except that the connection is not really closed when the script has finished. Future requests for a connection with the same `$dsn`, `$user`, `$password` combination (via `odbc_connect()` and `odbc_pconnect()`) can reuse the persistent connection.

## Parameters

See `odbc_connect()` for details.

## Return Values

Returns an ODBC connection, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | This function returns a `Odbc\Connection` instance now; previously, a `resource` was returned. |
| 8.4.0 | `$user` and `$password` are now nullable, they are now also optional and default to `null`. |
| 8.4.0 | Previously, using an empty string for `$password` would not include `pwd` in the generated connection string for `$dsn`. It is now generated to include a `pwd` which has an empty string as its value. To restore the previous behaviour `$password` can now be set to `null`. |
| 8.4.0 | Previously, if `$dsn` contained `uid` or `pwd` both `$user` and `$password` parameters were ignored. Now `$user` is only ignored if `$dsn` contains `uid`, and `$password` is only ignored if `$dsn` contains `pwd`. |

## Notes

> Persistent connections have no effect if PHP is used as a CGI program.

## See Also

`odbc_connect()` Persistent Database Connections
