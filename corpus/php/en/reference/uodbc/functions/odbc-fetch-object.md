---
id: "en-php-function-function-odbc-fetch-object"
language: "php"
lang: "en"
category: "function"
name: "odbc_fetch_object"
title: "Fetch a result row as an object"
signature: "stdClass|false odbc_fetch_object(Odbc\\Result $statement, int|null $row = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-fetch-object.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch a result row as an object

## Description

```php
stdClass|false odbc_fetch_object(Odbc\Result $statement, int|null $row = null)
```

Fetch an `object` from an ODBC query.

## Parameters

- **`$statement`** — The ODBC result object from `odbc_exec()`.
- **`$row`** — The 1-based number of the row to retrieve. If omitted or `null`, the next row of the result set is fetched, as `odbc_fetch_row()` does. If the driver does not support fetching rows by number, this parameter is ignored.

## Return Values

Returns an object that corresponds to the fetched row, or `false` if there are no more rows.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
| 8.4.0 | `$row` is now nullable, and its default value changed from `-1` to `null`, consistent with `odbc_fetch_row()`. |

## Notes

> This function exists when compiled with DBMaker, IBM DB2 or UnixODBC support.

## See Also

`odbc_fetch_row()` `odbc_fetch_array()` `odbc_num_rows()`
