---
id: "en-php-function-function-odbc-exec"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[2]}
name: "odbc_exec"
title: "Directly execute an SQL statement"
signature: "Odbc\\Result|false odbc_exec(Odbc\\Connection $odbc, string $query)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Directly execute an SQL statement

## Description

```php
Odbc\Result|false odbc_exec(Odbc\Connection $odbc, string $query)
```

Sends an SQL statement to the database server.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$query`** — The SQL statement.

## Return Values

Returns an ODBC result object if the SQL command was executed successfully, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$flags` was removed. |

## See Also

`odbc_prepare()` `odbc_execute()`
