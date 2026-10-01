---
id: "en-php-function-function-odbc-data-source"
language: "php"
lang: "en"
category: "function"
name: "odbc_data_source"
title: "Returns information about available DSNs"
signature: "array|null|false odbc_data_source(Odbc\\Connection $odbc, int $fetch_type)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-data-source.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns information about available DSNs

## Description

```php
array|null|false odbc_data_source(Odbc\Connection $odbc, int $fetch_type)
```

This function will return the list of available DSN (after calling it several times).

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$fetch_type`** — The `$fetch_type` can be one of two constant types: `SQL_FETCH_FIRST`, `SQL_FETCH_NEXT`. Use `SQL_FETCH_FIRST` the first time this function is called, thereafter use the `SQL_FETCH_NEXT`.

## Return Values

Returns `false` on error, an `array` upon success, and `null` after fetching the last available DSN.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |

## Examples

**List available DSNs**

```php


<?php
$conn = odbc_connect('dsn', 'user', 'pass');
$dsn_info = odbc_data_source($conn, SQL_FETCH_FIRST);
while ($dsn_info) {
    print_r($dsn_info);
    $dsn_info = odbc_data_source($conn, SQL_FETCH_NEXT);
}
?>

   
```

The above example will output something similar to:

```text


Array
(
    [server] => dsn
    [description] => ODBC Driver 17 for SQL Server
)
Array
(
    [server] => other_dsn
    [description] => Microsoft Access Driver (*.mdb, *.accdb)
)
   
```
